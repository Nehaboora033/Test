import React from 'react'
import img from '../assets/webp/aiimg.webp'
import SubHeading from './common/SubHeading'
import { Warto_Data, Warto_Box_Color } from '../utils/helper'
import Box from './common/box'
import Description from './common/Description'


const Dlaczegowarto = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3'>
      <div className='max-w-[1140px] '>
        <div className='flex justify-between '>
          <div className='max-w-[600px] w-full'>
            <SubHeading className='mb-[37px]'>Dlaczego warto skorzystać z RentEasy.AI?</SubHeading>
            {Warto_Data.map((item, index) => (
              <div className='mb-[16px] flex item-center gap-[25px]' key={index}>
                <Box
                  className={'size-[64px] rounded-2xl shrink-0 '}
                  style={{ backgroundColor: Warto_Box_Color[index] }}
                >
                  <item.svg />
                </Box>
                <div>
                  <SubHeading className='!text-[20px] text-[#000302] '>{item.title} </SubHeading>
                  <Description className={'text-[#4D4F4E]'}>{item.description} </Description>
                </div>
              </div>
            ))}
          </div>
          <div className='max-w-[457px] w-full'>
            <img src={img} alt="img" className='rounded-2xl object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dlaczegowarto