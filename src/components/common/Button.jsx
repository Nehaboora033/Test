import React from 'react'

const Button = ({ className = '', children }) => {
  return (
    <button className={`${className} rounded-[30px] purple shadowpurple py-[12px] px-[29px] font-semibold text-base text-white cursor-pointer hover:scale-105 transition-all duration-150`}>
      {children}
    </button>
  )
}

export default Button