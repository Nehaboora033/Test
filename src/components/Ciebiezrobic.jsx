import React from 'react'
import SubHeading from './common/SubHeading'
import { Ciebie_Data, CieBie_Box_Color } from '../utils/helper'
import Description from './common/Description'

const Ciebiezrobic = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 sm:mb-[164px] mb-[120px] '>
      <div className='max-w-[1140px] bglightpurple rounded-2xl sm:px-[26px] px-[17px] sm:py-[58px] py-[48px] border-[2px] border-[#F6F5F4] '>
        <SubHeading className='text-center max-[375px]:text-[38px] mb-[40px]'>Co możemy dla Ciebie zrobić?</SubHeading>
        <div className='grid sm:grid-cols-2 grid-cols-1 md:gap-[31px] gap-[20px]'>
          {Ciebie_Data.map((item, index) => (
            <div className='flex items-center flex-col sm:bg-white rounded-[15px] md:p-[22px] sm:p-4 ' key={index}>
              <div
                className={`size-[64px] flex items-center justify-center rounded-2xl mb-[16px]`}
                style={{ backgroundColor: CieBie_Box_Color[index] }}
              >
                <item.svg />
              </div>
              <SubHeading className='!text-[20px] text-center mb-[6px] text-[#000302]'>{item.title} </SubHeading>
              <Description className={'text-[#4D4F4E] cabin text-center max-w-[450px] w-full'} >{item.description} </Description>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ciebiezrobic