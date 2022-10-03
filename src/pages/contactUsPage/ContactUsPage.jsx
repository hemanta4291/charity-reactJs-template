import React,{useEffect} from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import ContactUs from '../../components/section/contactUs/ContactUs'
import Feature from '../../components/section/feature/Feature'
import LatestNews from '../../components/section/letestNews/LatestNews'






const ContactUsPage = () => {

  const breadCrumbArray = [
    {
      id:1,
      title:'Home',
      link:'/',
      active:false,
    },
    {
      id:2,
      title:'Contact',
      link:'/contact ',
      active:true,
    },
  ]

  useEffect(()=>{
    document.title="Contact "
  },[])

  return (
    <div className='payment'>
        <BreadCrumb title="Contact" breadCrumbArray={breadCrumbArray}/>
        <ContactUs wrCustomClass="py-12 sm:py-20"/>
        <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20"/>
        <Feature/>
        <LatestNews wrCustomClass="pt-12 sm:pt-20 pb-12 sm:pb-20 2xl:pb-32"/>
    </div>
  )
}

export default ContactUsPage