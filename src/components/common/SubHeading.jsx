import React from 'react'

const SubHeading = ({ className='',Children }) => {
    return (
        <div className={`${className} font-bold text-[48px]`}>

            {Children}
        </div>
    )
}

export default SubHeading