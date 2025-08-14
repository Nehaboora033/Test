import React from 'react'
import logo from '../../assets/svg/footerlogo.svg'
import Description from './Description'
import { Footer_Links, Footer_Social_Links } from '../../utils/helper'
import { Link } from 'react-router-dom'
import SubHeading from './SubHeading'
import Button from './Button'


const Footer = () => {
  const currentYear = new Date();
  return (
    <div className='darkblue pt-[172px] relative'>
      <div className='flex max-w-[970px] w-full mx-auto px-3 pb-[49px] justify-between'>
        {/* footer logo section */}
        <div className='max-w-[260px] w-full'>
          <img src={logo} alt="logo" className='mb-[14px] cursor-pointer' />
          <Description className={'text-[#D1D2D8] mb-4'}>Zbudowane przez profesjonalistów, dla profesjonalistów</Description>
          <div>
            <div className='flex gap-[16px]'>
              {Footer_Social_Links.map((item, index) => (
                <Link to={item.link} className='border hover:scale-115 transition-all duration-300 ease-in  border-white cursor-pointer size-[40px] flex items-center justify-center rounded-[30px]' key={index}>
                  <item.svg />
                </Link>
              ))}
            </div>

          </div>
        </div>
        {/* links footer */}
        <div className="max-w-[444px] w-full">
          <div className="flex justify-between gap-8">
            {Footer_Links.map((item, index) => (
              <ul key={index} className="w-[195px]">
                <li className="text-white font-semibold text-[16px] mb-[21px]">
                  {item.title}
                </li>
                {item.link.map((linkItem, i) => (
                  <li key={i} className="flex items-start gap-3 mb-[16px]">

                    {linkItem.icon && (
                      <span className="w-6 h-6 flex-none">
                        <linkItem.icon className="w-full h-full text-white" />
                      </span>
                    )}
                    <Link
                      to={linkItem.href}
                      className="relative text-gray-300 hover:text-white text-base 
             after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
             after:h-[2px] after:w-0 after:bg-white 
             after:transition-all after:duration-500 
             hover:after:w-full"
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

      {/* card  */}
      <div className='max-w-[1390px] px-3 mx-auto'>
        <div className='max-w-[1366px] purple rounded-[15px] py-[60px] px-[182px] flex flex-col items-center absolute top-[-56%]
        '>
          <SubHeading className='text-white max-w-[1002px] w-full text-center mb-[51px]'>Zrób pierwszy krok w kierunku bezstresowego zarządzania nieruchomościami</SubHeading>
          <Button className='border border-white '>Zarejestruj się</Button>
        </div>
      </div>

      <div className='border-t border-white pt-[16px] pb-[13px] text-[]'>
        <Description className={'text-[#D1D2D8] text-center'}>© {currentYear.getFullYear()} RentEasy.AI — All rights reserved.</Description>
      </div>
    </div>
  )
}

export default Footer