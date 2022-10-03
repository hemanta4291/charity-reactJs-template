import React from 'react'

const ButtonContained = ({
    children= {},
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
    <button className={`${borderColor+" "+border+" " +duration+" "+transition+" "+customClass+" "+m + " " + letterSpacing+ " " + color + " " + bgColor + " " + " " + ptb + 
    " " + plr + " " + round + " " + fontSize + " " + fontWeight }`}>{children}</button>
  )
}

export default ButtonContained