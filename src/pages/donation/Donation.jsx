import React, { useState,useEffect } from 'react'
import ReactFlagsSelect from "react-flags-select";
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import Body1 from '../../components/global/heading/Body1'
import H2Title from '../../components/global/heading/H2Title'
import PreHeader from '../../components/global/heading/PreHeader'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/section/feature/Feature'
import LatestNews from '../../components/section/letestNews/LatestNews'
import donationImg from '../../assets/images/donation.jpeg'
import Strong2 from '../../components/global/heading/Strong2'
import ButtonContained from '../../components/global/button/ButtonContained';



const Donation = () => {
  const [selected, setSelected] = useState("BD");
  const breadCrumbArray = [
    {
      id:1,
      title:'Home',
      link:'/',
      active:false,
    },
    {
      id:2,
      title:'Donation',
      link:'/donation ',
      active:true,
    },
  ]

useEffect(()=>{
  document.title="Donation"
},[])
  return (
    <div className='about_us'>
      <BreadCrumb title="Donations" breadCrumbArray={breadCrumbArray} />
      <div className="py-12 sm:py-20">
        <div className='container max-w-2xl mx-auto px-4 text-center'>
          <PreHeader p="pb-2" title="Donate now" />
          <H2Title p="pb-4" title="Iodine fortification of household salt" />
          <Body1 color='text-gray-800' customClass='pb-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae. Leo, a platea quis at.
          </Body1>

        </div>
        <div className='relative'>
          <div className=' container mx-auto px-4 mt-6 md:mt-0'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-6'>
              <div>
                <div className='relative'>
                  <select className='bg-transparent absolute h-12 2xl:h-14 w-7 left-2 cursor-pointer top-0 focus:outline-none'>
                    <option selected value="1">$</option>
                    <option value="1">US</option>
                    <option value="1">tk</option>
                    <option value="1">$</option>
                  </select>
                  <input placeholder="Phone*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 pl-10 pr-5 text-lg text-gray-800 " />
                </div>
                <div className='grid grid-cols-3 sm:grid-cols-5 gap-5 mb-4'>
                  <div className='group hover:bg-secondary hover:border-bg-secondary transition-all cursor-pointer flex items-center justify-center border-2 border-secondary rounded-lg py-3 px-7'>
                    <Strong2 customClass='group-hover:text-white' color='text-secondary' title="$10" />
                  </div>
                  <div className='group hover:bg-secondary hover:border-bg-secondary transition-all cursor-pointer flex items-center justify-center border-2 border-secondary rounded-lg py-3 px-7'>
                    <Strong2 customClass='group-hover:text-white' color='text-secondary' title="$80" />
                  </div>
                  <div className='group hover:bg-secondary hover:border-bg-secondary transition-all cursor-pointer flex items-center justify-center border-2 border-secondary rounded-lg py-3 px-7'>
                    <Strong2 customClass='group-hover:text-white' color='text-secondary' title="$800" />
                  </div>
                  <div className='group hover:bg-secondary hover:border-bg-secondary transition-all cursor-pointer flex items-center justify-center border-2 border-secondary rounded-lg py-3 px-7'>
                    <Strong2 customClass='group-hover:text-white' color='text-secondary' title="$0" />
                  </div>
                  <div className='group hover:bg-secondary hover:border-bg-secondary transition-all cursor-pointer flex items-center justify-center border-2 border-secondary rounded-lg py-3 px-7'>
                    <Strong2 customClass='group-hover:text-white' color='text-secondary' title="$70" />
                  </div>
                </div>
                <input placeholder="Full Name*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                <input placeholder="Email*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                <div className='relative'>
                  <input placeholder="Phone*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 pl-20 pr-5 text-lg text-gray-800 " />
                  <div className='absolute left-0 top-2 w-20 h-full'>
                    <ReactFlagsSelect className=''
                      selectButtonClassName="!border-0"
                      selected={selected}
                      showSelectedLabel={false}
                      placeholder=" "
                      onSelect={(code) => setSelected(code)}
                    />
                  </div>
                </div>
                <input placeholder="Full Name*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                <input placeholder="Email*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                <div className='grid grid-cols-2 gap-6 mb-4'>
                  <input placeholder="Country" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                  <input placeholder="City" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                </div>
                <div className='grid grid-cols-2 gap-6 mb-4'>
                  <input placeholder="State" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                  <input placeholder="Zip Code" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                </div>
                <textarea placeholder="Write a Comment" className="mb-4 w-full focus:outline-none border border-gray-300 resize-none rounded-sm h-30 2xl:h-40 py-4 px-5 text-lg text-gray-800 " />
                <ButtonContained borderColor='border-secondary hover:border-primary' bgColor='bg-secondary hover:bg-transparent' customClass='mt-2 md:mt-8'>Next</ButtonContained>
              </div>


              <div className='lg:absolute left-1/2 lg:h-full lg:pl-8 lg:w-1/2 order-first mb-12 lg:mb-0 lg:order-last px-5 md:px-0'>
                <img className='rounded-bl-100 h-full object-cover w-full' src={donationImg} alt="decause" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20" />
      <Feature />
      <LatestNews wrCustomClass="pt-12 sm:pt-20 pb-12 sm:pb-20 2xl:pb-32" />
    </div>
  )
}

export default Donation