import React from 'react'

const Description = ({ className , children}) => {
  return (
    <div className={`${className} font-normal text-base leading-[140%]`}>
      {children}
    </div>
  )
}

export default Description