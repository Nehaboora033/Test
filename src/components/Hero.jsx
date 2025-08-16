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
import { Typewriter } from "react-simple-typewriter";



const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}


const Hero = () => {

  const isAbove520 = useMediaQuery('(min-width: 520px)')

  return (
    <div className='max-w-[1390px] px-3 mx-auto '>
      <div className='max-w-[1366px] rounded-[30px] px-2  sm:px-4 pt-[77px] bglightpurple pb-[20px] sm:mb-[298px] mb-[140px] relative'>
        <img src={dots} alt="dots" className='absolute right-[16px] top-[28px] min-[1050px]:block hidden' />
        <div className='flex justify-center mb-[18px]'>
          <div className='border border-[#5E13F6] rounded-[30px] bg-[#E4D7FF] text-[#5E13F6] py-[11px] px-[16px] sm:text-[16px] text-[14px]'>Twój zespół cyfrowy dostępny 24/7.</div>
        </div>
        {/* typewriter useEffect */}

        <Heading className="text-center lg:max-w-[850px] w-full mx-auto mb-[15px]">
          Zautomatyzuj zarządzanie nieruchomościami{' '}
          <span className="min-[520px]:bg-[#E4D7FF] rounded-xl">
            {isAbove520 ? (
              <Typewriter
                words={['dzięki AI.']}
                typeSpeed={100}
                cursor
                cursorStyle={<span style={{ color: '#7366FE' }}>|</span>}
              />
            ) : (
              'dzięki AI.'
            )}
          </span>
        </Heading>

        <Description className={'text-[#474963] text-center max-w-[807px] w-full mx-auto mb-[15.5px]'}>Pierwszy w Polsce system CRM oparty na   sztucznej inteligencji, stworzony specjalnie dla firm zarządzających
          <div>nieruchomościami.</div>
          Zautomatyzuj swoje działania, wyeliminuj chaos i skaluj działalność — bez zatrudniania dodatkowych pracowników.</Description>
        <div className='flex gap-[26px] justify-center mb-[53px] sm:flex-row flex-col items-center'>
          <Button className='purple py-[12.5px] px-[29px] shadowpurple whitespace-nowrap w-fit'>Jesteśmy również na YouTube.</Button>
          <Button className='purple py-[12.5px] px-[29px] shadowpurple whitespace-nowrap w-fit'>Zobacz Zoe w akcji</Button>
        </div>

        {/* swiper */}
        <Swiper
          slidesPerView={5}
          spaceBetween={44}
          modules={[Navigation, Autoplay]}
          loop={true}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          centeredSlides={true}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 16 },
            520: { slidesPerView: 2.2, spaceBetween: 20 },
            768: { slidesPerView: 3.2, spaceBetween: 24 },
            1024: { slidesPerView: 4.2, spaceBetween: 32 },
            1280: { slidesPerView: 5, spaceBetween: 44 },
          }}
        >
          {Heroswiper_Data.map((item, index) => (
            <SwiperSlide key={index} >
              <div className='card  rounded-2xl h-[261px] cursor-pointer bg-white max-w-[231px] w-full overflow-hidden relative'>
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