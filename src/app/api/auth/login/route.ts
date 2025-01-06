import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/ConnectDB";
import User from "@/model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getLoginDetails } from "@/lib/TrackUserDetails";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET || "your_secret_key";


export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();
 
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found. Please register." },
        { status: 400 }
      );
    }
 
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
 
    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      JWT_SECRET,
      { expiresIn: "1h" } 
    );
    const { ip, deviceName, locationData } = await getLoginDetails(request);

    await User.findByIdAndUpdate(
      existingUser._id,
      {
        $inc: { loginCount: 1 },
        lastLogined: new Date(),
        lastLoginIp: ip,
        lastLoginDevice: deviceName,
        lastLoginLocation: locationData.city || "Unknown Location",
      },
      { new: true }
    );


    const response = NextResponse.json(
      { message: "Login successful", userId: existingUser._id },
      { status: 200 }
    );
    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
      maxAge: 3600,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Failed to log in" },
      { status: 500 }
    );
  }
}
