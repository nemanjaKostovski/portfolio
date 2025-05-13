'use client';

import { FormEvent, useState } from 'react';
import Heading from './Heading';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch('../api/contact', {
        method: 'POST',
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      });
      if (res.status === 200) {
        setIsSubmitted(true);
      }
    } catch (err: any) {
      console.error('Err', err);
    }
  }

  return isSubmitted ? (
    <section className='mt-12 flex h-[60vh] w-full flex-col items-center'>
      <div className='flex flex-col items-center w-9/12'>
        <Heading title='Contact' />
        <p
          className='mt-20 text-4xl sm:text-6xl w-5/6 text-center'
          style={{
            fontFamily: 'Brush Script MT, cursive',
            textShadow:
              '0 0 10px rgba(255,105,180,0.9), 0 0 20px rgba(0,255,255,0.6)',
          }}
        >
          Thank you for submitting this message. I will get back to you as soon
          as possible!
        </p>
      </div>
    </section>
  ) : (
    <section className='mt-12 mb-96 flex h-screen w-full flex-col items-center'>
      <div className='flex flex-col items-center w-9/12'>
        <Heading title='Contact' />
      </div>

      <form className='flex flex-col mt-10 w-9/12' onSubmit={handleSubmit}>
        <label htmlFor='subject' className='text-2xl'>
          Email:
          <input
            className=' block h-10 rounded border w-full md:w-1/2 border-[#ff69b4] text-black neon-glow focus:neon-glow mb-10'
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor='subject' className='text-2xl'>
          Subject:
          <input
            className='block h-10 rounded border border-[#ff69b4] w-full md:w-1/2 neon-glow text-black focus:neon-glow mb-10'
            type='text'
            id='subject'
            name='subject'
            placeholder='Enter your subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label htmlFor='body' className='text-2xl'>
          Message:
        </label>
        <textarea
          className='w-full rounded border border-[#ff69b4] text-2xl text-black neon-glow focus:neon-glow'
          name='body'
          id='body'
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Enter your message'
          required
        ></textarea>
        <button
          className='mt-10 w-32 rounded p-2 bg-[#ff69b4] hover:bg-[#ff32b4] neon-glow hover:neon-glow'
          type='submit'
        >
          Send
        </button>
      </form>
    </section>
  );
}
