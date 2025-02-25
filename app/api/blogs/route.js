import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Blog from "@/models/Blog";
import { uploadImage } from "@/lib/cloudinary"; // ✅ Import Cloudinary helper

export async function GET() {
  try {
    await connectToDatabase();
    const blogs = await Blog.find();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDatabase();

    const formData = await req.formData(); // ✅ Read form data
    const file = formData.get("image"); // ✅ Get uploaded image

    if (!file) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    // ✅ Convert file to Buffer
    const buffer = await file.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");
    const imageData = `data:${file.type};base64,${base64Image}`;

    // ✅ Upload to Cloudinary
    const imageUrl = await uploadImage(imageData);

    // ✅ Extract Other Fields
    const title = formData.get("title");
    const description = formData.get("description");
    const content = formData.get("content");
    const date = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    if (!title || !description || !content) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // ✅ Save to Database
    const newBlog = new Blog({ image: imageUrl, date, title, description, content });
    await newBlog.save();

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}


export async function DELETE(req) {
  try {
    await connectToDatabase();
    const { id } = await req.json(); // ✅ Extract blog ID

    if (!id) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    const deletedBlog = await Blog.findByIdAndDelete(id); // ✅ Delete from DB

    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: `Blog '${deletedBlog.title}' deleted successfully!` }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}