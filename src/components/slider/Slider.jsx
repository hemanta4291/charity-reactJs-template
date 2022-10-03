import React from 'react'
import sliderImg from '../../assets/images/slider.jpeg'
import ButtonContained from '../global/button/ButtonContained'
import ButtonOutline from '../global/button/ButtonOutline'
import Body1 from '../global/heading/Body1'
import H1Title from '../global/heading/H1Title'
import H4Title from '../global/heading/H4Title'

const Slider = () => {
  return (
        <div style={{backgroundImage: `url(${sliderImg})`}} className=" pt-20 pb-36 sm:pt-0 sm:pb-0 sm:h-155 lg:h-237 flex items-center bg-cover bg-no-repeat bg-center">
            <div className='container mx-auto'>
                <div className='max-w-2xl text-white px-4 text-center lg:text-left'>
                    <H4Title title="Homeless Child"/>
                    <H1Title CustomClass='py-2 md:py-0' title="Giving help to those
                        who need it" />
                    <Body1>
                        {`We aim to provide groceries, and appliances to low income familes. We need your help.`}
                    </Body1>
                    <div className='mt-6 sm:flex-row flex-col gap-y-3 flex items-center gap-x-2 sm:gap-x-8 justify-center lg:justify-start'>
                        <ButtonContained letterSpacing='tracking-1.25'>DONATE NOW</ButtonContained>
                        <ButtonOutline>JOIN US</ButtonOutline>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default Slider