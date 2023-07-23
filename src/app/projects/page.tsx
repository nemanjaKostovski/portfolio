import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <h2 className='p-16'>Check out my awesome projects!</h2>
      <section className='grid grid-cols-3 justify-items-stretch gap-x-16 gap-y-8 p-16'>
        <a
          className='group flex flex-col items-center rounded-lg border border-indigo-600 hover:border-indigo-400 hover:backdrop-blur-xl'
          href='/'
        >
          <Image
            src='/portfolio.png'
            alt='Project image'
            width={300}
            height={100}
            priority
          />
          <div className='w-full bg-gray-700 group-hover:bg-gray-600'>
            <h3 className='p-4'>Project name</h3>
            <p className='p-4'>Project description</p>
          </div>
        </a>
        <a
          className='group flex flex-col items-center rounded-lg border border-indigo-600 hover:border-indigo-400 hover:backdrop-blur-xl'
          href='/'
        >
          <Image
            src='/portfolio.png'
            alt='Project image'
            width={300}
            height={100}
            priority
          />
          <div className='w-full bg-gray-700 group-hover:bg-gray-600'>
            <h3 className='p-4'>Project name</h3>
            <p className='p-4'>Project description</p>
          </div>
        </a>
        <a
          className='group flex flex-col items-center rounded-lg border border-indigo-600 hover:border-indigo-400 hover:backdrop-blur-xl'
          href='/'
        >
          <Image
            src='/portfolio.png'
            alt='Project image'
            width={300}
            height={100}
            priority
          />
          <div className='w-full bg-gray-700 group-hover:bg-gray-600'>
            <h3 className='p-4'>Project name</h3>
            <p className='p-4'>Project description</p>
          </div>
        </a>
        <a
          className='group flex flex-col items-center rounded-lg border border-indigo-600 hover:border-indigo-400 hover:backdrop-blur-xl'
          href='/'
        >
          <Image
            src='/portfolio.png'
            alt='Project image'
            width={300}
            height={100}
            priority
          />
          <div className='w-full bg-gray-700 group-hover:bg-gray-600'>
            <h3 className='p-4'>Project name</h3>
            <p className='p-4'>Project description</p>
          </div>
        </a>
        <a
          className='group flex flex-col items-center rounded-lg border border-indigo-600 hover:border-indigo-400 hover:backdrop-blur-xl'
          href='/'
        >
          <Image
            src='/portfolio.png'
            alt='Project image'
            width={300}
            height={100}
            priority
          />
          <div className='w-full bg-gray-700 group-hover:bg-gray-600'>
            <h3 className='p-4'>Project name</h3>
            <p className='p-4'>Project description</p>
          </div>
        </a>
        <a
          className='group flex flex-col items-center rounded-lg border border-indigo-600 hover:border-indigo-400 hover:backdrop-blur-xl'
          href='/'
        >
          <Image
            src='/portfolio.png'
            alt='Project image'
            width={300}
            height={100}
            priority
          />
          <div className='w-full bg-gray-700 group-hover:bg-gray-600'>
            <h3 className='p-4'>Project name</h3>
            <p className='p-4'>Project description</p>
          </div>
        </a>
      </section>
    </>
  );
}
