import React from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '../../assets/images/white-logo.png'
import ButtonContained from '../../components/global/button/ButtonContained'
import ALink from '../../components/global/heading/ALink'
import Body1 from '../../components/global/heading/Body1'
import Body2 from '../../components/global/heading/Body2'
import SubTitle from '../../components/global/heading/Subtitle'
import Icons from '../../components/global/Icons'
import Social from '../../components/global/social/Social'

const Footer = () => {

  const upToTopWindow = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className='bg-gray-900 pt-20'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div>
                <img src={whiteLogo} alt="footer logo"/>
                <ButtonContained m="mt-6">Donate Now</ButtonContained>
              </div>
              <div>
                <SubTitle customClass='pb-7' color='text-white' title="Quick Links"/>
                <ul>
                <li className='py-1' onClick={upToTopWindow}>
                    <ALink color='text-white hover:text-primary' customClass='transition duration-0.5' to="/">Home</ALink>
                  </li>
                  <li className='py-1' onClick={upToTopWindow}>
                    <ALink color='text-white hover:text-primary' customClass='transition duration-0.5' to="causes">Causes</ALink>
                  </li>
                  <li className='py-1' onClick={upToTopWindow}>
                    <ALink color='text-white hover:text-primary' customClass='transition duration-0.5' to="/about">About US</ALink>
                  </li>
                  <li className='py-1' onClick={upToTopWindow}>
                    <ALink color='text-white hover:text-primary' customClass='transition duration-0.5' to="event-page">Event</ALink>
                  </li> 
                  <li className='py-1' onClick={upToTopWindow}>
                    <ALink color='text-white hover:text-primary' customClass='transition duration-0.5' to='contact'>Contact Us</ALink>
                  </li> 
                </ul>
              </div>
              <div>
                <SubTitle customClass='pb-7' color='text-white' title="Contact US"/>
                <div className='flex items-center gap-2 w-60 py-1'>
                  <div className='flex-shrink-0'>
                    {Icons.locationIcon}
                  </div>
                  <Body1>4102 Lynn Avenue, Las Vegas, NM, USA</Body1>
                </div>
                <div className='flex items-center gap-2 py-1'>
                  {Icons.emialIcon}
                  <Body1>0devdesign.studio@gmail.com</Body1>
                </div>
                <div className='flex items-center gap-2 py-1'>
                  {Icons.callIcon}
                  <Body1>+1 516 231 1313</Body1>
                </div>
                  <Social bgColor='' 
                    flexDirection='row' 
                    p='' 
                    gap='gap-4'
                    customClass='mt-4'
                    justifyContent='justify-start'
                  />
              </div>
            </div>
        </div>
        <div className='border-t-2 border-on-primary-opacity-0.12 mt-12 py-10'>
            <div className='container text-center lg:text-left mx-auto px-4'>
                <div className='flex flex-col gap-y-4 lg:flex-row justify-between'>
                    <Body2> © 2022 Dev Charity | 
                        <Link to="#" className='text-tertiary mr-0.5'> Sitemap |</Link>
                        <Link to="#" className='text-tertiary'> Privacy Policy |</Link>
                        <Link to="#" className='text-tertiary'> Anti-Spam Policy | </Link>
                        <Link to="#" className='text-tertiary'> Click for Accessibility</Link>
                    </Body2>
                  <Body2> Marketing & Web Design by 
                     <Link to="#" className='text-tertiary'> Devdesign Studio</Link></Body2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer