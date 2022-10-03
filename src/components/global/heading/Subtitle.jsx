import React from 'react'

const SubTitle = ({
    title="",
    color="text-gray-900",
    darkColor="",
    m="",
    p="",
    fontSize="lg:text-2xl md:text-xl text-lg",
    fontWeight="font-bold",
    lineHeight="",
    customClass=""
}) => {
  return (
        <h4 className={`${customClass} ${lineHeight} ${fontWeight} ${color} ${darkColor} ${m} ${p} ${fontSize} m-0 break-words`}>{title}</h4>
  )
}

export default SubTitle