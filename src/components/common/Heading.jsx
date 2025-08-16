import React from 'react'

const Heading = ({ className, children }) => {
    return (
        <div className={`${className} font-bold md:text-[64px] sm:text-[40px] text-[34px] text-[#1B1E3C] text-center`}>
            {children}
        </div>
    )
}

export default Heading