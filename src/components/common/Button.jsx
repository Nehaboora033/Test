import React from 'react'

const Button = ({ className = '', children }) => {
  return (
    <button className={`${className} rounded-[30px] bg-[#5E13F6] shadowpurple py-[12px] px-[29px] font-semibold text-base text-white cursor-pointer hover:text-[#5E13F6] hover:bg-transparent hover:outline Hover:outline-[#5E13F6] transition-all duration-150`}>
      {children}
    </button>
  )
}

export default Button