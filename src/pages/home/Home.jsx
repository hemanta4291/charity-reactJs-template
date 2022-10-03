import React,{useEffect} from 'react'
import Slider from '../../components/slider/Slider'
import TopCountSection from '../../components/section/topCountSection/TopCountSection'
import AboutSecetion from '../../components/section/aboutSection/AboutSecetion'
import MissionSection from '../../components/section/missionSection/MissionSection'
import Campaign from '../../components/section/campaignSection/Campaign'
import DecauseWeCam from '../../components/section/decauseWeCan/DecauseWeCam'
import UpcommingEvent from '../../components/section/upcommingEvent/UpcommingEvent'
import MeetOurTeam from '../../components/section/meetOurTeam/MeetOurTeam'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/section/feature/Feature'
import LatestNews from '../../components/section/letestNews/LatestNews'
import BrandSection from '../../components/section/brandSection/BrandSection'

const Home = () => {
  useEffect(()=>{
    document.title="Home"
  },[])
  return (
        <div className='home'>
          <Slider/>
          <TopCountSection  positon="relative -top-24"/>
          <AboutSecetion wrCustomClass=" py-12 sm:py-20"/>
          <BrandSection wrCustomClass="pb-20"/>
          <MissionSection wrCustomClass="py-12 sm:py-20"/>
          <Campaign wrCustomClass="py-12 sm:py-20"/>
          <DecauseWeCam wrCustomClass="pb-12 sm:pb-20"/>
          <UpcommingEvent/>
          <MeetOurTeam wrCustomClass="py-12 sm:py-20" />
          <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20"/>
          <Feature/>
          <LatestNews wrCustomClass="pt-12 sm:pt-20 pb-12 sm:pb-20 2xl:pb-32"/>
        </div>
  )
}

export default Home