import React from 'react'


const Input = ({type, label, id, name}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label className='block font-manrope text-[0.8rem] text-gray-300 font-medium' htmlFor={name}>{label}</label>
        <input className='bg-[#222222] px-2 h-[50px] focus:outline-none font-manrope text-[1rem] ' name={name} id={id} type={type}/>
    </div>
    
  )
}

export default Input