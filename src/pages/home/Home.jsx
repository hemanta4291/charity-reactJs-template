import React from 'react'
import ButtonContained from '../../components/global/button/ButtonContained'
import Body1 from '../../components/global/heading/Body1'
import H2Title from '../../components/global/heading/H2Title'
import PreHeader from '../../components/global/heading/PreHeader'
import Slider from '../../components/slider/Slider'
import TopCountSection from '../../components/topCountSection/TopCountSection'
import aboutImg from '../../assets/images/about.jpeg'

const Home = () => {
  return (
        <div className='home'>
          <Slider/>
          <div className='bg-on-primary-opacity-0.16'>
            <div className='container mb-8 mx-auto px-4'>
                <TopCountSection mt="-mt-10"/>
            </div>
            <div className='container mx-auto px-4 mb-40'>
              <PreHeader title="About Us"/>
              <H2Title p="pt-1" maxWidth="max-w-xl" title="Our Highest Ambition is to Help People"/>
              <div className='flex justify-between pb-14'>
                  <div className='basis-80%'>
                      <Body1 color='text-gray-700' p="pt-2">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae. Leo, a platea quis at.
                    </Body1>
                  </div>
                  <div className='basis-20% flex justify-end items-center'>
                    <ButtonContained>Medium</ButtonContained>
                  </div>
              </div>

              <div>
                <img className='border-b-8 border-primary rounded-custom-100' src={aboutImg} alt="" />
              </div>
              <TopCountSection/>
              
            </div>
          </div>
          
         
        </div>
  )
}

export default Home