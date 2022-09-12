import React from 'react'

const PreHeader = ({
    title="",
    color="text-primary",
    darkColor="",
    m="",
    p="",
    fontSize="text-sm",
    fontWeight="font-bold",
    lineHeight=""
}) => {
  return (
        <h4 className={`${lineHeight} ${fontWeight} ${color} ${darkColor} ${m} ${p} ${fontSize} m-0 break-words`}>{title}</h4>
  )
}

export default PreHeader