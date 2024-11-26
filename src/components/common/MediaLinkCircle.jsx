const MediaLinkCircle = ({children}) => {
  return (
    <div className="text-[#D3E97A] h-[3.1rem] text-[1.3rem] w-[3.1rem] cursor-pointer flex 
    justify-center items-center font-bold font-manrope 
    rounded-[50%] *:fill-[#D3E97A] *:h-[24px] *:w-[24px] bg-[#222222]">
      {children}
    </div>
  )
}

export default MediaLinkCircle
