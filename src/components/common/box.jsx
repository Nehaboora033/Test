import React from 'react'

const box = ({ className = '', Children }) => {
    return (
        <div className={`${className} flex items-center justify-center`}>
            {Children}
        </div>
    )
}

export default box