import React from 'react'

const Body2 = ({
    children={},
    color="text-white",
    darkColor="",
    fontSize="text-base",
    fontWeight="font-normal",
    lineHeight="leading-6",
    customClass=""
}) => {
  return (
        <p className={`${customClass+" "+lineHeight+" "+fontWeight+" "+color+" "+darkColor+" "+fontSize} m-0 break-words`}>{children}</p>
  )
}

export default Body2