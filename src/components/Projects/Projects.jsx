import React from 'react'
import ContentWrapper from '../common/ContentWrapper'
import Header from '../common/header'
import Paragraph from '../common/Paragraph'
import ProjectImage from './ProjectImage'

const Projects = () => {
  return (

    <ContentWrapper>
        <div className='my-[4.4rem]'>
            <Header>FEATURED PROJECTS</Header>
            <Paragraph>
                Here are some of the selected projects that showcase my passion for front-end development.
            </Paragraph>
        </div>

        <ProjectImage><img src="./src/assets/images/project0.png"/></ProjectImage>
    </ContentWrapper>
  )
}

export default Projects
