'use client';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCard = {
  link: string;
  image: string;
  name: string;
  demo: string;
  tech: string;
  description: string;
};

export default function ProjectCard({
  link,
  image,
  name,
  demo,
  tech,
  description,
}: ProjectCard) {
  return (
    <Link
      className='neon-glow hover:neon-glow group my-4 flex w-5/6 flex-col rounded-lg border-[10px] p-2 md:flex-row lg:h-96'
      href={link}
      target='_blank'
    >
      <div className='h-full w-full'>
        <Image
          src={image}
          alt={name}
          className='m-4 h-32 w-32 md:float-left'
          width={150}
          height={100}
          priority
        />

        <div className='flex flex-col text-left align-baseline'>
          <h3
            style={{
              fontFamily: 'Brush Script MT, cursive',
              textShadow:
                '0 0 10px rgba(255,105,180,0.9), 0 0 20px rgba(0,255,255,0.6)',
            }}
            className='p-1 text-3xl sm:text-6xl'
          >
            {name}
          </h3>
          {demo && (
            <span
              onClick={(e) => {
                e.stopPropagation(); // Prevent outer link click
                window.open(demo, '_blank', 'noopener,noreferrer');
              }}
              className='m-4 w-32 cursor-pointer text-2xl hover:underline'
              style={{
                fontFamily: 'Brush Script MT, cursive',
                textShadow:
                  '0 0 10px rgba(255,105,180,0.9), 0 0 20px rgba(0,255,255,0.6)',
              }}
            >
              Demo video
            </span>
          )}
          <p className='p-1'>{tech}</p>
          <p className='w-5/6 p-1 text-base'>{description}</p>
        </div>
      </div>
    </Link>
  );
}
