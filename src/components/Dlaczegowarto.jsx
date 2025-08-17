import React from 'react'
import img from '../assets/webp/aiimg.webp'
import SubHeading from './common/SubHeading'
import { Warto_Data, Warto_Box_Color } from '../utils/helper'
import Description from './common/Description'

const Dlaczegowarto = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 sm:mb-[191px] mb-[120px]'>
      <div className='max-w-[1140px] '>
        <div className='flex justify-between lg:flex-row flex-col lg:gap-4 gap-[40px]'>
          <div className='lg:max-w-[600px] w-full'>
            <SubHeading className='mb-[37px] lg:text-start text-center'>Dlaczego warto skorzystać z RentEasy.AI?</SubHeading>
            {Warto_Data.map((item, index) => (
              <div className='mb-[16px] flex item-center gap-[25px]' key={index}>
                <div
                  className={'size-[64px] flex items-center justify-center rounded-2xl shrink-0 '}
                  style={{ backgroundColor: Warto_Box_Color[index] }}
                >
                  <item.svg />
                </div>
                <div>
                  <SubHeading className='!text-[20px] text-[#000302] '>{item.title} </SubHeading>
                  <Description className={'text-[#4D4F4E]'}>{item.description} </Description>
                </div>
              </div>
            ))}
          </div>
          <div className='lg:max-w-[457px] w-full flex justify-center '>
            <img src={img} alt="img" className='rounded-2xl object-cover '  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dlaczegowarto