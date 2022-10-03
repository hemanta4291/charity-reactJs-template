import React,{useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Menu from './Menu'
import ButtonContained from '../../components/global/button/ButtonContained'
import Icons from '../../components/global/Icons'
import DropDownList from './DropDownList'
import whiteLogo from '../../assets/images/white-logo.png'
import './style.css'


const Header = () => {
  const [menuData,setMenuData] = useState([...Menu])
  const [mobileMenu,setMobileMenu] = useState(false)
  const [stkyClass,setStkyClass] = useState(false)
  const [mobileMenuActive,setMobileMenuActive] = useState(false)

  const mobileMenuHandle = () => {
    setMobileMenu(true)
  }
  const mobileMenuHandleClose = () => {
    setMobileMenu(false)
  }

  const scrollHandleScroll=()=>{
    console.log(window.scrollY )
    if (window.scrollY > 400) {
        setStkyClass(false)
    }
    else{
        setStkyClass(true)
    }
}



// for mobile menu click handler
const dropDownHandler = () => {
  setMobileMenuActive(!mobileMenuActive)
}

const closeToggleSlide = () => {
  setMobileMenu(false)
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const upToTopWindow = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}


  useEffect(() => {
    window.addEventListener('scroll', scrollHandleScroll);
    scrollHandleScroll()
  },[]);

  let renderVeiwMenu = null;
  renderVeiwMenu = menuData.map((item)=>(
    <li className={`${mobileMenuActive ? "customActiveMenu" : ''} customNavMenu text-white relative`} key={item.id} onClick={ item.droupMenu ? (()=>dropDownHandler(item.id)): closeToggleSlide}   >
      <NavLink
          to={item.to}
          className={({ isActive }) => (isActive ? 'active' : 'inactive') + ' customNavMenu_a transition-all duration-0.5 hover:text-primary px-4 py-3 lg:py-6 h-full customNavMenuA flex lg:items-center gap-2'}>
            {item.title}
            {
              item.droupMenu && 
              <span className='mt-1.5 lg:mt-0'>{Icons.downWihteArrowIcon}</span>
            }
            {
              item.droupMenu && 
              <ul className='customNavMenu_droupdown lg:absolute left-0 top-72px bg-secondary py-2 w-52'>
                <DropDownList closeToggleSlide={closeToggleSlide} dropDownArray={item.droupMenuItemList} />
              </ul>
            }
      </NavLink>
  </li>
  ))
  return (
    <div className={`${stkyClass ? 'bg-on-primary-opacity-0.8' : ' bg-black'} header w-full fixed z-20 `}>
        <div className='container  mx-auto px-4'>
          {
            stkyClass && 
         
          <div className='z-10 sm:flex flex-row border-b border-gray-700 py-2 hidden' >
            <div className='basis-40% flex items-center gap-2'>
                <Link to="#">{Icons.fbColorIcon}</Link>
                <Link to="#">{Icons.twitterColorIcon}</Link>
                <Link to="#">{Icons.linkedinColorIcon}</Link>
                <Link to="#">{Icons.youtubeColorIcon}</Link>
            </div>
            <ul className='basis-60% flex justify-end gap-8'>
              <li className='text-white flex items-center gap-1'>
                {Icons.emialIcon}
                +1 516 231 1313
                </li>
              <li className='text-white flex items-center gap-2'>
                {Icons.callIcon}
                contact@devdesign.studio 
                </li>
              
            </ul>
           
          </div>
           }
          <nav className='z-10 flex flex-row items-center justify-between py-4 lg:py-0'>
            <div className='basis-20%'>
              <Link to="/"><img src={whiteLogo} alt='white logo' onClick={upToTopWindow} /></Link>
            </div>
            <div className='text-white block lg:hidden' onClick={mobileMenuHandle}>
              <span>{Icons.mobileMenuIcon}</span>
            </div>
            <ul className={`${mobileMenu ? "mobile_menu_show" : ''} mobile_menu basis-80% flex justify-end`}>
              
              {renderVeiwMenu}

              <li className='pl-6 flex-shrink-0 text-white flex items-center'>
                <ButtonContained borderColor="border-primary hover:border-primary-container" bgColor="bg-primary hover:bg-primary-container" color='text-white hover:text-on-primary-container' hover='hover:bg-primary-container'>Donate Now</ButtonContained>
              </li>

               {/* for mobile menu */}
              <div className='lg:hidden fixed top-2 right-2 z-5 flex items-center justify-center bg-on-primary-container text-white h-8 w-8 rounded-r-50' onClick={mobileMenuHandleClose} >
                X
              </div>
            </ul>

           
            
          </nav>
        </div>
    </div>
  )
}

export default Header