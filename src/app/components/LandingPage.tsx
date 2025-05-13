'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import About from './About';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [text, setText] = useState('');
  const [showUnderline, setShowUnderline] = useState(false);
  const fullText = 'Nemanja Kostovski';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowUnderline(true), 500); // Delay underline
      }
    }, 100);
  }, []);

  const splitText = text.split(' ');
  const firstName = splitText[0] || '';
  const lastName = splitText[1] || '';

  return (
    <div className='relative h-full lg:h-screen w-full overflow-hidden text-white'>
      {/* Background Video */}
      <video
        className='absolute left-0 top-0 z-0 h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/vaporware.mp4' type='video/mp4' />
      </video>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='relative z-10 flex h-screen flex-col items-center justify-center text-center'
      >
        {/* Name with Neon Glow and Rotation */}
        <div className='h-52 -rotate-12'>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className='m-0 p-0 text-6xl font-semibold leading-tight
              tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]' // Neon glow effect
            style={{
              fontFamily: 'Brush Script MT, cursive',
              textShadow:
                '0 0 10px rgba(255,105,180,0.9), 0 0 20px rgba(0,255,255,0.6)',
            }}
          >
            {firstName}
            <br />
            {lastName}
          </motion.h1>

          {/* Handwritten Cursive Underline (Appears After Name) */}
          {showUnderline && (
            <svg
              viewBox='0 0 200 20'
              className='mx-auto mt-2'
              width='200'
              height='20'
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 0.25, 0.5, 0.75, 1] }}
                transition={{
                  duration: 0.5,
                  type: 'easeInOut',
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                }}
                d='M10,15 Q30,30 190,5'
                stroke='rgba(255,105,180,0.9)'
                strokeWidth='4'
                fill='transparent'
                strokeLinecap='round'
                strokeLinejoin='round'
                style={{
                  filter: 'drop-shadow(0px 0px 10px rgba(255,105,180,0.8))',
                }}
              />
            </svg>
          )}
        </div>

        {/* Welcome Text */}
        <h2
          className='mt-6 text-6xl font-bold tracking-widest drop-shadow-[2px_2px_0px_rgba(255,105,180,1)]'
          style={{ fontFamily: 'GlitchFont' }}
        >
          Welcome to My Website
        </h2>
        <p className='mt-4 max-w-xl text-lg'>
          Crafting fast, accessible, and visually striking web experiences with
          modern full-stack technologies.
        </p>
      </motion.div>

      {/* Parallax Effect */}
      <motion.div className='absolute left-0 top-0 h-full w-full'>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black' />
      </motion.div>
    </div>
  );
}
