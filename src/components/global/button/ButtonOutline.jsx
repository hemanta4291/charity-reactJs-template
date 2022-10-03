import React from 'react'

const ButtonOutline = ({
    children= {},
    color= "text-tertiary hover:text-gray-800",
    transition='transition-all',
    duration='duration-0.5',
    bgColor = "transparent hover:bg-tertiary",
    border="border-2",
    borderColor="text-tertiary hover:border-tertiary",
    ptb="py-2",
    plr= "px-6",
    round ="rounded-3xl",
    fontSize= "text-base",
    fontWeight = "font-bold",
    letterSpacing = "tracking-0.5"
}) => {
  return (
    <button className={`${transition+" "+ duration+" " +borderColor+" "+border + " " + letterSpacing+ " " + color + " " + bgColor + " " + ptb + 
    " " + plr + " " + round + " " + fontSize + " " + fontWeight }`}>{children}</button>
  )
}

export default ButtonOutline