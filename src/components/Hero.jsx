import React from 'react'
import backgroundImage from '../assets/webp/bgheroimage .webp'
import Button from './common/Button'
import Description from './common/Description'
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/navigation'


const Hero = () => {
  return (
    <div className='max-w-[1390px] px-3 mx-auto mt-[26px]'>
      <div className='max-w-[1366px] rounded-[30px] bglightpurple pt-[77px] pb-[20px] mb-[298px]' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='flex justify-center mb-[18px]'><Button className='border border-[#5E13F6] bg-[#E4D7FF] !text-[#5E13F6] py-[11px] px-[12px]'>Twój zespół cyfrowy dostępny 24/7.</Button></div>
        <h1 className='text-[#1B1E3C] font-bold text-center text-[64px] max-w-[807px] w-full mx-auto mb-[15px]'>Zautomatyzuj zarządzanie nieruchomościami dzięki AI.</h1>
        <Description className={'text-[#474963] text-center max-w-[807px] w-full mx-auto mb-[15.5px]'}>Pierwszy w Polsce system CRM oparty na   sztucznej inteligencji, stworzony specjalnie dla firm zarządzających
          <div>nieruchomościami.</div>
          Zautomatyzuj swoje działania, wyeliminuj chaos i skaluj działalność — bez zatrudniania dodatkowych pracowników.</Description>
        <div className='flex gap-[26px] justify-center mb-[53px]'>
          <Button className='purple py-[12.5px] px-[29px] shadowpurple  '>Jesteśmy również na YouTube.</Button>
          <Button className='purple py-[12.5px] px-[29px] shadowpurple '>Zobacz Zoe w akcji</Button>
        </div>

      </div>
    </div>
  )
}

export default Hero