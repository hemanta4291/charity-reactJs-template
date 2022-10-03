import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icons from '../Icons'

const socialItems = [
    {
        id:1,
        icon:Icons.fbIcon,
        link:'#'
    },
    {
        id:2,
        icon:Icons.linkedinIcon,
        link:'#'
    },
    {
        id:3,
        icon:Icons.twitterIcon,
        link:'#'
    },
]


const Social = ({
    bgColor="bg-secondary",
    rounded="rounded-md",
    p="p-2",
    flex="flex",
    flexDirection="flex-col",
    gap="gap-2",
    alignItem="items-center",
    justifyContent="justify-center",
    customClass="",
    customArray = socialItems

}) => {
   
    const [arrayLists,setArrayLists] = useState([...customArray])
    let content = null
    content = arrayLists.map((item)=>(
        <Link to={item.link} className={`cursor-pointer ${bgColor+' '+p+' '+rounded}`} key={item.id}>
            {item.icon}
        </Link>
    ))


    return(
        <div className={`${customClass+' '+flex+' '+flexDirection+' '+alignItem+' '+justifyContent+' '+gap}`}>
            {content}
        </div>
    )
}

export default Social