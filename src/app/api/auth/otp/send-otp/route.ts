import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/ConnectDB";
import User from "@/model/User";
import { sendEmail } from "@/lib/SendOtp";
import { v4 as uuidv4 } from "uuid";


export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();
 
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        { message: "User not found. Please register." },
        { status: 400 }
      );
    };
    
    const otp = uuidv4().replace(/[^0-9]/g, "").slice(0, 6);
 
   const otpsent =   await sendEmail(email,otp);
   if(!otpsent){
     return NextResponse.json(
       { message: "Failed to send OTP"},
       { status: 500 }
     );
   }

   existingUser.otp = otp;
   await existingUser.save();

    return NextResponse.json(
      { message: "Otp Send successful"},
      { status: 200 }
    );
    
 
  } catch (error) {
    console.error("Otp send error:", error);
    return NextResponse.json(
      { error: "Failed to send otp" },
      { status: 500 }
    );
  }
}
