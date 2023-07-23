import Image from 'next/image';

export default function About() {
  return (
    <section className='m-48 mb-96 flex flex-col justify-center'>
      <h2 className='mb-2 flex justify-center text-xl'>About me</h2>
      <p>
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
      <p className='mt-10'>
        I am also interested in working with any similar technologies. ORMs,
        like Prisma, tRPC, Auth solutions etc.{' '}
      </p>
    </section>
  );
}
