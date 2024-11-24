import ContentWrapper from "./common/ContentWrapper"

const Navigation = () => {
  return (
    <ContentWrapper maxWidth="1440px">
      <div className="sticky top-0 flex justify-between items-center py-6">
        <h1 className="text-3xl font-bebas">ROBERT GARCIA</h1>
        <ul className="hidden sm:flex gap-8">
          <li><a href="#">Work</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="sm:hidden"><BurgerButton/></div>
      </div>
    </ContentWrapper>
  )
}

export default Navigation



const BurgerButton = () => {
    return (
  
      <div className="flex flex-col gap-2 w-7 h-5">
        <div className="w-full h-[3px] bg-white"></div>
        <div className="w-full h-[3px] bg-white"></div>
      </div>
    )
  }
  

