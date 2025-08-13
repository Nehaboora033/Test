import React from 'react'

const Description = ({ className = '', Children }) => {
  return (
    <div className={`${className} font-normal text-base`}>
      {Children}
    </div>
  )
}

export default Description