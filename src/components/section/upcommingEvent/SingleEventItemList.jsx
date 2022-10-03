import React from 'react'
import Body1 from '../../global/heading/Body1'
import Strong2 from '../../global/heading/Strong2'
import SubTitle from '../../global/heading/Subtitle'

const SingleEventItemList = ({item}) => {
  const {data} = item

  let dataRenderView = null
  dataRenderView= data.map((item)=>(
      <div key={item.id} className="pb-10 group sm:last:pb-0">
          <SubTitle  color='text-gray-800 group-hover:text-primary transition duration-0.5' title={item.title}/>
          <Strong2 color='text-secondary' customClass="pt-2 pb-4" title={item.date}/>
          <Body1 color='text-gray-700'>{item.content}</Body1>
          <div className='flex items-center gap-2 pt-4'>
          <svg className='flex-shrink-0' width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C4.006 0 .757 3.25.757 7.243c0 4.957 6.482 12.233 6.758 12.54a.65.65 0 0 0 .97 0c.276-.307 6.758-7.583 6.758-12.54C15.243 3.25 11.994 0 8 0Zm0 10.887a3.648 3.648 0 0 1-3.644-3.644A3.648 3.648 0 0 1 8 3.6a3.648 3.648 0 0 1 3.644 3.644A3.648 3.648 0 0 1 8 10.887Z" fill="#7E1810"/></svg>
          <Strong2 color='text-on-primary-container' title={item.location}/>
          </div>
      </div>
  ))
  return dataRenderView;
}

export default SingleEventItemList