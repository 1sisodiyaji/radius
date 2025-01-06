import { NextRequest, NextResponse } from "next/server";
import Blogs from "@/model/Blog";

export async function DELETE(request: NextRequest) {
  const {_id} = await request.json();
  if(!_id){
    return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
  }
  try {
    const deletedBlog = await Blogs.findOneAndDelete({ _id: _id});

    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
