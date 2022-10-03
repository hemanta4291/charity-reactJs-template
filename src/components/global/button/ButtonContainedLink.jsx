import React from 'react'
import { Link } from 'react-router-dom'

const ButtonContainedLink = ({
    children={},
    to="#",
    transition='transition-all',
    duration='duration-0.5',
    color= "text-white hover:text-primary",
    border="border-2 ",
    borderColor="border-primary ",
    bgColor = "bg-primary hover:bg-transparent",
    ptb="py-2",
    plr= "px-6",
    round ="rounded-3xl",
    fontSize= "text-base",
    fontWeight = "font-bold",
    letterSpacing = "tracking-0.5",
    m = "",
    customClass=""
}) => {
  return (
    <Link to={to} className={`${borderColor+" "+border+" "+duration+" "+customClass+" "+m + " " + letterSpacing+ " " + color + " " + bgColor + " " + transition + " " + ptb + 
    " " + plr + " " + round + " " + fontSize + " " + fontWeight }`}>{children}</Link>
  )
}

export default ButtonContainedLink