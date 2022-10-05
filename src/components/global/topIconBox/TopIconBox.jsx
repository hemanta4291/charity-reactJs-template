import React from 'react'
import Body1 from '../heading/Body1'
import H5Title from '../heading/H5Title'

const TopIconBox = ({title,icon,content}) => {
  return (
    <div className='text-center'>
       <img className='w-20 md:w-auto inline-block' src={icon} alt="title" />
        <H5Title p="pt-4" title={title} />
        <Body1 color='text-black'>{content}</Body1>
    </div>
  )
}

export default TopIconBox