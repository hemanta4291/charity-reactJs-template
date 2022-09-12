import React from 'react'
import H5Title from '../heading/H5Title'
import Strong2 from '../heading/Strong2'

const CountBox = ({item}) => {
  const {count,subTitle} = item
  return (
    <div className='p-10 text-center'>
        <H5Title title={count}/>
        <Strong2 title={subTitle}/>
    </div>
  )
}

export default CountBox