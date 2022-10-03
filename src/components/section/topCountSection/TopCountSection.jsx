import React, { useState } from 'react'
import CountBox from '../../global/countBox/CountBox'
import Icons from '../../global/Icons'

const data = [
  {
    id:1,
    icon:Icons.charitySupport,
    count:9320,
    subTitle:'People help Last year'
  },
  {
    id:2,
    icon:Icons.donateMoneyIcon1,
    count:1780,
    subTitle:'People help Last year'
  },
  {
    id:3,
    icon:Icons.calendarColorIcon,
    count:1520,
    subTitle:'People help Last year'
  },
  {
    id:4,
    icon:Icons.foodBoxIcon,
    count:8920,
    subTitle:'People help Last year'
  }
]
const TopCountSection = ({wrCustomClass="",positon=""}) => {
  const [dataArray,setDataArry] = useState([...data])
  return (
        <div className={`${wrCustomClass}`}>
            <div className={`${positon} container mx-auto px-4`}>
              <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 shadow-md bg-white rounded-md`}>
              {
                dataArray?.map((item)=>(
                  <CountBox item={item} key={item.id} />
                ))
              }
              </div>
            </div>
        </div>
        
          
  )
}

export default TopCountSection