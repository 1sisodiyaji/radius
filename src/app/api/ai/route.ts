import { NextRequest, NextResponse } from "next/server"; 
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    // Google Gemini API URL
    const apiUrl =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

    // Making the API request
    const response = await axios.post(
      `${apiUrl}?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Return the response from the Gemini API
    return NextResponse.json(response.data);
  } catch (error) {
    // Error handling
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
