import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/ConnectDB';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
  }
  
  const { data: otpChecker, error: otpCheckerError } = await supabase
  .from("otp-session")
  .select("otp")
  .eq("email", email)
  .single();
  if(!otpCheckerError){
    return NextResponse.json({ error: "Failed to Verify User" }, { status: 401 });
  }
  if(otpChecker){
    return NextResponse.json({ error: "Please Verify Your Account" }, { status: 403 });
  }


  try { 
    const { data: userData, error: fetchError } = await supabase
      .from('admin')
      .select('id, email, password, loginCount ,lastlogin ,status')
      .eq('email', email)
      .single();

      if (fetchError || !userData) {
        return NextResponse.json(
          { error: 'Invalid email or password.' },
          { status: 401 }
        );
      }

      if(!userData.status){
        return NextResponse.json(
          { error: 'User is inactive.' },
          { status: 401 }
        );

      }
      const isPasswordValid = await bcrypt.compare(password, userData.password);

      if (!isPasswordValid) {
        return NextResponse.json(
          { error: 'Invalid email or password.' },
          { status: 401 }
        );
      }

      const { error: updateError } = await supabase
      .from('admin')
      .update({
        loginCount: userData.loginCount + 1,
        lastlogin: new Date().toISOString(),
      })
      .eq('id', userData.id);

    if (updateError) {
      console.error('Failed to update login info:', updateError.message);
    }

    const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET || 'radius-secret-key';
    const token = jwt.sign({ id: userData.id, email: userData.email }, secretKey, {
      expiresIn: '1h',
    });

    const headers = new Headers();
    headers.append(
      'Set-Cookie',
      `token=${token}; HttpOnly; Path=/; Max-Age=3600; Secure; SameSite=Strict`
    );

    return new NextResponse(
      JSON.stringify({
        message: 'User logged in successfully.',
        access_token: token,
        user_id: userData.id,
      }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
