import React from 'react'
import { Link } from 'react-router-dom'
import Body1 from '../heading/Body1'
import BtnTitle from '../heading/BtnTitle'
import Strong2 from '../heading/Strong2'
import SubTitle from '../heading/Subtitle'
import Icons from '../Icons'

const Event = ({item}) => {
    const {id,title,date,content,img,link,location} = item || {}
  return (
    <div >
        <img className="rounded-t-md h-auto 2xl:max-h-80 2xl:h-full" src={img} alt="event"/>
        <div className='flex items-center gap-2 pt-6 pb-4'>
           <span className='flex-shrink-0 inline-flex'> {Icons.clockIcon}</span>
            <Strong2 title={date}/>
        </div>
        <SubTitle color='text-gray-800' title="Charity Auction for Children"/>
        <Body1 color='text-gray-700' customClass='py-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, 
        </Body1>
        <div className='flex items-center gap-2'>
           <span className='flex-shrink-0 inline-flex'>
            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0C4.708 0 .81 3.9.81 8.692c0 5.948 7.778 14.68 8.11 15.048a.783.783 0 0 0 1.164 0c.331-.368 8.11-9.1 8.11-15.048C18.192 3.899 14.292 0 9.5 0Zm0 13.065a4.378 4.378 0 0 1-4.373-4.373A4.378 4.378 0 0 1 9.5 4.319a4.378 4.378 0 0 1 4.373 4.373A4.378 4.378 0 0 1 9.5 13.065Z" fill="#595959"/>
            </svg>
            </span>
            <Strong2 title={location}/>
        </div>
        <Link to={link} className=' mt-4 flex items-center gap-2'>
           <BtnTitle customClass='uppercase' title="Learn More"/>
           {Icons.rightArrowIcon}
        </Link>

    </div>
  )
}

export default Event