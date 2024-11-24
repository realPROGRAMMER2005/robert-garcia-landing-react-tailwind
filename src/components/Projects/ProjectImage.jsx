import React from 'react'

const ProjectImage = ({children}) => {
  return (
    <div className='bg-[#1A1A1A] relative w-[100%] lg:w-[40vw] after:content-[""] *:w-[80%] *:h-[40%] rounded-[1rem] *:rounded-[1rem] flex justify-center items-center *:absolute after:block after:pb-[100%]'>
      {children}
    </div>
  )
}

export default ProjectImage
