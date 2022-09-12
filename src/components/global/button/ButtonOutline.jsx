import React from 'react'

const ButtonOutline = ({
    children= {},
    color= "text-tertiary",
    // borderColor = "border-tertiary ",
    bgColor = "transparent",
    border="border-2",
    bgHover="hover:bg-tertiary",
    textHover="hover:text-white",
    ptb="py-2",
    plr= "px-6",
    round ="rounded-3xl",
    fontSize= "text-base",
    fontWeight = "font-bold",
    letterSpacing = "tracking-0.5"
}) => {
  return (
    <button className={`${textHover + " " + border + " " + letterSpacing+ " " + color + " " + bgColor + " " + bgHover + " " + ptb + 
    " " + plr + " " + round + " " + fontSize + " " + fontWeight }`}>{children}</button>
  )
}

export default ButtonOutline