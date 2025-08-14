import React from 'react'

const Heading = ({ className, children }) => {
    return (
        <div className={`${className} font-bold text-[64px] text-[#1B1E3C] text-center`}>
            {children}
        </div>
    )
}

export default Heading