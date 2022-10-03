import React from 'react'

const Strong1 = ({
    title="",
    color="text-gray-900 dark:text-white",
    darkColor="",
    m="",
    p="",
    fontSize="text-md",
    fontWeight="font-bold",
    lineHeight=""
}) => {
  return (
        <h5 className={`${lineHeight} ${fontWeight} ${color} ${darkColor} ${m} ${p} ${fontSize} m-0 break-words`}>{title}</h5>
  )
}

export default Strong1