const Button = ({children, isWithDot=false}) => {
  return (
    <button className="px-[0.7rem] py-[0.7rem] text-black font-bold self-start font-manrope text-[1rem] rounded-full uppercase bg-[#D3E97A]">
    {children}
    </button>
  )
}

export default Button
