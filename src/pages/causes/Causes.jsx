import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import Body1 from '../../components/global/heading/Body1'
import BtnTitle from '../../components/global/heading/BtnTitle'
import H2Title from '../../components/global/heading/H2Title'
import PreHeader from '../../components/global/heading/PreHeader'
import Strong2 from '../../components/global/heading/Strong2'
import SubTitle from '../../components/global/heading/Subtitle'
import ProgressLise from '../../components/global/progressLine/ProgressLise'
import BecomeYoutuber from '../../components/section/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/section/feature/Feature'
import LatestNews from '../../components/section/letestNews/LatestNews'
import campaignImg1 from '../../assets/images/campaign1.jpeg'
import campaignImg2 from '../../assets/images/campaign2.jpeg'
import campaignImg3 from '../../assets/images/campaign3.jpeg'
import './causes.css'
import Pagination from '../../components/global/pagination/Pagination'


const data = [
  {
    id: 1,
    image: campaignImg1,
    tag: 'Children',
    btnTitle: "Donate Now",
    subtitle: "Iodine fortification of household salt",
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
    percentage: '35',
    Ralsed: "$5,000"
  },
  {
    id: 2,
    image: campaignImg2,
    tag: 'Children',
    btnTitle: "Donate Now",
    subtitle: "Iodine fortification of household salt",
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
    percentage: '67',
    Ralsed: "$5,000"
  },
  {
    id: 3,
    image: campaignImg3,
    tag: 'Children',
    btnTitle: "Donate Now",
    subtitle: "Iodine fortification of household salt",
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
    percentage: '80',
    Ralsed: "$5,000"
  },
]


const Causes = () => {
  const [helpData, setHelpData] = useState([...data])

  const breadCrumbArray = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      active: false,
    },
    {
      id: 2,
      title: 'Causes',
      link: '/causes ',
      active: true,
    }
  ]


useEffect(()=>{
  document.title="Causes"
},[])

  let renderView = null;
  renderView = helpData.map((item) => (
    <div key={item.id} className="relative campaign_cause_single">
      <div className='absolute top-2 left-2 bg-primary-container text-center py-2 px-4'>
        <Strong2 color='text-on-primary-container' title={item.tag} />
      </div>
      <div className='relative'>
        <img className='h-80 object-cover w-full roun rounded-t-md' src={item.image} alt="dfd" />
        <div className='campaign_cause_single_btn bg-tertiary-container text-center py-3' >
          <Link to="#"><BtnTitle title={item.btnTitle} /></Link>
        </div>
      </div>
      <div className='bg-white z-1 relative'>
        <SubTitle p="pt-6" color='text-gray-800' title={item.subtitle} />
        <Body1 p="pt-4" color='text-gray-700'>
          {item.content}
        </Body1>
        <ProgressLise percentageColor="text-gray-800" height='h-3' percentage={item.percentage} />
      </div>
      <div className='flex justify-between pt-4'>
        <Strong2 color='text-gray-700' title={`Ralsed: ${item.Ralsed}`} />
        <Strong2 color='text-gray-700' title={`Ralsed: ${item.Ralsed}`} />
      </div>
    </div>
  ))

  return (
    <div className='cause'>
      <BreadCrumb title="Causes List" breadCrumbArray={breadCrumbArray} />
      <div className='py-12 sm:py-20'>
        <div className='container max-w-2xl mx-auto px-4 text-center'>
          <PreHeader p="pb-2" title="OUR CAMPAIGNS" />
          <H2Title p="pb-4" title="Our Highest Ambition is to Help People" />
          <Body1 color='text-gray-800' customClass='pb-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae. Leo, a platea quis at.
          </Body1>
        </div>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 md:gap-6'>
            {
              renderView
            }
          </div>

        </div>
        <Pagination wrCustomClass="pt-14" />


      </div>
      <BecomeYoutuber wrCustomClass="py-16 sm:py-28 md:py-60 mb-12  sm:mb-20" />
      <Feature />
      <LatestNews wrCustomClass="pt-12 sm:pt-20 pb-12 sm:pb-20 2xl:pb-32" />
    </div>
  )
}

export default Causes