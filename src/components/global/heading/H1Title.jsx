import React from 'react'

const H1Title = ({
    title="",
    color="text-white",
    darkColor="dark:text-black",
    m="",
    p="",
    fontSize="lg:text-7xl md:text-5xl sm:text-3xl text-2xl",
    fontWeight="font-bold",
    lineHeight="lg:leading-21"
}) => {
  return (
        <h1 className={`${lineHeight} ${fontWeight} ${color} ${darkColor} ${m} ${p} ${fontSize} m-0 break-words`}>{title}</h1>
  )
}

export default H1Title