import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import looking from "../assets/webp/lookingimg.webp"

const Jak = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 pb-[450px]'>
      <div className='max-w-[1140px] rounded-2xl shadowblack py-[62px] px-[60px] relative border-[2px] border-[#F6F5F4]'>
        <img src={looking} alt="img" className='pointer-events-none absolute left-[40%] top-[-151px]' />
        <SubHeading className='text-center mb-[18px]'>Jak Zacząć?</SubHeading>
        <Description className={'text-[#4D4F4E] max-w-[450px] w-full text-center mx-auto mb-[69px]'}>Chcesz uprościć zarządzanie swoją nieruchomością? Wykonaj trzy proste kroki:</Description>

      </div>
    </div>
  )
}

export default Jak