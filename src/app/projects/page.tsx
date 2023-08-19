import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../projectData';

export default function Projects() {
  return (
    <>
      <h2 className='p-16 text-2xl'>Check out my awesome projects!</h2>
      <section className='grid gap-x-2 gap-y-2 p-16 md:grid-cols-2 lg:grid-cols-3'>
        <ProjectCard
          link={projectsData.spacex.link}
          name={projectsData.spacex.name}
          image={projectsData.spacex.image}
          description={projectsData.spacex.longDescription}
          tech={projectsData.spacex.tech}
        />
        <ProjectCard
          link={projectsData.networktigers.link}
          name={projectsData.networktigers.name}
          image={projectsData.networktigers.image}
          description={projectsData.networktigers.longDescription}
          tech={projectsData.networktigers.tech}
        />
      </section>
    </>
  );
}
