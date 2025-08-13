import React from 'react'

const Description = ({ className , children}) => {
  return (
    <div className={`${className} font-normal text-base`}>
      {children}
    </div>
  )
}

export default Description