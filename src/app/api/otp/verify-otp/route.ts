import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/ConnectDB";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { otp, email } = body;

    if (!otp || !email) {
      return NextResponse.json(
        { error: "OTP and Email are required." },
        { status: 400 }
      );
    }

    const { data: userData, error: fetchError } = await supabase.from("otp-session").select("otp") .eq("email", email).single();

    if (fetchError) {
      return NextResponse.json(
        { error: "Failed to fetch user data.", details: fetchError.message },
        { status: 500 }
      );
    }

    if (!userData || !userData.otp) {
      return NextResponse.json(
        { error: "No OTP found for this user." },
        { status: 400 }
      );
    }

    if (userData.otp === Number(otp)) {
      const { error: deleteError } = await supabase
        .from("otp-session")
        .delete()
        .eq("email", email);

      if (deleteError) {
        return NextResponse.json(
          { error: "Failed to delete OTP session.", details: deleteError.message },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: "OTP matched and user validated successfully." },
        { status: 200 });
    } else {
      return NextResponse.json(
        { error: "OTP does not match." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error processing OTP:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
