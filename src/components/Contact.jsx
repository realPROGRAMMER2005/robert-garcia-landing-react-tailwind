import React from 'react'
import ContentWrapper from './common/ContentWrapper'

const Contact = () => {
  return (
    <section>
        <ContentWrapper>
        <div className='flex flex-col lg:grid grid-cols-[0.5fr,0.75fr] my-[4rem] lg:my-[7rem] w-full mx-auto max-w-[580px] lg:max-w-none'>
        
        <div className='hidden sm:block'>
            <Header isBig={false}>ABOUT ME</Header>
        </div>
        <div className='w-full'>
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
                <Link>MORE ABOUT ME</Link>
            </div>


        </div>
    
        
     </div>
        </ContentWrapper>
    </section>
  )
}

export default Contact