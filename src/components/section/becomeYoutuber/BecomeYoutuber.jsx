import React from 'react'
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import becomeImg from  '../../../assets/images/become-youtuber.jpeg'
import ButtonContained from '../../global/button/ButtonContained'
import ButtonOutline from '../../global/button/ButtonOutline'

const BecomeYoutuber = ({wrCustomClass}) => {

  return (
    <div style={{backgroundImage: `url(${becomeImg})`}} className={`${wrCustomClass} relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-75 flex items-center bg-cover bg-no-repeat bg-center 2xl:bg-positionXY`} >
        <div className='text-center max-w-4xl mx-auto z-10'>
          <H2Title p="pb-4" color='text-white' title="How to Become a Volunteer?"/>
          <Body1 color='text-white px-12'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. 
          </Body1>
          <div className='mt-10 items-center flex flex-col sm:flex-row justify-center gap-4'>
            <ButtonContained>Become a Volunteer</ButtonContained>
            <ButtonOutline>Donate Now</ButtonOutline>
          </div>
        </div>
    </div>
  )
}

export default BecomeYoutuber