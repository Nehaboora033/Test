import React from 'react'

const Heading = ({ className, children }) => {
    return (
        <div className={`${className} font-bold sm:text-[64px] text-[40px] text-[#1B1E3C] text-center`}>
            {children}
        </div>
    )
}

export default Heading