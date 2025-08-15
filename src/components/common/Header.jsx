import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavLinks } from '../../utils/helper'
import Description from '../common/Description'
import Button from './Button'
import flag from '../../assets/png/Poland.png'
import logo from '../../assets/svg/logo.svg'
import zoelogo from '../../assets/png/Zoe LOGO.png'
import Hamburger from 'hamburger-react'


const Header = () => {
  const [state, setIsOpen] = useState(null);

  return (
    <>
      <div className='max-w-[1164px] mx-auto px-3 pt-[28px] pb-[26px]'>
        <div className='max-w-[1140px] '>
          <div className='flex items-center justify-between'>
            <Link to={'/'}>
              <img src={logo} alt="logo" className='w-[183px] h-[54px] object-cover' />
            </Link>
            <div className='flex items-center gap-[32px]'>
              <nav className='flex item-center gap-[32px] capitalize'>
                {NavLinks.map((item, index) => (
                  <NavLink to={item.link} className={({ isActive }) =>
                    `text-base font-normal transition-colors duration-150 whitespace-nowrap ${isActive
                      ? 'text-[#5E13F6] underline underline-offset-4 '
                      : 'text-black hover:text-[#5E13F6]'
                    }`
                  } key={index}>
                    {item.name}
                  </NavLink>
                ))}
              </nav>
              {/* image */}
              <Link to={'/'}><img src={zoelogo} alt="image" className='cursor-pointer' /></Link>
            </div>

            {/* polish flag and button */}
            <div className='flex gap-[15px] items-center'>
              <div className='flex  items-center gap-[15px]'>
                <Description className={'text-[#1B1E3C]'}>Polski</Description>
                <img src={flag} alt="img" className='cursor-pointer' />
              </div>
              <Button className='py-[9px] px-[18px] text-white   '>Zarejestruj</Button>

              {/* three lines */}
              <div className='z-[11] lg:hidden'>
                <button
                  aria-label="Toggle navigation menu"
                  className='z-[11] lg:hidden'
                  onClick={() => setIsOpen(state === 'show' ? null : 'show')}
                >
                  <Hamburger
                    toggled={state == 'show'}
                    toggle={() => setIsOpen(state === 'show' ? null : 'show')}

                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header