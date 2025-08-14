import React from 'react'
import Button from './common/Button'
import Description from './common/Description'
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Heroswiper_Data } from '../utils/helper'
import Box from './common/box'
import dots from '../assets/webp/dots.webp'
import Heading from './common/Heading';


const Hero = () => {
  return (
    <div className='max-w-[1390px] px-3 mx-auto '>
      <div className='max-w-[1366px] rounded-[30px]  px-4 pt-[77px] bglightpurple pb-[20px] mb-[298px] relative'>
        <img src={dots} alt="dots" className='absolute right-[16px] top-[28px]' />
        <div className='flex justify-center mb-[18px]'>
          <div className='border border-[#5E13F6] rounded-[30px] bg-[#E4D7FF] text-[#5E13F6] py-[11px] px-[16px]'>Twój zespół cyfrowy dostępny 24/7.</div>
        </div>
        <Heading className='text-center max-w-[807px] w-full mx-auto mb-[15px]'>Zautomatyzuj zarządzanie nieruchomościami dzięki AI.</Heading>
        <Description className={'text-[#474963] text-center max-w-[807px] w-full mx-auto mb-[15.5px]'}>Pierwszy w Polsce system CRM oparty na   sztucznej inteligencji, stworzony specjalnie dla firm zarządzających
          <div>nieruchomościami.</div>
          Zautomatyzuj swoje działania, wyeliminuj chaos i skaluj działalność — bez zatrudniania dodatkowych pracowników.</Description>
        <div className='flex gap-[26px] justify-center mb-[53px]'>
          <Button className='purple py-[12.5px] px-[29px] shadowpurple'>Jesteśmy również na YouTube.</Button>
          <Button className='purple py-[12.5px] px-[29px] shadowpurple'>Zobacz Zoe w akcji</Button>
        </div>
        {/* swiper */}
        <Swiper
          slidesPerView={5}
          spaceBetween={44}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className='overflow-hidden'
        >
          {Heroswiper_Data.map((item, index) => (
            <SwiperSlide key={index} >
              <div className='rounded-2xl h-[261px] cursor-pointer bg-white max-w-[231px] w-full overflow-hidden relative'>
                <img src={item.img} alt="img" className='object-cover' />
                <Description className={'py-[27px] px-[16px] !text-[12px] text-center text-[#494B63]'}>
                  {item.description}
                </Description>
                <Box className='purple size-[54px] rounded-[50%] absolute top-[45%] left-[36%]'>
                  <item.svg />
                </Box>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Hero