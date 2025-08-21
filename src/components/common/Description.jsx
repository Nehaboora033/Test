import React from 'react'

const Description = ({ className , children}) => {
  return (
    <h4 className={`${className} font-normal text-base leading-[140%]`}>
      {children}
    </h4>
  )
}

export default Description