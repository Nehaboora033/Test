import React from 'react'

const Heading = ({ className, children }) => {
    return (
        <div className={`${className} font-bold md:text-[64px] min-[500px]:text-[50px] text-[35px] text-[#1B1E3C] text-center leading-[130%]`}>
            {children}
        </div>
    )
}

export default Heading