import React from 'react'
import Slider1 from "react-slick";
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import featureImg from '../../../assets/images/become-youtuber.jpeg'
import Strong1 from '../../global/heading/Strong1'
import Icons from '../../global/Icons';
import ButtonContained from '../../global/button/ButtonContained';
import Form from '../../global/form/Form';


const Volunteer = ({wrCustomClass=""}) => {

  return (
    <div className={`${wrCustomClass}`}>
        <div className='container max-w-2xl mx-auto px-4 text-center'>
            <PreHeader p="pb-2"title="Register yourself with us"/>
            <H2Title p="pb-4" title="Let’s join our community to
                become a volunteer" />
            <Body1 color='text-gray-800' customClass='pb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
            </Body1>
            
        </div>
        <div className='relative'>
          <div className='container mx-auto px-4 mt-6 md:mt-0'> 
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-6'>
             <Form />
            <div className=' lg:w-1/2 mt-12 lg:mt-0 lg:pl-8 lg:h-full lg:absolute left-1/2 order-first md:order-last px-5 md:px-0'>
              <img className='rounded-bl-100 h-full object-cover w-full' src={featureImg} alt="decause" />
            </div>
            </div>
            
          </div>
        </div>
        
        
        
    </div>
  )
}

export default Volunteer