import React from 'react'
import { Link } from 'react-router-dom'

const ALink = ({
    children={},
    to="#",
    color="text-white",
    darkColor="dark:text-black",
    fontSize="text-base",
    fontWeight="font-normal",
    lineHeight="leading-7",
    customClass=""
}) => {
  return (
        <Link to={to} className={`${customClass+" "+lineHeight+" "+fontWeight+" "+color+" "+darkColor+" "+fontSize} m-0 break-words`}>{children}</Link>
  )
}

export default ALink