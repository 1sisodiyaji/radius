import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/ConnectDB";
import User from "@/model/User";


export async function POST(request: NextRequest) {
  try {
    const { email , otp} = await request.json();

    if (!email ||!otp) {
      return NextResponse.json(
        { message: "Email and otp is required" },
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
    
    if(otp !== existingUser.otp){
        return NextResponse.json(
            { message: "Incorrect Otp." },
            { status: 402 }
          );
    }
    existingUser.otp = null;
    await existingUser.save();

    return NextResponse.json(
      { message: "Otp Send successful"},
      { status: 200 }
    );
    
 
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Failed to log in" },
      { status: 500 }
    );
  }
}
