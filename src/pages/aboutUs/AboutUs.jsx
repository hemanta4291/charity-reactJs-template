import React from 'react'
import { useEffect } from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import AboutSecetion from '../../components/section/aboutSection/AboutSecetion'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import DecauseWeCam from '../../components/section/decauseWeCan/DecauseWeCam'
import Feature from '../../components/section/feature/Feature'
import MeetOurTeam from '../../components/section/meetOurTeam/MeetOurTeam'
import QuestionSection from '../../components/section/questionSection/QuestionSection'

const AboutUs = () => {
  const breadCrumbArray = [
    {
      id:1,
      title:'Home',
      link:'/',
      active:false,
    },
    {
      id:2,
      title:'About',
      link:'/about-us',
      active:true,
    }
  ]
  useEffect(()=>{
    document.title="About us"
  },[])
  return (
    <div className='about_us'>
        <BreadCrumb title="About Us" breadCrumbArray={breadCrumbArray} />
        <AboutSecetion wrCustomClass="py-12 sm:py-20"/>
        <DecauseWeCam wrCustomClass="pb-12 sm:pb-20"/>
        <MeetOurTeam wrCustomClass="pb-12 sm:pb-20" />
        <QuestionSection wrCustomClass="py-12 sm:py-20" />
        <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20"/>
        <Feature wrCustomClass="pb-12 sm:pb-20"/>
    </div>
  )
}

export default AboutUs