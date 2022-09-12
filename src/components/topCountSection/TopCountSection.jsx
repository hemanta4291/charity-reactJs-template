import React, { useState } from 'react'
import CountBox from '../global/countBox/CountBox'

const data = [
  {
    id:1,
    count:9320,
    subTitle:'People help Last year'
  },
  {
    id:2,
    count:1780,
    subTitle:'People help Last year'
  },
  {
    id:3,
    count:1520,
    subTitle:'People help Last year'
  },
  {
    id:4,
    count:8920,
    subTitle:'People help Last year'
  }
]
const TopCountSection = ({mt}) => {
  const [dataArray,setDataArry] = useState([...data])
  return (
        
          <div className={`${mt} grid md:grid-cols-2 lg:grid-cols-4 gap-4 shadow-md bg-white rounded-md`}>
            {
              dataArray?.map((item)=>(
                <CountBox item={item} key={item.id} />
              ))
            }
        </div>
  )
}

export default TopCountSection