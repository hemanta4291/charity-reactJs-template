import React from 'react'

const Body1 = ({
    children={},
    color="text-white",
    darkColor="",
    m="",
    p="",
    fontSize="text-lg",
    fontWeight="font-normal",
    lineHeight="leading-7",
    customClass=""
}) => {
  return (
        <p className={`${customClass+" "+lineHeight+" "+fontWeight+" "+color+" "+darkColor+" "+fontSize+" "+m+" "+p} m-0 break-words`}>{children}</p>
  )
}

export default Body1