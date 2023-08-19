import Image from 'next/image';

type ProjectCard = {
  link: string;
  image: string;
  name: string;
  tech: string;
  description: string;
};

export default function ProjectCard({
  link,
  image,
  name,
  tech,
  description,
}: ProjectCard) {
  return (
    <a
      className='group flex h-96 w-full flex-row rounded-lg border border-indigo-600 hover:border-indigo-400 hover:backdrop-blur-xl'
      href={`${link}`}
    >
      <div className='min-w-60 h-96 w-96 rounded-lg bg-slate-300 group-hover:bg-slate-200 dark:bg-gray-700 group-hover:dark:bg-gray-600'>
        <Image
          src={image}
          alt={name}
          className='float-left h-32 w-32 p-1'
          width={150}
          height={100}
          priority
        />
        <h3 className='p-1'>{name}</h3>
        <p className=' p-1'>{tech}</p>
        <p className=' p-1'>{description}</p>
      </div>
    </a>
  );
}
