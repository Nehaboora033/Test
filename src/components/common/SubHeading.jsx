import React from 'react'

const SubHeading = ({ className='',children }) => {
    return (
        <div className={`${className} font-bold text-[48px]`}>
           {children}
        </div>
    )
}

export default SubHeading