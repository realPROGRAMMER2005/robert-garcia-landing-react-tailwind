import React from 'react'; // Добавьте 'React' здесь
import ContentWrapper from '../common/ContentWrapper';
import Header from '../common/Header';
import Paragraph from '../common/Paragraph';
import ProjectCard from './ProjectCard';
import projects_data from '../../data/projects/projects.json';

const Projects = () => {
  return (
    <section className='border-t-[2px] border-gray-500 my-[3.5rem]'>
      <ContentWrapper>
        <div className='my-[4.4rem]'>
          <Header isBig={false}>FEATURED PROJECTS</Header>
          <Paragraph>
            Here are some of the selected projects that showcase my passion for front-end development.
          </Paragraph>
        </div>

        <div className='flex flex-col gap-y-14'>
          {projects_data.map((project) => (
            <ProjectCard
              key={project.id}
              header={project.header}
              imagePath={project.imagePath}
              paragraph={project.paragraph}
              information={project.information}
              links={project.links}
            />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Projects;
