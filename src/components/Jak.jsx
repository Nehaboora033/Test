import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import timeline1 from '../assets/png/timeline1.png'
import timeline2 from '../assets/png/timeline2.png'
import { Jaksvg1, Jaksvg2, Jaksvg3 } from '../utils/icons'

const Jak = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 pb-[111px]'>
      <div className='max-w-[1140px] rounded-2xl shadowblack py-[62px] px-[60px] border-[2px] border-[#F6F5F4]'>
        <SubHeading className='text-center mb-[18px]'>Jak Zacząć?</SubHeading>
        <Description className={'text-[#4D4F4E] max-w-[450px] w-full text-center mx-auto mb-[69px]'}>Chcesz uprościć zarządzanie swoją nieruchomością? Wykonaj trzy proste kroki:</Description>

        {/* timeline */}
        <div className='relative'>
          <div className='flex items-center justify-center purple size-[73px] rounded-[50%] '>
            <Jaksvg1 />
          </div>
          <img src={timeline1} alt="img" />
          <div className='flex items-center justify-center purple size-[73px] rounded-[50%] '>
            <Jaksvg2 />
          </div>
          <img src={timeline2} alt="img" />
        </div>
        <div className='flex items-center justify-center purple size-[73px] rounded-[50%] '>
          <Jaksvg3 />
        </div>
      </div>
    </div>

  )
}

export default Jak