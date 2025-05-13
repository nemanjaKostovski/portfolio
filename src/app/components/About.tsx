import Image from 'next/image';
import Heading from './Heading';
export default function About() {
  return (
    <>
      <section className='relative mt-60 mb-20 h-full w-full'>
        <div className='absolute left-0 top-0 z-10 h-60 w-full bg-gradient-to-b from-black to-red-900 '></div>
        <div className='relative z-20 mt-10 flex h-screen w-full flex-col items-center justify-center text-center'>
          <Heading title='About me' />
          <p className='mt-10'>
            I&apos;m an aspiring developer that mainly focuses on frontend and
            fullstack.
          </p>
          <p className='mt-10'>
            I use Javascript and Typescript as programming languages.
          </p>
          <div className='mt-4 flex flex-row'>
            <Image
              src='/js.png'
              alt='JavaScript'
              width={50}
              height={25}
              className='mr-4'
            />
            <Image
              src='/typescript.png'
              alt='TypeScript'
              width={50}
              height={25}
              className='mr-4'
            />
          </div>

          <p className='mt-10'>
            Technologies that I like to use around JS and TS are:
          </p>
          <div className='mt-4 flex flex-row'>
            <Image
              src='/react.png'
              alt='React'
              width={50}
              height={25}
              className='mr-4'
            />
            <Image
              src='/nextjs.png'
              alt='NextJS'
              width={50}
              height={25}
              className='mr-4'
            />
            <Image
              src='/tailwindy.png'
              alt='Tailwind'
              width={50}
              height={25}
              className='mr-4'
            />
            <Image
              src='/mongo.png'
              alt='MongoDB'
              width={50}
              height={25}
              className='mr-4'
            />
            <Image
              src='/sql.png'
              alt='SQL'
              width={50}
              height={25}
              className='mr-4'
            />
          </div>
          <p className=' mt-10 lg:w-1/3'>
            When building a fullstack application my go to is either fullstack
            Nextjs application or MERN stack. I am familiar with technologies
            like: AWS, Docker, ORMs (Prisma), D3.js, etc. and I am open to
            learning any other new technologies that are needed for the project.
          </p>
        </div>
        <div className='absolute left-0 top-60 z-10 h-full w-full'>
          <div className='from absolute inset-0 bg-gradient-to-b  from-red-900 to-black' />
        </div>
      </section>
    </>
  );
}
