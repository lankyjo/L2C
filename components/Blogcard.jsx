
'use client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";


const Blogcard = ({blog}) => {
  return (
    <article className='w-full border border-black md:flex md:h-[350px]'>
        <div id='image-container' className='overflow-hidden h-[300px] md:h-auto md:w-1/2 relative z-10'>
            <Image
            src={blog.image}
            alt='test image'
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='w-full object-cover object-center h-full'
            />
        </div>

        <div id="blog-contents" className='py-5 px-6 space-y-5 md:w-1/2 md:flex md:flex-col md:space-y-2'>
            <div>
                <span id='blog-date' className='text-xs tracking-wider'>{blog.date}</span>
            </div>

            <Link href={`/blog/${blog._id}`} id='blog-post-content' className='space-y-5 pb-8 inline-block hover:text-red-500 transition-all'>
                <h2 id='post-title' className='font-black text-3xl md:text-xl tracking-wide'>
                    {blog.title.split(' ').slice(0,8).join(' ')}
                    {blog.title.split(" ").length > 8 && "..."}
                </h2>
                <p className='md:text-sm'>
                    {blog.description.split(' ').slice(0, 25).join(' ')}
                    {blog.description.split(' ').length > 25 && '...'}
                </p>
            </Link>

            {/* <div className='w-full flex items-center justify-end gap-2 select-none'>
            <FaRegHeart className='text-red-500 text-2xl cursor-pointer inline-block'/>
            <span>0</span>
            </div> */}
        </div>

    </article>
  )
}

export default Blogcard