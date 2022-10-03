import React from 'react'
import Body1 from '../../global/heading/Body1'
import H2Title from '../../global/heading/H2Title'
import PreHeader from '../../global/heading/PreHeader'
import LatestBox from '../../global/latestBox/LatestBox'
import latestImg from '../../../assets/images/latest.jpeg'
import latestImg2 from '../../../assets/images/latest2.jpeg'
import latestImg3 from '../../../assets/images/latest3.jpeg'

const LatestNews = ({ wrCustomClass }) => {
  const latestArray = [
    {
      id: 1,
      title: "How to find a family",
      text: "Learn More",
      link: "#",
      img: latestImg,
      comment: 1,
      date: '12 March, 2021'
    },
    {
      id: 2,
      title: "How to find a family",
      text: "Learn More",
      link: "#",
      img: latestImg2,
      comment: 1,
      date: '12 March, 2021'
    },
    {
      id: 3,
      title: "How to find a family",
      text: "Learn More",
      link: "#",
      img: latestImg3,
      comment: 1,
      date: '12 March, 2021'
    },


  ]

  let contentViewRender = null
  contentViewRender = latestArray.map((item) => (
    <LatestBox item={item} key={item.id} />
  ))

  return (
    <div className={`${wrCustomClass}`}>
      <div className='container mx-auto px-4 text-center'>
        <PreHeader p="pb-2 " title="LATEST NEWS" />
        <H2Title customClass='mx-auto w-full max-w-lg' p="pb-4" title="Keep memories in these posts" />
        <Body1 customClass='lg:max-w-5xl max-w-3xl mx-auto w-full pb-12' color='text-gray-700'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.
        </Body1>
      </div>
      <div className='container mx-auto px-4 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {contentViewRender}


        </div>
      </div>
    </div>
  )
}

export default LatestNews