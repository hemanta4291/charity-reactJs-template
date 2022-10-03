import React,{useState} from 'react'
import Body1 from '../heading/Body1'
import Strong1 from '../heading/Strong1'
import Icons from '../Icons'

const Accordian = ({accOpenStatus=true,title="",children={}, customClass=""}) => {
    const [accOpen,setAccOpen] = useState(accOpenStatus)
  return (
    <div className={`${customClass} border border-gray-300 rounded-2xl transition-height`}>
        <div className={`px-5 py-5 flex items-center justify-between cursor-pointer`} onClick={()=> setAccOpen(!accOpen)}>
            <Strong1 color={`${accOpen ? 'text-gray-800' : 'text-secondary'}`} title={title}/>
            { accOpen ?  Icons.plusIcon : Icons.minusIcon}
         
        </div>
        <Body1 customClass={`transition-height px-5 ${accOpen ? 'h-0 p-0 overflow-hidden -z-1' : 'pb-5'}`} color='text-gray-700 '>
            {children}
        </Body1>
    </div>
  )
}

export default Accordian