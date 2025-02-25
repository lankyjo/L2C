'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMdShare } from "react-icons/io";

const Blogarticle = ({ blog }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      // Copy the current URL to the clipboard
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      
      // Hide the tooltip after 5 seconds
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <article className='max-w-[800px] border border-black mx-auto w-[92%] my-20 p-10 space-y-10'>
      <div className='space-y-5'>
        {/* Display the blog date */}
        <small className='flex justify-between items-center'>{blog.date}
        <button onClick={handleShare} className='relative'>
            <IoMdShare className='text-2xl' />
            {copied && (
              <div className="absolute left-0 top-full mt-1 px-2 py-1 bg-gray-700 text-white text-sm rounded">
                Copied!
              </div>
            )}
          </button>
        </small>
        <div>
          {/* Display the blog title */}
          <h2 className='text-black font-bungee md:text-4xl text-2xl'>
            {blog.title}
          </h2>

        </div>
      </div>

      <div id='image' className='relative w-full md:h-[500px] h-[300px] max-sm:aspect-video max-sm:h-auto'>
        {/* Display the blog image */}
        <Image 
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className='object-center object-cover'
        />
      </div>

      <div className='border-b border-gray-400 pb-5'>
        {/* Display the blog content */}
        <div className="font-light whitespace-pre-line" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </article>
  )
}

export default Blogarticle;
