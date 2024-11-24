const Button = ({children, isWithDot=false}) => {
  return (
    <button className="px-6 py-5 text-black font-bold self-start font-manrope text-[16px] rounded-[100px] uppercase bg-[#D3E97A]">
    {children}
    </button>
  )
}

export default Button
