import { NextRequest, NextResponse } from "next/server";
import Blogs from "@/model/Blog";
import { connectToDatabase } from "@/lib/ConnectDB";

export async function PATCH(request: NextRequest) {
  const { comment, _id } = await request.json();

  if (!comment || !_id) {
    return NextResponse.json({ error: "Comment is required" }, { status: 400 });
  }
  try {
    await connectToDatabase();
    const blog = await Blogs.findOneAndUpdate(
      { _id: _id },
      { $push: { comments: comment } },
      { new: true }
    );

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog Comment successfully", blog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Commenting blog:", error);
    return NextResponse.json({ error: "Failed to Comment blog" }, { status: 500 });
  }
}

