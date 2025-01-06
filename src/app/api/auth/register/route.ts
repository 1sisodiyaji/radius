import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/ConnectDB";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email, Name, password } = await req.json();

    if (!email || !password || !Name) {
      return NextResponse.json(
        { error: "Email, name, and password are required." },
        { status: 400 }
      );
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


    const { data: existingUser, error: emailCheckError } = await supabase
      .from("admin")
      .select("email")
      .eq("email", email)
      .single();

    if (emailCheckError && emailCheckError.code !== "PGRST116") {
      throw new Error(emailCheckError.message);
    }

    if (existingUser) {
      return NextResponse.json(
        { error: "Email is already registered." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { error: userInsertError } = await supabase
      .from("admin")
      .insert({
        Name,
        email,
        password: hashedPassword,
        status: true,
        loginCount: 1
      });

    if (userInsertError) {
      return NextResponse.json(
        { error: "Failed to insert user details in the database.", details: userInsertError.message },
        { status: 500 }
      );
    }
    const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET || "radius-secret-key";
    const token = jwt.sign({email}, secretKey, { expiresIn: "7d" });
 
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=604800; Secure; SameSite=Strict`
    );
 
    return NextResponse.json(
      { message: "User registered successfully.", access_token: token },
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred.", details: error },
      { status: 500 }
    );
  }
}
