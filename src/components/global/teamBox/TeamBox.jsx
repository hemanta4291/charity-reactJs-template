import React from 'react'
import Strong1 from '../heading/Strong1'
import SubTitle from '../heading/Subtitle'
import Social from '../social/Social'


const TeamBox = ({item}) => {
    const {img,title,subTitle} = item || {}

    return(
        <div className='relative overflow-hidden group '>
            <div className='absolute -right-11  top-3 group-hover:right-3 transition-right duration-0.5'>
                <Social />
            </div>
            <img className=' max-h-max md:max-h-80 2xl:max-h-96 sm:h-full w-full object-cover' src={img} alt="team" />
            <SubTitle customClass="pt-4 pb-1" title={title}/>
            <Strong1 title={subTitle}/>
        </div>
    )
}

export default TeamBox