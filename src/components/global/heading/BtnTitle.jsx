import React from 'react'

const BtnTitle = ({
    title="",
    color="text-on-tertiary-container",
    darkColor="",
    m="",
    p="",
    fontSize="text-lg sm:text-base",
    fontWeight="font-bold",
    lineHeight="",
    customClass=" "
}) => {
  return (
        <h4 className={`${customClass+" "+lineHeight+" "+fontWeight+" "+color+" "+darkColor+" "+m+" "+p+" "+fontSize} m-0 break-words`}>{title}</h4>
  )
}

export default BtnTitle