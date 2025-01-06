import { NextRequest, NextResponse } from "next/server";
import Blogs from "@/model/Blog";
import { connectToDatabase } from "@/lib/ConnectDB";

export async function PATCH(request: NextRequest) {
  const { _id } = await request.json();

  if (!_id) {
    return NextResponse.json(
      { error: "Blog ID is required" },
      { status: 400 }
    );
  }
  
  try {
    await connectToDatabase();
    const blog = await Blogs.findOneAndUpdate(
      { _id: _id },
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog liked successfully", blog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error liking blog:", error);
    return NextResponse.json({ error: "Failed to like blog" }, { status: 500 });
  }
}
