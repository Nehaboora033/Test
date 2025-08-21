import React from 'react'

const Heading = ({ className, children }) => {
    return (
        <h1 className={`${className} font-bold  lg:text-[64px] md:text-[60px]   min-[500px]:text-[50px] text-[33px] text-[#1B1E3C] text-center leading-[130%] `}>
            {children}
        </h1>
    )
}

export default Heading