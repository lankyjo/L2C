'use client';
import { CiMenuBurger } from "react-icons/ci";
import Mobilenav from './Mobilenav';
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; 

const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const headingRef = useRef(null);
  const text = "Lanky's 2 ₵ents";
  const pathname = usePathname();

  const isActive = (href) => pathname === href ? 'text-red-500' : '';

  const wordElements = text.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} className="word inline-block mr-2">
      {word.split('').map((letter, letterIndex) => (
        <span key={letterIndex} className="letter inline-block">
          {letter}
        </span>
      ))}
    </span>
  ));

  useEffect(()=>{
    if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    return()=>{
        document.body.style.overflow = 'auto';
    }
  },[isOpen])

  useGSAP(() => {
  const letters = headingRef.current.querySelectorAll('.letter');
    const animation = gsap.fromTo(
      letters,
      { y: 150 },
      { y: 0, duration: 0.8, stagger: 0.1 }
    );
    return () => {
        animation.kill();
      };
  }, []);

  return (
    <header className='flex flex-col-reverse md:flex-col pt-6 gap-5'>
      <div className='flex flex-col text-center gap-5 md:border-none border-b border-black pb-6 overflow-hidden'>
        <span className='md:text-2xl text-xl font-extralight tracking-widest px-2'>
          Everything is personal. Including this blog.
        </span>
        <Link href="/">
          <h1 ref={headingRef} className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bungee'>
            {wordElements}
          </h1>
        </Link>
      </div>

      <nav id='nav' className='border-t border-b border-black'>
        <div className='w-11/12 mx-auto flex justify-between'>
          <ul className='hidden md:flex flex-1 divide-x divide-black border-r border-black border-l'>
          <li className={`flex-1 text-center py-3 ${isActive('/')}`}>
              <Link href="/" className='block hover:text-red-500 transition-all font-light'>
                Home
              </Link>
            </li>
            <li className={`flex-1 text-center py-3 ${isActive('/about')}`}>
              <Link href="/about" className='block hover:text-red-500 transition-all font-light'>
                About
              </Link>
            </li>
            <li className={`flex-1 text-center py-3 ${isActive('/blog')}`}>
              <Link href="/blog" className='block hover:text-red-500 transition-all font-light'>
                My Blogs
              </Link>
            </li>
            <li className={`flex-1 text-center py-3 ${isActive('/#contact')}`}>
              <Link href="/#contact" className='block hover:text-red-500 transition-all font-light'>
                Contact
              </Link>
            </li>
            <li className='flex-1 text-center py-3 text-2xl flex justify-center gap-3'>
              <a className="hover:text-red-500 transition-all" target="_blank" href="https://x.com/The_lankyjo">
                <FaSquareXTwitter />
              </a>
              <a className="hover:text-red-500 transition-all" target="_blank" href="https://instagram.com/thelankyjo">
                <AiFillInstagram />
              </a>
              <a className="hover:text-red-500 transition-all" target="_blank" href="https://web.facebook.com/ikeji.joshua.7">
                <FaFacebookF />
              </a>
            </li>
          </ul>
          <h2 className='font-bungee text-xl md:hidden border-l border-black p-3'><Link href={'/'}>L2₵</Link></h2>
          <button
            onClick={() => setIsopen(true)}
            className='md:hidden py-3 px-3 text-2xl text-black border-l border-r border-black'
          >
            <CiMenuBurger />
          </button>
        </div>
      </nav>
      <Mobilenav isOpen={isOpen} setIsopen={setIsopen} />
    </header>
  );
};

export default Header;
