import React from 'react'
import latestImg from '../../../assets/images/latest.jpeg'
import BtnTitle from '../heading/BtnTitle'
import Strong2 from '../heading/Strong2'
import SubTitle from '../heading/Subtitle'
import Icons from '../Icons'

const LatestBox = ({ item }) => {
    const { title, text, link, img, comment, date } = item || {}
    return (
        <div className='group overflow-hidden'>
            <div className=' h-auto sm:min-h-80 '>
                <img className="h-full sm:min-h-80 w-full group-hover:scale-110 transition-all duration-0.5 rounded-t-md" src={img} alt="latest" />
            </div>
            <div className='bg-white relative'>
                <div className='flex gap-5 pt-6'>
                    <div className='flex gap-1 sm:gap-2'>
                        {Icons.commentAlt1Icon}
                        <Strong2 title={`${comment} Comment`} />
                    </div>
                    <div className='border-r-2 h-6 border-gray-300'>
                    </div>
                    <div className='flex gap-2'>
                        {Icons.calendarIcon}
                        <Strong2 title={date} />
                    </div>
                </div>
                <SubTitle customClass='py-1 sm:py-4 truncate' title={title} />
                <a href={link} className='flex gap-2 items-center'>
                    <BtnTitle title={text} />
                    {Icons.rightArrowIcon}
                </a>
            </div>
        </div>
    )
}

export default LatestBox