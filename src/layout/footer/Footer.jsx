import React,{useEffect} from 'react'
import { useState } from 'react'
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
  const [bottomClass, setBootomClass] = useState(false)
  const scrollHandleScroll = () => {

    if (window.scrollY > 500) {
        setBootomClass(true)
    } else {
        setBootomClass(false)
    }

  }
  const upToTopWindow = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandleScroll);
  },[]);
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

        <div className={`${!bottomClass && 'hidden '} cursor-pointer fixed bottom-10 z-40 right-6 w-10 md:w-12 h-10 md:h-12 bg-gray-800 rounded-lg border-2 border-white flex items-center justify-center`} onClick={upToTopWindow}>
          <svg width="10" height="22" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.67033 0.128333L0.215333 5.01417C0.105333 5.15167 0.0869993 5.29833 0.151166 5.46333C0.215333 5.62833 0.343666 5.70167 0.517833 5.70167H3.37783V21.5967C3.37783 21.7158 3.4145 21.8167 3.48783 21.89C3.56117 21.9633 3.662 22 3.78117 22H6.22867C6.34783 22 6.44867 21.9633 6.522 21.89C6.59533 21.8167 6.632 21.7158 6.632 21.5967V5.70167H9.48283C9.657 5.70167 9.77617 5.61917 9.8495 5.46333C9.91367 5.29833 9.89533 5.15167 9.77617 5.01417L5.27533 0.128333C5.18367 0.0458333 5.08283 0 4.96367 0C4.85367 0 4.75283 0.0458333 4.67033 0.128333Z" fill="white"/>
          </svg>
        </div>

    </div>
  )
}

export default Footer