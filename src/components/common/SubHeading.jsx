import React from 'react'

const SubHeading = ({ className='',children }) => {
    return (
        <h2 className={`${className} font-bold sm:text-[48px] text-[40px] text-[#1B1E3C] leading-[120%]`}>
           {children}
        </h2>
    )
}

export default SubHeading