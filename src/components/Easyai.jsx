import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import Button from './common/Button'
import img from '../assets/webp/easyaiimg.webp'
import looking from '../assets/webp/lookingimg.webp'
import profile from '../assets/png/profile.png'


const Easyai = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 sm:mb-[140px] mb-[145px] '>
      <div className='max-w-[1137px] rounded-2xl shadowblack pt-[41px] pb-[33px] sm:py-[55px] sm:pl-[56px] sm:pr-[37px] px-[11px]  border-[2px] border-[#F6F5F4] '>
        <div className='flex justify-between lg:gap-4 gap-[33px] lg:flex-row flex-col'>
          <div className='lg:max-w-[471px] w-full relative'>
            <img src={looking} alt="img" className='sm:absolute top-[-205px] left-0 sm:block hidden ' />
            <SubHeading className='sm:mb-[18px] mb-[11px] lg:text-start text-center'>Odkryj RentEasy.AI</SubHeading>
            <SubHeading className=' lg:max-w-[437px] !text-[16px] w-full leading-[120%] mb-[6px] sm:mb-[14px] sm:!text-[20px] text-center lg:text-start'>Jesteśmy Twoim zespołem ds. operacji cyfrowych, pracującym dla Ciebie 24/7.</SubHeading>
            <Description className={'text-[#494B63]  lg:text-start text-center'}>RentEasy.AI to pierwszy w Polsce system CRM stworzony od podstaw specjalnie dla firm zarządzających nieruchomościami. Automatyzujemy codzienne operacje, ograniczamy chaos i pomagamy rozwijać działalność bez konieczności zatrudniania dodatkowych pracowników. </Description>
            <Description className={'mt-3 text-[#494B63] sm:mb-[35px] mb-[21px] lg:text-start text-center'}>Nie jesteśmy kolejnym ładnym panelem do ewidencji mieszkań. Jesteśmy cyfrowym zespołem operacyjnym, który pracuje dla Ciebie 24/7.</Description>
            {/* button that shows only on the sm */}
            <div className='max-lg:flex justify-center'><Button className={'shadowpurple max-sm:hidden block  max-sm:w-[225px]'}>Sprawdź nas!</Button></div>
            {/* button that shows only on the max-sm */}
            <div className='max-lg:flex justify-center mb-[33px]'><Button className={'shadowpurple whitespace-nowrap sm:hidden block  !py-[12px] !px-[29px] max-sm:w-[225px]'}>
              We are also on Youtube</Button></div>

            {/* that data onlt show on the max-sm */}
            <div className='flex flex-col items-center sm:hidden'>
              <img src={profile} alt="profile" className='mb-[18px]' />
              <Description className={'max-w-[250px] text-[#494B63] text-center mb-[14px]'}>
                Since adding Zoe to our workflow, we’ve cut down on emails, missed deadlines, and manual tasks. It’s like having a reliable team member who never sleeps."
              </Description>
              <p className='font-medium text-[16px] text-[#7E42F8] whitespace-nowrap'>— Property Manager, RentEasy.AI User</p>
            </div>
          </div>
          <div className='lg:max-w-[515px] w-full flex justify-center '>
            <img src={img} alt="img" className='rounded-[15px] object-cover min-h-[477px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Easyai