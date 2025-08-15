import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavLinks } from '../../utils/helper'
import Description from '../common/Description'
import Button from './Button'
import flag from '../../assets/png/Poland.png'
import logo from '../../assets/svg/logo.svg'
import Hamburger from 'hamburger-react'

const Header = () => {
  const [state, setIsOpen] = useState(null);
  const closeNav = () => setIsOpen(null);

  return (
    <>
      <div className='max-w-[1164px] mx-auto px-3 pt-[20px] pb-[20px]'>
        <div className='max-w-[1140px]'>
          <div className='flex items-center justify-between'>

            {/* Logo */}
            <Link to={'/'}>
              <img src={logo} alt="logo" className='w-[183px] h-[54px] object-cover' />
            </Link>

            {/* Nav Links */}
            <div className='flex items-center gap-[32px]'>
              <nav
                className={`flex item-center gap-[32px] capitalize
                max-[1160px]:flex-col max-[1160px]:items-center z-[10] max-[1160px]:justify-center max-[1160px]:bg-white transition-[right] max-[1160px]:fixed max-[1160px]:top-0 duration-800 ease-in-out max-sm:w-full max-[1160px]:w-[75%] max-[1160px]:h-full
                ${state === 'show' ? 'right-0' : 'max-[1160px]:right-[-100%]'}`}
              >
                {NavLinks.map((item, index) => (
                  <NavLink
                    to={item.link}
                    onClick={closeNav} 
                    className={({ isActive }) =>
                      `text-base font-normal transition-colors duration-150 whitespace-nowrap ${isActive
                        ? 'text-[#5E13F6] underline underline-offset-4 '
                        : 'text-black hover:text-[#5E13F6]'
                      }`
                    }
                    key={index}
                  >
                    {item.name}
                    {item.withImage && (
                      <img
                        className="pointer-events-none w-[67.6px] h-[26px]"
                        src={item.image}
                        alt="Zoe"
                      />
                    )}
                  </NavLink>
                ))}

                {/* Mobile only Polish flag & button inside nav */}
                <div className='flex flex-col gap-[15px] items-center min-[551px]:hidden'>
                  <div className='flex flex-col items-center gap-[8px]'>
                    <Description className={'text-[#1B1E3C]'}>Polski</Description>
                    <img src={flag} alt="img" className='cursor-pointer' />
                  </div>
                  <Button className='py-[9px] px-[18px] text-white'>Zarejestruj</Button>
                </div>
              </nav>
            </div>
            
            {/* Desktop Polish flag & button */}
            <div className='flex gap-[15px]'>
              <div className='flex gap-[15px] items-center max-[550px]:hidden'>
                <div className='flex items-center gap-[15px]'>
                  <Description className={'text-[#1B1E3C]'}>Polski</Description>
                  <img src={flag} alt="img" className='cursor-pointer' />
                </div>
                <Button className='py-[9px] px-[18px] text-white'>Zarejestruj</Button>
              </div>

              {/* Hamburger Menu */}
              <div className='z-[11] min-[1160px]:hidden'>
                <button
                  aria-label="Toggle navigation menu"
                  className='z-[11] min-[1160px]:hidden'
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