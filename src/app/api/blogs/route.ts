import {  NextResponse } from "next/server";
import Blogs from "@/model/Blog";
import { connectToDatabase } from "@/lib/ConnectDB";
export async function GET() {

  await connectToDatabase();
  
  try {
    const blogs = await Blogs.find({});
    const count = blogs.length;

    return NextResponse.json(
      { blogs, count },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
