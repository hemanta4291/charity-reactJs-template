import React,{useEffect} from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import EventDetailSection from '../../components/section/eventDetailSection/EventDetailSection'
import Feature from '../../components/section/feature/Feature'
import LatestNews from '../../components/section/letestNews/LatestNews'






const EventDetailPage = () => {

  const breadCrumbArray = [
    {
      id:1,
      title:'Home',
      link:'/',
      active:false,
    },
    {
      id:2,
      title:'Event',
      link:'/event ',
      active:false,
    },
    {
      id:3,
      title:'Event Details',
      link:'/event-details ',
      active:true,
    },
  ]

    useEffect(()=>{
      document.title="Event Details"
    },[])

  return (
    <div className='payment'>
        <BreadCrumb title="Event Details" breadCrumbArray={breadCrumbArray}/>
        <EventDetailSection/>
        <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20"/>
        <Feature/>
        <LatestNews wrCustomClass="pt-12 sm:pt-20 pb-12 sm:pb-20 2xl:pb-32"/>
    </div>
  )
}

export default EventDetailPage