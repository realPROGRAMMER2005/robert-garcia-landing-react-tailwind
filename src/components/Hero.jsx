import Button from "./common/Button"
import ContentWrapper from "./common/ContentWrapper"
import Header from "./common/header"
import Paragraph from "./common/Paragraph"

const Hero = () => {
  return (
    <div className="flex items-center mt-[4rem]">
      <ContentWrapper>

        <div className="flex flex-col lg:flex-row justify-evenly gap-y-6 items-center">

          <div className="flex flex-col max-w-[540px]">
            <Header isBig={true}>
              HI, I AM <br /> ROBERT GARCIA.
            </Header>

            <Paragraph>
              A Sydney based front-end developer passionate about 
              building accessible and user friendly websites.
            </Paragraph>

            <div className="flex flex-row gap-4 mt-10"></div>
                  <Button isWithDot={true}>CONTACT ME</Button>
            </div>

        

          <div className="max-w-[540px]">
            <img className="" src="./src/assets/images/HELP.jpeg"></img>
          </div>

        </div>


      </ContentWrapper>
    </div>
  )
}

export default Hero