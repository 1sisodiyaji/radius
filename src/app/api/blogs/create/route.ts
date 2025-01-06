import { NextRequest, NextResponse } from "next/server";
import Blogs from "@/model/Blog";
import slugify from "slugify";
import { connectToDatabase } from "@/lib/ConnectDB";

export async function POST(request: NextRequest) {
  try {
    const { title, image, description, category } = await request.json();

    if (!title || !image || !description || !category) {
      return NextResponse.json(
        { error: "Title,  description, and category are required" },
        { status: 400 }
      );
    }

    const options = {
      trim: true,
      remove: /[^a-zA-Z0-9 ]/g,
      lower: true,
      strict: true,
    };
    const slug = slugify(title, options);

    await connectToDatabase();
    
    const newBlog = new Blogs({
      title,
      slug,
      image,
      description,
      category,
      likes: 0,
      comments: "",
    });

    await newBlog.save();

    return NextResponse.json(
      { message: "Blog created successfully", blog: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
