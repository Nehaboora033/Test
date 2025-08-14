import React from 'react'

const Box = ({ className = '', children }) => {
    return (
        <div className={`${className} flex items-center justify-center`}>
            {children}
        </div>
    )
}

export default Box