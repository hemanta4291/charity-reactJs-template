import React from 'react'
import decauseImg from '../../../assets/images/decause-we-can.jpeg'
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import Icons from '../../global/Icons'
import TopIconBox from '../../global/topIconBox/TopIconBox'
import CharityLoveImg from '../../../assets/images/Charity-Love.png'
import DollarDonateImg from '../../../assets/images/Dollar-Donate.png'
import DonateLoveImg from '../../../assets/images/Donate-Love.png'
import DonateImg from '../../../assets/images/Donate.png'

const DecauseWeCam = ({wrCustomClass}) => {
  return (
    <div className={`${wrCustomClass} relative`}>
       <div className='container mx-auto px-4 pt-24'>
       <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        <div className=' '>
            <PreHeader p="pb-2"title="BECAUSE WE CAN"/>
            <H2Title p="pb-4" title="How Can We Help Them?" />
            <Body1 color='text-gray-800'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
            </Body1>
            <div className='grid text-center sm:text-left grid-cols-1 sm:grid-cols-2 lg:gap-10 gap-5 pt-14' >
                <TopIconBox 
                  content="‘’We aim to provide groceries, and appliances to low income familes." 
                  icon={CharityLoveImg} title="Giving Love" 
                />
                <TopIconBox 
                  content="‘’We aim to provide groceries, and appliances to low income familes." 
                  icon={DollarDonateImg} title="Donations" 
                />
                <TopIconBox 
                  content="‘’We aim to provide groceries, and appliances to low income familes." 
                  icon={DonateLoveImg} title="Volunteering" 
                />
                <TopIconBox 
                  content="‘’We aim to provide groceries, and appliances to low income familes." 
                  icon={DonateImg} title="Globalization Work" 
                />
            </div>
        </div>
        
        </div>
       </div>
       <div className=' lg:absolute h-full top-0 left-1/2 lg:ml-10 mt-10 lg:mt-0 mx-auto  lg:px-0 lg:pb-24  px-5'>
            <img className='rounded-bl-100 object-cover lg:h-full' src={decauseImg} alt="decause" />
        </div>
    </div>
  )
}

export default DecauseWeCam