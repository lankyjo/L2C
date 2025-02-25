'use client'

import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Emailform from "@/components/Home/Emailform";
import useBlogs from "../data/blogs";
import Loader from "@/components/Loader";

export default function blog(){
    const blogs = useBlogs()

    return(
        <>
            <h2 className="font-extralight text-3xl md:text-5xl px-4 lg:px-40 md:px-16 mt-20">Welcome to my thoughts!</h2>

        <section className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-40 md:px-16 pb-10 gap-10 mt-10">
            {blogs.length!==0?blogs.map((blog)=>(
    
    <article key={blog._id} className='w-full border border-black'>
        <div id='image-container' className='overflow-hidden lg:h-[350px] h-[300px] relative z-10'>
            <Image
            src={blog.image}
            alt='test image'
            fill
            priority
            className='w-full object-cover object-center h-full'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>

        <div id="blog-contents" className='py-5 px-6 space-y-5 md:flex md:flex-col md:space-y-2'>
            <div>
                <span id='blog-date' className='text-xs tracking-wider'>{blog.date}</span>
            </div>

            <Link href={`/blog/${blog._id}`} id='blog-post-content' className='space-y-5 pb-8 inline-block hover:text-red-500 transition-all'>
                <h2 id='post-title' className='font-black text-3xl md:text-xl tracking-wide'>
                    {blog.title.split(' ').slice(0,7).join(' ')}
                    {blog.title.split(" ").length > 7 && "..."}
                </h2>
                <p className='md:text-sm'>
                    {blog.description.split(' ').slice(0, 25).join(' ')}
                    {blog.description.split(' ').length > 25 && '...'}
                </p>
            </Link>
{/* 
            <div className='w-full flex items-center justify-end gap-2 select-none'>
            <FaRegHeart className='text-red-500 text-2xl cursor-pointer inline-block'/>
            <span>0</span>
            </div> */}
        </div>

    </article>
            )):<Loader/>}
        </section>
        <Emailform/>
        </>
    )
}