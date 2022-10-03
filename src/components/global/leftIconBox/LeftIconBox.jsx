import React from 'react'
import Body1 from '../heading/Body1'
import H5Title from '../heading/H5Title'
import Icons from '../Icons'

const LeftIconBox = ({item}) => {
    const {id,title,icon,content} = item
  return (
    <div className='flex gap-2 sm:gap-5 flex-col sm:flex-row'>
        <div>
            {icon}
        </div>
        <div>
            <H5Title title={title} />
            <Body1 color='text-black'>{content}</Body1>
        </div>
    </div>
  )
}

export default LeftIconBox