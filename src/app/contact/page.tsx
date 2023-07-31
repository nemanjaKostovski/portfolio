'use client';

import { FormEvent, useState } from 'react';

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
    <div>
      <p>
        Thank you for submitting this message. I will get back to you as soon as
        possible!
      </p>
    </div>
  ) : (
    <section className='mt-12 flex h-screen w-9/12 flex-col'>
      <h2 className='mb-10 flex justify-center text-2xl'>Contact me</h2>
      <form className='mb-24 flex flex-col lg:mb-60 ' onSubmit={handleSubmit}>
        <label htmlFor='subject'>
          Email:{' '}
          <input
            className=' block h-8 rounded border-2 border-black dark:border-indigo-500 dark:text-black sm:w-80'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            required
          />
        </label>
        <label htmlFor='subject'>
          Subject:{' '}
          <input
            className='block h-8 rounded border-2 border-black dark:border-indigo-500 dark:text-black sm:w-80'
            type='text'
            id='subject'
            name='subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label htmlFor='body'>Message:</label>
        <textarea
          className='w-full rounded border-2 border-black dark:border-indigo-500 dark:text-black'
          name='body'
          id='body'
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Enter your message'
          required
        ></textarea>
        <button
          className='mt-10 w-32 rounded border border-black p-2 dark:border-white dark:bg-indigo-500 hover:dark:bg-indigo-400'
          type='submit'
        >
          Send
        </button>
      </form>
    </section>
  );
}
