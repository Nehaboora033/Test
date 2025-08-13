import React from 'react'

const Button = ({ className='',Children }) => {
  return (
    <button className={`${className} rounded-[21px] font-semibold text-base`}>
      {Children}
    </button>
  )
}

export default Button