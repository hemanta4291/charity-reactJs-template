import React from 'react'
import Strong1 from '../heading/Strong1'
import Strong2 from '../heading/Strong2'
import latestPost from '../../../assets/images/latest.jpeg'
import { Link } from 'react-router-dom'


const LatestSideBox = ({item}) => {
  return (
    <div className='flex gap-3 items-center mb-4'>
        <div className='basis-14 flex-shrink-0 h-14 '>
        <img className='object-cover rounded-lg h-full w-full' src={latestPost} alt="latest post" />
        </div>
        <div>
        <Strong2 customClass='truncate' color='text-gray-600' title="12 March, 2021"/>

        <Link to="#"><Strong1 customClass='truncate' color='text-gray-800' title="Promoting the rights of children"/></Link>
        </div>
    </div>
  )
}

export default LatestSideBox