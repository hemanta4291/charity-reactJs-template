import React from 'react'
import Slider1 from "react-slick";
import decauseImg from '../../../assets/images/decause-we-can.jpeg'
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import slideDataArray from './SlideData'
import Icons from '../../global/Icons'
import { useState } from 'react';
import SingleEventItemList from './SingleEventItemList';
import upcommingImg from '../../../assets/images/upcomming-event.jpeg'
import './upcomming-event.css'

const SampleNextArrow = ({onClick}) =>{
  return (
    <div onClick={onClick} className='z-1  hidden absolute -top-0 lg:-top-16 right-14 md:right-20 cursor-pointer sm:inline-block transition-all duration-0.5 hover:bg-on-secondary-container bg-secondary p-1.5 md:p-3 2xl:p-4 rounded-lg'>{Icons.leftWihteArrow}</div>
  )
}
const SamplePrevArrow = ({onClick}) =>{
  return (
    <div onClick={onClick} className='z-1 absolute hidden -top-0 lg:-top-16 right-0  cursor-pointer sm:inline-block transition-all duration-0.5 hover:bg-on-secondary-container bg-secondary p-1.5 md:p-3 2xl:p-4 rounded-lg'>{Icons.rightWihteArrow}</div>
  )
}


const UpcommingEvent = ({wrCustomClass=""}) => {
  const [data,setData] = useState([...slideDataArray])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
        }
      },
    ]
  };


  let datarenderView = null;
  datarenderView = data.map((item)=>(
    <div key={item.id}>
        <SingleEventItemList item = {item}/>
    </div>
  ))


  return (
    <div className={`${wrCustomClass} upcomming_event`}>
        <div className='container mx-auto px-4 mb-14'>
           <PreHeader p="pb-2"title="Upcoming Evernts"/>
            <H2Title maxWidth='max-w-lg' p="pb-4" title="Join Upcoming Events Replays & Webinars" />
            <Body1 customClass='lg:max-w-5xl max-w-3xl' color='text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. 
            </Body1>
        </div>
        <div className='relative  pb-0 md:pb-12'>
           <div className='mb-4 lg:mb-0 lg:absolute h-full top-0 left-0 lg:pr-10 w-full lg:w-1/2'>
              <img className='px-5 md:px-0 rounded-br-100 object-cover h-full w-full' src={upcommingImg} alt="decause" />
           </div>
           <div className='container mx-auto px-4 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
              <div></div>
              <Slider1 {...settings}>
                {datarenderView}
              </Slider1>
         
           </div>
          </div>
        </div>
        
        
        
    </div>
  )
}

export default UpcommingEvent