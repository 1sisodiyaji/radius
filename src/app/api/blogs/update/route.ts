import { NextRequest, NextResponse } from "next/server";
import Blogs from "@/model/Blog";
import slugify from "slugify";


export async function PUT(request: NextRequest) {
  try {
    const { title, description, category, _id } = await request.json();

    if (!title || !description || !category || !_id) {
      return NextResponse.json(
        { error: "Title, description, and category are required" },
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
 
    const updatedBlog = await Blogs.findOneAndUpdate(
      { _id: _id },
      { title, description, category ,slug},
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog updated successfully", blog: updatedBlog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}
