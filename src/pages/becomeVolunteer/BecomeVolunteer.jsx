import React,{useEffect} from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/section/feature/Feature'
import LatestNews from '../../components/section/letestNews/LatestNews'
import Volunteer from '../../components/section/volunteer/Volunteer'


const BecomeVolunteer = () => {
  const breadCrumbArray = [
    {
      id:1,
      title:'Home',
      link:'/',
      active:false,
    },
    {
      id:2,
      title:'Become Volunteer',
      link:'/become-volunteer ',
      active:true,
    }
  ]
  useEffect(()=>{
    document.title="Become Volunteer"
  },[])
  return (
    <div className='about_us'>
        <BreadCrumb title="Become a Volunteer" breadCrumbArray={breadCrumbArray}/>
        <Volunteer wrCustomClass="py-12 sm:py-20"/>
        <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20"/>
        <Feature/>
        <LatestNews wrCustomClass="pt-12 sm:pt-20 pb-12 sm:pb-20 2xl:pb-32"/>
    </div>
  )
}

export default BecomeVolunteer