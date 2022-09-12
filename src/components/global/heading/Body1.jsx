import React from 'react'

const Body1 = ({
    children={},
    color="text-white",
    darkColor="",
    m="",
    p="",
    fontSize="text-base",
    fontWeight="font-normal",
    lineHeight="leading-7"
}) => {
  return (
        <p className={`${lineHeight} ${fontWeight} ${color} ${darkColor} ${m} ${p} ${fontSize} m-0 break-words`}>{children}</p>
  )
}

export default Body1