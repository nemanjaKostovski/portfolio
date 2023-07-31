import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <h2 className='p-16'>Check out my awesome projects!</h2>
      <section className='grid justify-items-stretch gap-x-16 gap-y-8 p-16 md:grid-cols-2 lg:grid-cols-3'>
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
          <div className='w-full bg-slate-300 hover:bg-slate-200 dark:bg-gray-700 hover:dark:bg-gray-600'>
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
          <div className='w-full bg-slate-300 hover:bg-slate-200 dark:bg-gray-700 hover:dark:bg-gray-600'>
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
          <div className='w-full bg-slate-300 hover:bg-slate-200 dark:bg-gray-700 dark:group-hover:bg-gray-600'>
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
          <div className='w-full bg-slate-300 hover:bg-slate-200 dark:bg-gray-700 dark:group-hover:bg-gray-600'>
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
          <div className='w-full bg-slate-300 hover:bg-slate-200 dark:bg-gray-700 dark:group-hover:bg-gray-600'>
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
          <div className='w-full bg-slate-300 hover:bg-slate-200 dark:bg-gray-700 dark:group-hover:bg-gray-600'>
            <h3 className='p-4'>Project name</h3>
            <p className='p-4'>Project description</p>
          </div>
        </a>
      </section>
    </>
  );
}
