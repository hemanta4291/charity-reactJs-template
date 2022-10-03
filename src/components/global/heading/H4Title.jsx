import React from 'react'

const H4Title = ({
    title="",
    color="text-tertiary",
    darkColor="",
    m="",
    p="",
    fontSize="text-2xl sm:text-3xl",
    fontWeight="font-bold",
    lineHeight=""
}) => {
  return (
        <h4 className={`${lineHeight} ${fontWeight} ${color} ${darkColor} ${m} ${p} ${fontSize} m-0 break-words`}>{title}</h4>
  )
}

export default H4Title