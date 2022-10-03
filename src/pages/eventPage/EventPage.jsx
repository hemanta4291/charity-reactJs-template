import React,{useEffect} from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import Body1 from '../../components/global/heading/Body1'
import H2Title from '../../components/global/heading/H2Title'
import PreHeader from '../../components/global/heading/PreHeader'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/section/feature/Feature'
import LatestNews from '../../components/section/letestNews/LatestNews'
import eventImg from '../../assets/images/event.jpeg'
import Event from '../../components/global/event/Event'
import BtnTitle from '../../components/global/heading/BtnTitle'
import Pagination from '../../components/global/pagination/Pagination'





const EventPage = () => {

  const data = [
    {
      id:1,
      img:eventImg,
      title:'Charity Auction for Children',
      date:'08:00AM, October 15, 2022 ',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location:'4102 Lynn Avenue, Hudson, United States',
      link:'#'
    },
    {
      id:2,
      img:eventImg,
      title:'Charity Auction for Children',
      date:'08:00AM, October 15, 2022 ',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location:'4102 Lynn Avenue, Hudson, United States',
      link:'#'
    },
    {
      id:3,
      img:eventImg,
      title:'Charity Auction for Children',
      date:'08:00AM, October 15, 2022 ',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location:'4102 Lynn Avenue, Hudson, United States',
      link:'#'
    },
    {
      id:4,
      img:eventImg,
      title:'Charity Auction for Children',
      date:'08:00AM, October 15, 2022 ',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location:'4102 Lynn Avenue, Hudson, United States',
      link:'#'
    },
    {
      id:5,
      img:eventImg,
      title:'Charity Auction for Children',
      date:'08:00AM, October 15, 2022 ',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location:'4102 Lynn Avenue, Hudson, United States',
      link:'#'
    },
    {
      id:6,
      img:eventImg,
      title:'Charity Auction for Children',
      date:'08:00AM, October 15, 2022 ',
      content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location:'4102 Lynn Avenue, Hudson, United States',
      link:'#'
    }
  ]

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
      active:true,
    },
  ]

  useEffect(()=>{
    document.title="Event"
  },[])

  let rendierViewData = null
  rendierViewData = data.map((item)=>(
    <Event item={item} key={item.id}/>
  ))

  return (
    <div className='payment'>
        <BreadCrumb title="Upcoming Events" breadCrumbArray={breadCrumbArray}/>
        <div className="py-12 sm:py-20">
          <div className='container max-w-2xl mx-auto px-4 text-center'>
              <PreHeader p="pb-2"title="All Events"/>
              <H2Title p="pb-4" title="Upcoming Events" />
              <Body1 color='text-gray-800' customClass='pb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae. Leo, a platea quis at.
              </Body1>
              
          </div>
          <div className='container mx-auto px-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14'>
                  {
                    rendierViewData
                  }
              </div>
          </div>
         <Pagination wrCustomClass="pt-14"/>
         
        </div>
        <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20"/>
        <Feature/>
        <LatestNews wrCustomClass="pt-12 sm:pt-20 pb-12 sm:pb-20 2xl:pb-32"/>
    </div>
  )
}

export default EventPage