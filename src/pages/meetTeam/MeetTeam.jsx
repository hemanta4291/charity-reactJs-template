import React,{useEffect} from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/section/feature/Feature'
import LatestNews from '../../components/section/letestNews/LatestNews'
import MeetOurTeamDetails from '../../components/section/meetOurTeamDetails/MeetOurTeamDetails'


const MeetTeam = () => {
  const breadCrumbArray = [
    {
      id:1,
      title:'Home',
      link:'/',
      active:false,
    },
    {
      id:2,
      title:'Volunteers',
      link:'/become-volunteer ',
      active:true,
    }
  ]
  useEffect(()=>{
    document.title="Meet Team"
  },[])
  return (
    <div className='about_us'>
        <BreadCrumb title="Volunteers" breadCrumbArray={breadCrumbArray}/>
        <MeetOurTeamDetails wrCustomClass="py-12 sm:py-20"/>
        <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20"/>
        <Feature wrCustomClass="pb-12 sm:pb-20"/>
        <LatestNews wrCustomClass="pb-12 sm:pb-20"/>
    </div>
  )
}

export default MeetTeam