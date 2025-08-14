import React from 'react'

const SubHeading = ({ className='',children }) => {
    return (
        <div className={`${className} font-bold text-[48px] text-[#1B1E3C]`}>
           {children}
        </div>
    )
}

export default SubHeading