import React from 'react'
import Slider1 from "react-slick";
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import featureImg from '../../../assets/images/feature.jpeg'
import Strong1 from '../../global/heading/Strong1'
import Icons from '../../global/Icons';
import ButtonContained from '../../global/button/ButtonContained';

const SampleNextArrow = ({onClick}) =>{
  return (
    <div onClick={onClick} className='z-1  hidden absolute -bottom-0 md:-bottom-2 2xl:-bottom-3 left-0 cursor-pointer sm:inline-block transition-all duration-0.5 hover:bg-on-secondary-container bg-secondary p-1 md:p-3 2xl:p-4 rounded-lg'>{Icons.leftWihteArrow}</div>
  )
}
const SamplePrevArrow = ({onClick}) =>{
  return (
    <div onClick={onClick} className='z-1 hidden absolute -bottom-0 md:-bottom-2 2xl:-bottom-3 left-12 md:left-20  cursor-pointer sm:inline-block transition-all duration-0.5 hover:bg-on-secondary-container bg-secondary p-1 md:p-3 2xl:p-4 rounded-lg'>{Icons.rightWihteArrow}</div>
  )
}

const settings = {
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
        dots: true
      }
    },
    
  ]
};

const sliderArray = [
  {
    id:1,
    name:'Devil Roy Barman',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at fermentum id aliquet ridiculus in tellus quisque tempor. Felis diam odio ullamcorper in. Semper faucibus commodo sit at. Eget sed morbi risus quam.'
  },
  {
    id:2,
    name:'Devil Roy Barman',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at fermentum id aliquet ridiculus in tellus quisque tempor. Felis diam odio ullamcorper in. Semper faucibus commodo sit at. Eget sed morbi risus quam.'
  },
  {
    id:3,
    name:'Devil Roy Barman',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at fermentum id aliquet ridiculus in tellus quisque tempor. Felis diam odio ullamcorper in. Semper faucibus commodo sit at. Eget sed morbi risus quam.'
  },
  {
    id:4,
    name:'Devil Roy Barman',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at fermentum id aliquet ridiculus in tellus quisque tempor. Felis diam odio ullamcorper in. Semper faucibus commodo sit at. Eget sed morbi risus quam.'
  }
]


let rendarView = null
rendarView = sliderArray.map((slide)=>(
    <div className='' key={slide.id}>
        <div className='flex gap-6 items-center'>
        {Icons.googlRedIcon}
        <div className='flex gap-2 items-center'>
          {Icons.startIcon}
          {Icons.startIcon}
          {Icons.startIcon}
          {Icons.startIcon}
          {Icons.startIcon}
        </div>
      </div>
      <Body1 color='text-gray-800' customClass='pt-4'>{slide.content}</Body1>
      <div className='border-y-2 border-gray-300 w-16 mt-6 mb-4'></div>
      <Strong1 title={slide.name} />
      <div className='text-right relative -mt-10 mb-8 sm:mb-0 sm:mt-8 lg:mt-14'>
        <ButtonContained>read More</ButtonContained>
      </div>
  </div>
))


const Feature = ({wrCustomClass=""}) => {

  return (
    <div className={`${wrCustomClass}`}>
        <div className='container max-w-2xl mx-auto px-4 text-center'>
            <PreHeader p="pb-2"title="Feature donor reviews"/>
            <H2Title p="pb-4" title="What People say About Our Charity" />
            <Body1 color='text-gray-800' customClass='pb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
            </Body1>
            
        </div>
        <div className='relative pb-0 md:pb-12'>
        <div className='container mx-auto px-4 pt-0 lg:pt-24 lg:pb-32'> 
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-6'>
            <Slider1 {...settings}>
                {
                  rendarView
                }
              </Slider1>
              <div></div>
           </div> 
          </div>
          <div className='overflow-hidden lg:absolute left-1/2 top-0 lg:w-1/2 h-full pt-20 lg:pt-0 px-5 lg:px-0'>
              <img className='object-cover lg:ml-10 rounded-bl-100 w-full h-full' src={featureImg} alt="decause" />
          </div>
        </div>
        
        
    </div>
  )
}

export default Feature