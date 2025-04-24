import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../projectData';
import Heading from './Heading';

export default function Projects() {
  return (
    <section className='mb-20 mt-60 flex w-full flex-col items-center text-center'>
      <Heading title='Projects' />
      <div className='mb-10'></div>
      <ProjectCard
        link={projectsData.alumil.link}
        name={projectsData.alumil.name}
        image={projectsData.alumil.image}
        description={projectsData.alumil.longDescription}
        tech={projectsData.alumil.tech}
        demo={projectsData.alumil.demo}
      />
      <ProjectCard
        link={projectsData.streaming.link}
        name={projectsData.streaming.name}
        image={projectsData.streaming.image}
        description={projectsData.streaming.longDescription}
        tech={projectsData.streaming.tech}
        demo={projectsData.streaming.demo}
      />
      <ProjectCard
        link={projectsData.spacex.link}
        name={projectsData.spacex.name}
        image={projectsData.spacex.image}
        description={projectsData.spacex.longDescription}
        tech={projectsData.spacex.tech}
        demo={projectsData.spacex.demo}
      />
    </section>
  );
}
