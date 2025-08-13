import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavLinks } from '../../utils/helper'
import Description from '../common/Description'
import Button from './Button'
import flag from '../../assets/png/Poland.png'
import logo from '../../assets/png/Logo.png'
import zoelogo from '../../assets/png/Zoe LOGO.png'


const Header = () => {
  return (
    <>
      <div className='max-w-[1164px] mx-auto px-3'>
        <div className='max-w-[1140px] '>
          <div className='flex items-center justify-between'>
            <Link to={'/'}>
              <img src={logo} alt="logo" className='w-[183px] h-[54px] object-cover' />
            </Link>
            <div className='flex items-center gap-[32px]'>
              <nav className='flex item-center gap-[32px] capitalize'>
                {NavLinks.map((item, index) => (
                  <NavLink to={item.link} className={({ isActive }) =>
                    `text-base font-normal transition-colors duration-150 ${isActive
                      ? 'text-[#5E13F6] underline underline-offset-4 '
                      : 'text-black hover:text-[#5E13F6]'
                    }`
                  } key={index}>
                    {item.name}

                  </NavLink>
                ))}
              </nav>
              <Link to={'/'}><img src={zoelogo} alt="image" className='cursor-pointer' /></Link>
            </div>
            <div className='flex gap-[15px] items-center'>
              <div className='flex  items-center gap-[15px]'>
                <Description className={'textdarkblue'}>Polski</Description>
                <img src={flag} alt="img" />
              </div>
              <Button className='py-[9px] px-[18px] text-white purple purpleshadow '>Zarejestruj</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header