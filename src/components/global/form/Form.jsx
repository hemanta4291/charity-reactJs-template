import React,{useState} from 'react'
import ReactFlagsSelect from "react-flags-select";
import { Us } from "react-flags-select";
import ButtonContained from '../button/ButtonContained';

const Form = ({wrCustomClass=""}) => {
    const [selected, setSelected] = useState("BD");
  return (
    <div className={`${wrCustomClass}`}>
        <input placeholder="Full Name*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
        <input placeholder="Email*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
        <div className='relative'>
            <input placeholder="Phone*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 pl-20 pr-5 text-lg text-gray-800 " />
            <div className='absolute left-0 top-2 w-20 h-full'>
                <ReactFlagsSelect className=''
                selectButtonClassName="!border-0"
                selected={selected}
                showSelectedLabel={false}
                placeholder=" "
                onSelect={(code) => setSelected(code)}
                />
            </div>
        </div>
        <input placeholder="Date of Birth" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
        <input placeholder="Occupation" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
        <textarea placeholder="Write a Comment" className="mb-4 w-full focus:outline-none border border-gray-300 resize-none rounded-sm h-30 2xl:h-40 py-4 px-5 text-lg text-gray-800 " />
        <ButtonContained customClass='mt-2 md:mt-8'>Appply Now </ButtonContained>
    </div>
  )
}

export default Form