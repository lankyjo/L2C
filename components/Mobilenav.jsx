'use client';
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import {FaFacebookF } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Link from "next/link";



const Mobilenav = ({setIsopen, isOpen}) => {
  return (
    <nav className={`fixed z-20 inset-0 bg-ivory flex justify-center items-center md:hidden transition-transform transform ${isOpen?'translate-x-0':'translate-x-full'}`}>
        <ul className='space-y-4'>
        <li className='text-center text-2xl'><Link href="/" onClick={()=>setIsopen(false)} className='block hover:text-red-500 transition-all font-light'>Home</Link></li>
        <li className='text-center text-2xl'><Link href="/about" onClick={()=>setIsopen(false)} className='block hover:text-red-500 transition-all font-light'>About</Link></li>
        <li className='text-center text-2xl'><Link href="/blog" onClick={()=>setIsopen(false)} className='block hover:text-red-500 transition-all font-light'>My Blog</Link></li>
        <li className='text-center text-2xl'><Link href="/#contact" onClick={()=>setIsopen(false)} className='block hover:text-red-500 transition-all font-light'>Contact</Link></li>
        <li className='text-center text-2xl flex justify-center gap-3'>
            <a className="hover:text-red-500 transition-all" target="_blank" href="https://https://x.com/The_lankyjo"><FaSquareXTwitter /></a>
            <a className="hover:text-red-500 transition-all" target="_blank" href="https://instagram.com/thelankyjo"><AiFillInstagram /></a>
            <a className="hover:text-red-500 transition-all" target="_blank" href="https://web.facebook.com/ikeji.joshua.7"><FaFacebookF /></a>
        </li>
        </ul>
        <button onClick={()=>(setIsopen(false))} className="absolute right-8 top-10 text-4xl hover:text-red-500 transition-all"><MdClose /></button>
    </nav>
  )
}

export default Mobilenav