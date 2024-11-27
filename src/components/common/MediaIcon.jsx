import React from 'react'

const MediaIcon = ({children, href}) => {
  return (
    <a href={href} className='flex items-center *:fill-[#D3E97A] *:w-[1.3rem] text-[#D3E97A] *:text-[#D3E97A]'>
      {children}
    </a>
  )
}

export default MediaIcon