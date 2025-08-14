import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import Button from './common/Button'
import img from '../assets/webp/easyaiimg.webp'
import looking from '../assets/webp/lookingimg.webp'


const Easyai = () => {
  return (
    <div className='max-w-[1364px] mx-auto px-3  '>
      <div className='max-w-[1137px] rounded-2xl mx-auto shadowblack py-[55px] pl-[56px] pr-[37px] '>

        <div className='flex justify-between'>
          <div className='max-w-[471px] w-full relative'>
            <img src={looking} alt="img" className='absolute top-[-205px] left-0' />
            <SubHeading className='mb-[18px]'>Odkryj RentEasy.AI</SubHeading>
            <SubHeading className=' max-w-[437px] w-full leading-[120%] mb-[14px] !text-[20px]'>Jesteśmy Twoim zespołem ds. operacji cyfrowych, pracującym dla Ciebie 24/7.</SubHeading>
            <Description className={'text-[#494B63]'}>RentEasy.AI to pierwszy w Polsce system CRM stworzony od podstaw specjalnie dla firm zarządzających nieruchomościami. Automatyzujemy codzienne operacje, ograniczamy chaos i pomagamy rozwijać działalność bez konieczności zatrudniania dodatkowych pracowników. </Description>

            <Description className={'mt-3 text-[#494B63] mb-[35px]'}>Nie jesteśmy kolejnym ładnym panelem do ewidencji mieszkań. Jesteśmy cyfrowym zespołem operacyjnym, który pracuje dla Ciebie 24/7.</Description>

            <Button className={'purple shadowpurple'}>Sprawdź nas!</Button>
          </div>
          <div className='max-w-[515px] w-full '>
            <img src={img} alt="img" className='rounded-[15px] object-cover overflow-hidden' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Easyai