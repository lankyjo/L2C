import Image from 'next/image'
import React from 'react'
import Follow from './Follow'
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import {FaFacebookF } from "react-icons/fa";
import Link from 'next/link';

const About = () => {
  return (
    <section className='md:col-span-1 md:px-6 w-full mt-10 md:mt-0'>
        <div id='section-header' className='tracking-widest font-extralight text-2xl md:text-3xl uppercase leading-normal mb-5'>About Me</div>

        <div className='flex flex-col gap-10 border-b border-black pb-5'>

        <div id="about-img" className='relative lg:h-[270px] lg:aspect-video md:h-[200px] h-[280px] w-full border border-black overflow-hidden'>
          <Image
          src='/abiut.jpg'
          alt='about img' 
          priority={true}
            fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover object-center'
          />
        </div>

        <div id='text'>
          <p className='text-sm font-light'>
          I’m LankyJo, a front-end web developer passionate about creating secure, responsive, and engaging digital experiences. My expertise in HTML, CSS, JavaScript, React, and Next.js allows me to blend aesthetics with functionality. I thrive on solving problems, optimizing performance, and exploring new technologies. This blog is where I share insights, experiences, and projects. Let’s connect and create something amazing!
          </p>
        </div>

        <Link href="/about" className='hover:text-red-600 font-light transition-all'>Read More ▻</Link>
        </div>

        <Follow/>

        <div id='socials' className='text-center space-x-5 py-3 border-b border-black'>
            <a className="hover:text-red-500 transition-all inline-block text-3xl" href=""><FaSquareXTwitter /></a>
            <a className="hover:text-red-500 transition-all inline-block text-3xl" href=""><AiFillInstagram /></a>
            <a className="hover:text-red-500 transition-all inline-block text-3xl" href=""><FaFacebookF /></a>
        </div>

    </section>
  )
}

export default About