import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import Button from './common/Button'
import img from '../assets/webp/easyaiimg.webp'
import looking from '../assets/webp/lookingimg.webp'


const Easyai = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 mb-[140px]  '>
      <div className='max-w-[1137px] rounded-2xl shadowblack py-[55px] sm:pl-[56px] sm:pr-[37px] px-[30px] border-[2px] border-[#F6F5F4] '>
        <div className='flex justify-between lg:gap-4 gap-[33px] lg:flex-row flex-col'>
          <div className='lg:max-w-[471px] w-full relative'>
            <img src={looking} alt="img" className='sm:absolute top-[-205px] left-0 sm:block hidden ' />
            <SubHeading className='mb-[18px] lg:text-start text-center'>Odkryj RentEasy.AI</SubHeading>
            <SubHeading className=' lg:max-w-[437px] w-full leading-[120%] mb-[14px] !text-[20px] text-center lg:text-start'>Jesteśmy Twoim zespołem ds. operacji cyfrowych, pracującym dla Ciebie 24/7.</SubHeading>
            <Description className={'text-[#494B63] lg:text-start text-center'}>RentEasy.AI to pierwszy w Polsce system CRM stworzony od podstaw specjalnie dla firm zarządzających nieruchomościami. Automatyzujemy codzienne operacje, ograniczamy chaos i pomagamy rozwijać działalność bez konieczności zatrudniania dodatkowych pracowników. </Description>
            <Description className={'mt-3 text-[#494B63] mb-[35px] lg:text-start text-center'}>Nie jesteśmy kolejnym ładnym panelem do ewidencji mieszkań. Jesteśmy cyfrowym zespołem operacyjnym, który pracuje dla Ciebie 24/7.</Description>
            <div className='max-lg:flex justify-center'><Button className={' shadowpurple  max-sm:w-[225px]'}>Sprawdź nas!</Button></div>
          </div>
          <div className='lg:max-w-[515px] w-full flex justify-center '>
            <img src={img} alt="img" className='rounded-[15px] object-cover overflow-hidden block ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Easyai