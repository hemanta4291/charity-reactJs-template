import React from 'react'
import H5Title from '../heading/H5Title'
import Strong2 from '../heading/Strong2'

const CountBox = ({item}) => {
  const {count,subTitle,icon} = item
  return (
    <div className='p-5 md:p-10 text-center flex items-center flex-col'>
        {icon}
        <H5Title CustomClass='pt-1 md:pt-6' title={count}/>
        <Strong2 title={subTitle}/>
    </div>
  )
}

export default CountBox