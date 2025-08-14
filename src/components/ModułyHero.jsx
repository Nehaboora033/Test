import React from 'react'
import dots from '../assets/webp/dots.webp'
import Heading from './common/Heading'
import circles from '../assets/webp/circles.webp'


const ModułyHero = () => {
  return (
    <div className='max-w-[1390px] px-3 mx-auto'>
      <div className='max-w-[1366px] rounded-[30px]  px-4 pt-[77px] bglightpurple pb-[33px] mb-[400px] relative'>
        <img src={dots} alt="dots" className='absolute right-[16px] top-[28px]' />

        {/* purple box */}
        <div className='flex justify-center mb-[18px]'>
          <div className='border border-[#5E13F6] rounded-[30px] font-bold bg-[#E4D7FF] text-[#5E13F6] py-[11px] px-[16px]'>Inteligentna. Niezawodna. Wytrwała.</div>
        </div>
        <Heading className='mb-[39px]'>7 modułów do pełnej obsługi</Heading>
        <img src={circles} alt="img" className='mx-auto' />


      </div>
    </div>
  )
}

export default ModułyHero