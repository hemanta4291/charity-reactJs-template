import React from 'react'
import { NavLink } from 'react-router-dom'
import ButtonContained from '../../components/global/button/ButtonContained'

const Header = () => {
  return (
    <div className='header w-full fixed bg-on-primary-opacity-0.8'>
        <div className='container  mx-auto px-4 bg-on-primary-opacity-0.8'>
          <div className='flex flex-row border-b border-gray-700 py-2' >
            <div className='basis-40% text-white'>
              Logon
            </div>
            <ul className='basis-60% flex justify-end'>
              <li className='text-white'>+1 516 231 1313</li>
              <li className='text-white'>contact@devdesign.studio </li>
              
            </ul>
           
          </div>
          <nav className='flex flex-row '>
            <div className='basis-40% py-5'>
              Logon
            </div>
            <ul className='basis-60% flex justify-end'>
              <li className='text-white p-5'>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                      Home
                </NavLink>
              </li>
              <li className='text-white p-5'>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                      contact
                </NavLink>
              </li>
              <li className='text-white p-5'>
               <NavLink
                    to="/blog"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                      Blog
                </NavLink>
              </li>
              <li className='text-white flex items-center'>
                <ButtonContained>Donate Now</ButtonContained>
              </li>
             
            </ul>
            
          </nav>
        </div>
    </div>
  )
}

export default Header