import React from 'react'

const H5Title = ({
    title="",
    color="text-black dark:text-white",
    darkColor="",
    m="",
    p="",
    fontSize="text-2xl",
    fontWeight="font-bold",
    lineHeight=""
}) => {
  return (
        <h5 className={`${lineHeight} ${fontWeight} ${color} ${darkColor} ${m} ${p} ${fontSize} m-0 break-words`}>{title}</h5>
  )
}

export default H5Title