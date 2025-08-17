import React from 'react'

const SubHeading = ({ className='',children }) => {
    return (
        <div className={`${className} font-bold sm:text-[48px] text-[40px] text-[#1B1E3C] leading-[120%]`}>
           {children}
        </div>
    )
}

export default SubHeading