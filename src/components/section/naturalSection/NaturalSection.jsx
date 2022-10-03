import React from 'react'
import { useState } from 'react'
import Icons from '../../global/Icons'
import LeftIconBox from '../../global/leftIconBox/LeftIconBox'

const data = [
  {
    id:1,
    icon:Icons.worldIcon,
    title:"Natural Coffee Beans",
    content:'Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque'
  },
  {
    id:2,
    icon:Icons.donateMoneyIcon,
    title:"Natural Coffee Beans",
    content:'Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque'
  },
  {
    id:3,
    icon:Icons.suportIcon,
    title:"Natural Coffee Beans",
    content:'Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque'
  }
]
const NaturalSection = () => {
  const [items,setItems] = useState([...data])

  return (
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-4'>
        {
          items?.map((item)=>(
            <LeftIconBox item={item}  key={item.id}/>
          ))
        }
        
      </div>
  )
}

export default NaturalSection