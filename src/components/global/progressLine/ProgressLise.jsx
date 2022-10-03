import React from 'react'
import H4Title from '../heading/H4Title'

const ProgressLise = ({
    downbg='bg-gray-700',
    upbg='bg-secondary-container',
    height='h-2',
    percentage='40',
    percentageColor='text-white'
}) => {
  return (
    <div>
        <H4Title title={`${percentage}%`} color={percentageColor} p="pb-2"/>
        <div className='relative'>
            <div className={`${downbg+' '+height} absolute  w-full top-0 left-0`}></div>
            <div style={{width:`${percentage}%`}} className={`${upbg+' '+height} absolute top-0 left-0`}></div>
        </div>
    </div>
    
  )
}

export default ProgressLise