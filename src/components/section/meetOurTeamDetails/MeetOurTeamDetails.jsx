import React, { useState } from 'react'
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import TeamBox from '../../global/teamBox/TeamBox'
import ButtonContainedLink from '../../global/button/ButtonContainedLink'
import BtnTitle from '../../global/heading/BtnTitle'
import TeamData from './TeamData'
import Pagination from '../../global/pagination/Pagination'


const MeetOurTeamDetails = ({wrCustomClass}) => {
  const [meetArray,setMeetArray] = useState([...TeamData])

  let contentViewRender = null
  contentViewRender = meetArray?.map((item)=>(
    <TeamBox item={item} key={item.id}/>
  ))

  let paginationRenderView = null
  
  return (
    <div className={`${wrCustomClass}`}>
        <div className='container mx-auto px-4 text-center'>
           <PreHeader p="pb-2 "title="We Change Your Life & World"/>
            <H2Title customClass='mx-auto w-full max-w-lg' p="pb-4" title="Meet Our Volunteers" />
            <Body1 customClass='lg:max-w-5xl max-w-3xl mx-auto w-full pb-12' color='text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. 
            </Body1>
        </div>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {contentViewRender}
          </div>
          <Pagination wrCustomClass="pt-14"/>
          
        </div>
    </div>
  )
}

export default MeetOurTeamDetails