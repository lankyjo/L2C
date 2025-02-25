'use client'
import React, { useEffect, useState } from 'react'
import Blogcard from '../Blogcard'
import useBlogs from '@/app/data/blogs'
import Loader from '../Loader'
import Link from 'next/link'
const Blog = () => {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //     async function fetchBlogs() {
  //         try {
  //             const res = await fetch("/api/blogs");
  //             if (!res.ok) throw new Error("Failed to fetch blogs");
  //             const data = await res.json();
  //             setBlogs(data);
  //         } catch (error) {
  //             console.error(error);
  //         }
  //     }
  //     fetchBlogs();
  // }, []);

  const blogs = useBlogs()
  return (
<>
<section className='md:col-span-2 md:px-5 lg:px-28'>
        <div id='section-header' className='tracking-widest font-extralight text-2xl md:text-3xl uppercase leading-normal mb-5'>Train of thoughts</div>
        {/* <Blogcard/> */}
        <section className='space-y-5'>
          {blogs.length === 0 ? <Loader /> : null}
          {blogs.length === 0 && <p className='text-lg'>No Blogs Yet</p>}
          {blogs.slice(0, 5).map((blog) => (
            <Blogcard key={blog._id} blog={blog} />
          ))}
          {
            blogs.length>=2 && <Link className='mt-8 inline-block hover:text-red-600 text-lg' href={'/blog'}>See All Blogs ▻</Link> 
          }
        </section>

    </section>

</>
    
  )
}

export default Blog