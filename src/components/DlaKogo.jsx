import React from 'react'
import SubHeading from './common/SubHeading'
import Button from './common/Button'
import { Dla_Data } from '../utils/helper'
import Box from './common/box'
import Description from './common/Description'
import { Dla_Box_Color, Dla_Box_Shadow, Dla_Card_Shadow } from '../utils/helper'

const DlaKogo = () => {
  return (
    <div className='max-w-[1164px] w-full mx-auto px-3 mb-[290px]'>
      <div className='max-w-[1140px] '>
        <SubHeading className='text-center mb-[44px]'>Dla kogo?</SubHeading>
        <div className='border border-[#5E13F6] rounded-[73px] max-w-[452px] w-full mx-auto mb-[77px]'>
          <Button className='!font-bold !text-[20px]  purple !rounded-[73px] !py-[24px] !px-[49px] shadowinner'>Firm, które...</Button>
        </div>
        {/* cards data */}
        <div className="flex gap-[45px]">
          {Dla_Data.map((item, index) => (
            <div
              key={index}
              className={`group max-w-[251px] card w-full h-[258px] rounded-[15px] flex flex-col items-center p-[25px] cursor-pointer transition-all duration-300 ${Dla_Card_Shadow[index]}`}
            >
              <Box
                className={`size-[74px] rounded-2xl mb-[24px] flex items-center justify-center transition-all duration-300 ${Dla_Box_Shadow[index]}`}
                style={{ backgroundColor: Dla_Box_Color[index] }}
              >
                <item.svg />
              </Box>
              <div className="max-w-[190px] w-full">
                <h4 className="font-bold text-lg text-center text-[#020403] mb-[11px] whitespace-nowrap">
                  {item.title}
                </h4>
                <Description className="text-center text-[#5F6277]">
                  {item.description}
                </Description>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DlaKogo