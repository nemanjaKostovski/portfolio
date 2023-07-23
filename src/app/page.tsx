import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between scroll-smooth pt-10'>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-indigo-700 before:dark:opacity-10 after:dark:from-indigo-900 after:dark:via-[#4B0082] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
          src='/portfolio.png'
          alt='Portfolio image'
          width={300}
          height={150}
          priority
        />
        <h1>Hi, I&apos;m Nemanja Kostovski, a web developer.</h1>
      </div>
    </main>
  );
}
