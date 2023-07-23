import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='grid grid-cols-4 place-items-center w-9/12 border-b'>
      <Link href='/' className='dark:hover:text-[#d1d7e6] hover:text-[#4B0082]'>
        Nemanja Kostovski
      </Link>
      <Link
        className='dark:hover:text-[#d1d7e6] hover:text-[#4B0082]'
        href='/projects'
      >
        My Projects
      </Link>
      <Link
        className='dark:hover:text-[#d1d7e6] hover:text-[#4B0082]'
        href='/about'
      >
        About me
      </Link>
      <Link
        className='dark:hover:text-[#d1d7e6] hover:text-[#4B0082]'
        href='/contact'
      >
        Contact me
      </Link>
    </nav>
  );
}
