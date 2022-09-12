import React from 'react'

const ButtonContained = ({
    children= {},
    color= "text-white",
    bgColor = "bg-primary",
    hover="hover:bg-on-primary-container",
    ptb="py-2",
    plr= "px-6",
    round ="rounded-3xl",
    fontSize= "text-base",
    fontWeight = "font-bold",
    letterSpacing = "tracking-0.5"
}) => {
  return (
    <button className={`${letterSpacing+ " " + color + " " + bgColor + " " + hover + " " + ptb + 
    " " + plr + " " + round + " " + fontSize + " " + fontWeight }`}>{children}</button>
  )
}

export default ButtonContained