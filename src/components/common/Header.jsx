import React from 'react'
import { Link } from 'react-router-dom'
import { NavLinks } from '../../utils/helper'

const Header = () => {
  return (
    <>
      <div className='max-w-[1140px] px-3 mx-auto'>

       logo
       <nav>
        {NavLinks.map((item,index)=>(
          <div className='' key={index}>

          </div>
        ))}
       </nav>
      </div>
    </>
  )
}

export default Header