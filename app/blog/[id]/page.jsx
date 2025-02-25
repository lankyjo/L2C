"use client";

import { notFound, useParams } from "next/navigation";
import Blogarticle from "@/components/Blogarticle";
import useBlogs from "@/app/data/blogs";
import Loader from "@/components/Loader";



export default function BlogPost() {
  const params = useParams();
  const { id } = params;
  const blogs = useBlogs(); // Initially empty

  // Handle loading state
  if (blogs.length === 0) {
    return <Loader/>; // Show a loading message instead of calling `notFound()`
  }

  // Now that blogs are loaded, find the blog
  const blog = blogs.find((post) => post._id === id);

  if (!blog) return notFound(); // Check for blog only after blogs are loaded

  return <Blogarticle blog={blog} />;
}
