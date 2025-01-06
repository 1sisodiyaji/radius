import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/ConnectDB"; 
import { v4 as uuidv4 } from "uuid";
import { sendEmail } from "@/lib/SendOtp";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email  are required." },
        { status: 400 }
      );
    }

    const otp = uuidv4().replace(/\D/g, "").slice(0, 6);
    const expirationTime = new Date(Date.now() + 10 * 60000); 

    const otpSend = await sendEmail(email,otp);
    if(!otpSend){
      return NextResponse.json(
        { error: "Failed to send OTP." },
        { status: 500 }
      );
    }
    const {error: dbError } = await supabase
      .from("otp-session")
      .insert([
        {
          otp,
          email,
          expiration_time: expirationTime,
          status: false,
        }
      ]);  

    if (dbError) {
      return NextResponse.json(
        { error: "Failed to store OTP in database.", details: dbError.message },
        { status: 500 }
      );
    }  

    return NextResponse.json(
      { message: "OTP sent successfully. It will expire in 10 minutes." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
