'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function handleNavToggle() {
    setTimeout(() => {
      setToggle((prev) => !prev);
    }, 300);
  }
  return (
    <>
      <nav
        className='sticky top-0 hidden grid-cols-4
         place-items-center border-b sm:grid sm:w-full'
      >
        <Link
          href='/'
          className='hover:text-[#4B0082] dark:hover:text-[#d1d7e6]'
        >
          Home
        </Link>
        <Link
          className='hover:text-[#4B0082] dark:hover:text-[#d1d7e6]'
          href='/projects'
        >
          My Projects
        </Link>
        <Link
          className='hover:text-[#4B0082] dark:hover:text-[#d1d7e6]'
          href='/about'
        >
          About me
        </Link>
        <Link
          className='hover:text-[#4B0082] dark:hover:text-[#d1d7e6]'
          href='/contact'
        >
          Contact me
        </Link>
      </nav>
      <div className='flex w-full justify-end'>
        <button
          id='hamburger-button'
          className={`${
            toggle && 'toggle-btn'
          } relative right-4 h-8 w-8 cursor-pointer text-3xl sm:hidden`}
          onClick={handleToggle}
        >
          <div className="-mt-0.5 h-1 w-8 rounded bg-black transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-black after:transition-all after:duration-500 after:content-[''] dark:bg-white dark:before:bg-white dark:after:bg-white"></div>
        </button>
      </div>

      <section
        className={`justify-content-center top-68 absolute z-10 mt-8 w-full origin-top flex-col bg-inherit text-5xl dark:bg-black
        ${toggle ? 'flex' : 'hidden'}
          `}
      >
        <nav
          className='flex min-h-screen flex-col items-center py-8'
          aria-label='mobile'
        >
          <Link
            href='/'
            className='w-full py-6 text-center hover:text-[#4B0082] dark:hover:text-[#d1d7e6]'
            onClick={handleNavToggle}
          >
            Home
          </Link>
          <Link
            className='w-full py-6 text-center hover:text-[#4B0082] dark:hover:text-[#d1d7e6]'
            href='/projects'
            onClick={handleNavToggle}
          >
            My Projects
          </Link>
          <Link
            className='w-full py-6 text-center hover:text-[#4B0082] dark:hover:text-[#d1d7e6]'
            href='/about'
            onClick={handleNavToggle}
          >
            About me
          </Link>
          <Link
            className='w-full py-6 text-center hover:text-[#4B0082] dark:hover:text-[#d1d7e6]'
            href='/contact'
            onClick={handleNavToggle}
          >
            Contact me
          </Link>
        </nav>
      </section>
    </>
  );
}
