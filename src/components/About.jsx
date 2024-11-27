import React from 'react'
import Subheader from './common/Subheader'
import Paragraph from './common/Paragraph'
import Header from './common/Header'
import ContentWrapper from './common/ContentWrapper'
import Link from './common/Link'

const About = () => {
  return (
    <section className='border-t-[2px] border-gray-500 md:py-[5rem]'>
        <ContentWrapper>
            <div className='flex flex-col lg:grid grid-cols-[0.5fr,0.75fr] my-[3.5rem] w-full mx-auto '>
                
                <div className='hidden lg:block '>
                    <Header isBig={true}>ABOUT ME</Header>
                </div>
                <div className='w-full max-w-[580px] mx-auto lg:max-w-none'>
                    <div className='hidden sm:block mb-4'>
                        <Subheader>
                            I am a front-end developer based in Sydney. Has Mechanical Engineering background. 
                        </Subheader>
                    </div>
                    <div className='mb-4'>
                        <Paragraph>
                            I am a front-end developer based in Sydney looking for exciting opportunities. 
                            Has Mechanical Engineering background. Likes to focus on accessibility when developing. 
                            Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. 
                            While I am not programming, I enjoy playing football, photography and playing Valorant. 
                            Learning more to improve skill.
                        </Paragraph>
                    </div>
                    <div>
                        <Link href={'#'}>MORE ABOUT ME</Link>
                    </div>


                </div>
            
                
            </div>
     </ContentWrapper>
    </section>
  )
}

export default About