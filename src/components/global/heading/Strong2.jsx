import React from 'react'

const Strong2 = ({
    title="",
    color="text-gray-900 dark:text-white",
    darkColor="",
    m="",
    p="",
    fontSize="text-base",
    fontWeight="font-bold",
    lineHeight=""
}) => {
  return (
        <h5 className={`${lineHeight} ${fontWeight} ${color} ${darkColor} ${m} ${p} ${fontSize} m-0 break-words`}>{title}</h5>
  )
}

export default Strong2