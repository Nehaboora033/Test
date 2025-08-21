import React from 'react'
import logo from '../../assets/svg/footerlogo.svg'
import Description from './Description'
import { Footer_Links, Footer_Social_Links } from '../../utils/helper'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date();
  return (
    <footer className='darkblue sm:pt-[169px] pt-[141px] '>
      <div className="container max-w-[1140px] mx-auto px-3">
        <div className='flex flex-wrap  sm:pb-[59px] pb-[78px] justify-between gap-y-6'>
          {/* footer logo section */}
          <div className='w-full lg:w-1/3'>
            <Link to={'/'} className='flex min-[500px]:justify-start justify-center'>
              <img src={logo} alt="logo" className='sm:mb-[14px] mb-[12px] cursor-pointer max-[500px]:h-[60px]' />
            </Link>
            <Description className={'text-[#D1D2D8] min-[500px]:text-start text-center sn:mb-4 mb-[22px]'}>Zbudowane przez profesjonalistów, dla profesjonalistów</Description>
            <div className=''>
              <div className='flex gap-4 min-[500px]:justify-start justify-center'>
                {Footer_Social_Links.map((item, index) => (
                  <Link to={item.link} className='border hover:scale-115 transition-all duration-150 ease-in  border-white cursor-pointer size-[40px] flex items-center justify-center rounded-[30px]' key={index}>
                    <item.svg />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* links footer */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-between flex-wrap">
              {Footer_Links.map((item, index) => (
                <ul key={index} className="w-1/2">
                  <li className="text-white font-semibold text-[16px] mb-[21px]">
                    {item.title}
                  </li>
                  {item.link.map((linkItem, i) => (
                    <li key={i} className="flex items-start sm:gap-3 gap-2 mb-[16px]">

                      {linkItem.icon && (
                        <span className="w-6 h-6 flex-none">
                          <linkItem.icon className="w-full h-full text-white" />
                        </span>
                      )}
                      <Link
                        to={linkItem.href}
                        className="text-gray-300 hover:text-white text-base transition-colors duration-100 ease-linear"
                      >
                        {linkItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='sm:border-t border-white pt-[16px] pb-[13px] text-[]'>
        <Description className={'text-[#D1D2D8] text-center sm:text-[16px] text-[14px]'}>© {currentYear.getFullYear()} RentEasy.AI — All rights reserved.</Description>
      </div>
    </footer>
  )
}

export default Footer