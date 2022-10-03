import React from 'react'
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import NaturalSection from '../naturalSection/NaturalSection'
import ButtonContainedLink from '../../global/button/ButtonContainedLink'
import aboutImg from '../../../assets/images/about.jpeg'


const AboutSecetion = ({wrCustomClass=""}) => {
  return (
    <div className={`${wrCustomClass} bg-on-primary-opacity-0.16`}>
        <div className='container mx-auto px-4'>
              <PreHeader title="About Us"/>
              <H2Title p="pt-1" maxWidth="max-w-xl" title="Our Highest Ambition is to Help People"/>
              <div className='flex flex-col lg:flex-row justify-between pb-14'>
                  <div className='basis-80%'>
                      <Body1 color='text-gray-700' p="pt-2">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae. Leo, a platea quis at.
                    </Body1>
                  </div>
                  <div className='basis-20% flex justify-start mt-4 lg:mt-0 lg:justify-end items-center'>
                    <ButtonContainedLink to="/about-us">Learn more</ButtonContainedLink>
                  </div>
              </div>

              <div>
                <img className='border-b-8 border-primary rounded-custom-100' src={aboutImg} alt="" />
              </div>
              <div className='pt-14'>
                <NaturalSection/>
              </div>
              
              
            </div>
    </div>
  )
}

export default AboutSecetion