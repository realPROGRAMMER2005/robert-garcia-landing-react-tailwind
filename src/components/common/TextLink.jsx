import React, { Children } from 'react'

const TextLink = ({children, href}) => {
  return (
    <a href={href} className='font-manrope cursor-pointer text-white text-[1rem] leading-[150%] inline-block underline underline-offset-[5px] decoration-[#D3E97A]'>{children}</a>
  )
}

export default TextLink