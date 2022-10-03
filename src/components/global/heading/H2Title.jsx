import React from 'react'

const H2Title = ({
    title="",
    maxWidth="auto",
    color="text-gray-900",
    darkColor="",
    m="",
    p="",
    fontSize="text-xl lg:text-5xl md:text-3xl",
    fontWeight="font-bold",
    lineHeight="",
    customClass=""
}) => {
  return (
        <h4 className={`${customClass+ " " +maxWidth+" "+lineHeight+" "+fontWeight+" "+color+" "+darkColor+" "+m+" "+p+" "+fontSize} m-0 break-words`}>{title}</h4>
  )
}

export default H2Title