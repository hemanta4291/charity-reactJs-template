import React from 'react'
import sliderImg from '../../assets/slider.jpeg'
import ButtonContained from '../global/button/ButtonContained'
import ButtonOutline from '../global/button/ButtonOutline'
import Body1 from '../global/heading/Body1'
import H1Title from '../global/heading/H1Title'
import H4Title from '../global/heading/H4Title'

const Slider = () => {
  return (
        <div style={{backgroundImage: `url(${sliderImg})`}} className="h-237 flex items-center bg-cover bg-no-repeat bg-center">
            <div className='container mx-auto'>
                <div className='max-w-2xl text-white px-4'>
                    <H4Title title="Homeless Child"/>
                    <H1Title title="Giving help to those
                        who need it" />
                    <Body1>
                        {`‘’We aim to provide groceries, and appliances to low income familes. We need your help.’’`}
                    </Body1>
                    <div className='mt-6 flex items-center gap-x-8'>
                        <ButtonContained letterSpacing='tracking-1.25'>DONATE NOW</ButtonContained>
                        <ButtonOutline>JOIN US</ButtonOutline>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default Slider