import React from 'react'
import { NavLink } from 'react-router-dom'

const DropDownList = ({closeToggleSlide,dropDownArray}) => {

    let menuListRendarView = null;
    menuListRendarView = dropDownArray?.map((item)=>(
        <li className='text-white px-4 py-2' key={item.id} onClick={closeToggleSlide}>
            <NavLink
                to={item.to}>
                {item.title}
            </NavLink>
        </li>
    ))

  return menuListRendarView;
}

export default DropDownList