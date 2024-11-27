const Button = ({children, type, form, isWithDot=false}) => {
  return (
    <button type={type} form={form} className="px-[2rem] py-[0.7rem] text-black font-bold self-start font-manrope text-[1rem] rounded-full uppercase bg-[#D3E97A]">
    {children}
    </button>
  )
}

export default Button
