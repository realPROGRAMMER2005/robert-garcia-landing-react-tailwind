import React from 'react'
import Subheader from '../common/Subheader'
import Paragraph from '../common/Paragraph'
import ProjectImage from './ProjectImage'
import ProjectInformation from './ProjectInformation'
import Link from '../common/Link'

const ProjectCard = ({header, imagePath, paragraph, information, links}) => {

  const links_keys = Object.keys(links);

  return (
    <div className='flex flex-col lg:grid grid-cols-2 gap-x-10 gap-y-20'>

      <div className='max-w-[580px] w-full mx-auto'>
          <ProjectImage><img src={`/project_images/${imagePath}`} alt={`${imagePath}`}/></ProjectImage>
      </div>

      <div className='flex flex-col max-w-[580px] w-full mx-auto gap-6 justify-center'>
        <Subheader>{header}</Subheader>
        <Paragraph>{paragraph}</Paragraph>
        
        <ProjectInformation information={information}></ProjectInformation>

        <div className='flex flex-row gap-6'>

          {links_keys.map((link) => (
            <Link 
              href={links[link]}
              {...(link.toLowerCase().includes('github') && {isWithGitHubIcon: true})}
              {...(link.toLowerCase().includes('view project') && {isWithArrowIcon: true})}>
              {link}
            </Link>
          ))}

        </div>
      </div>


      

    </div>
      


  )
}

export default ProjectCard
