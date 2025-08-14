import React from 'react'
import SubHeading from './common/SubHeading'
import { Ciebie_Data, CieBie_Box_Color } from '../utils/helper'
import Box from './common/box'
import Description from './common/Description'
import looking from '../assets/webp/lookingimg.webp'



const Ciebiezrobic = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3]'>
      <div className='max-w-[1140px] bglightpurple rounded-2xl px-[26px] py-[58px] relative'>
        <img src={looking} alt="img" className='absolute top-[-15.6%] left-[40%]'/>

        <SubHeading className='text-center mb-[40px]'>Co możemy dla Ciebie zrobić?</SubHeading>
        <div className='grid grid-cols-2 gap-[31px]'>
          {Ciebie_Data.map((item, index) => (
            <div className='flex items-center flex-col bg-white rounded-[15px] p-[22px] ' key={index}>
              <Box
                className={`size-[64px] rounded-2xl mb-[16px]`}
                style={{ backgroundColor: CieBie_Box_Color[index] }}
              >
                <item.svg />
              </Box>
              <SubHeading className='!text-[20px] mb-[6px] text-[#000302]'>{item.title} </SubHeading>
              <Description className={'text-[#4D4F4E] text-center max-w-[450px] w-full'} >{item.description} </Description>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ciebiezrobic