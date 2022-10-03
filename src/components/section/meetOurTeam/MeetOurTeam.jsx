import React from 'react'
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import TeamBox from '../../global/teamBox/TeamBox'
import meet1Img from '../../../assets/images/meet1.jpeg'
import meet2Img from '../../../assets/images/meet2.jpeg'
import meet3Img from '../../../assets/images/meet3.jpeg'
import meet4Img from '../../../assets/images/meet4.jpeg'
import ButtonContainedLink from '../../global/button/ButtonContainedLink'


const MeetOurTeam = ({wrCustomClass}) => {

  const meetArray = [
    {
      id:1,
      title:"Devil Roy Barman",
      subTitle:"Volunteer",
      img:meet1Img,
      socialMedia:[]
    },
    {
      id:2,
      title:"Devil Roy Barman",
      subTitle:"Volunteer",
      img:meet2Img,
      socialMedia:[]
    },
    {
      id:3,
      title:"Devil Roy Barman",
      subTitle:"Volunteer",
      img:meet3Img,
      socialMedia:[]
    },
    {
      id:4,
      title:"Devil Roy Barman",
      subTitle:"Volunteer",
      img:meet4Img,
      socialMedia:[]
    }

  ]

  let contentViewRender = null
  contentViewRender = meetArray.map((item)=>(
    <TeamBox item={item}/>
  ))
  
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
          <div className='text-center pt-10'>
            <ButtonContainedLink to='/meet-team'>Learn More</ButtonContainedLink>
          </div>
          
        </div>
    </div>
  )
}

export default MeetOurTeam