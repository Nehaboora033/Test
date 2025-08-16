import React, { useState } from 'react'
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
import dots from '../assets/webp/dots.webp'
import Heading from './common/Heading';
import { Typewriter } from "react-simple-typewriter";
import swipercircle from '../assets/webp/swipercircle.webp'
import logo from '../assets/svg/swiperLogo.svg'



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
  const isAbove520 = useMediaQuery('(min-width: 520px)');
  const [activeIndex, setActiveIndex] = useState(0)

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
          <Button className=' py-[12.5px] px-[29px] shadowpurple whitespace-nowrap w-fit'>Jesteśmy również na YouTube.</Button>
          <Button className=' py-[12.5px] px-[29px] shadowpurple whitespace-nowrap w-fit'>Zobacz Zoe w akcji</Button>
        </div>


        {/* swiper */}
        <Swiper
          slidesPerView={5}
          modules={[Navigation, Autoplay]}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: false,
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            520: {
              slidesPerView: 2.3,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 3.3,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 38,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 44,
            },
          }}
        >
          {Heroswiper_Data.map((item, index) => (
            <SwiperSlide key={index} >
              <div
                className={`card relative rounded-2xl cursor-pointer bg-white w-full overflow-hidden transition-all duration-300 ${activeIndex === index ? "h-[320px]" : "h-[261px]"
                  }`}
              >
                {activeIndex === index && (
                  <img src={logo} alt="logo" className='mx-auto mt-4' />
                )}
                {/* image */}
                {activeIndex === index ? (
                  <img
                    src={swipercircle}
                    alt="circle"
                    className="object-contain h-[146px] w-full transition-all duration-300"
                  />
                ) : (
                  <img
                    src={item.img}
                    alt="img"
                    className="object-cover h-[146px] w-full transition-all duration-300"
                  />
                )}
                {activeIndex === index ? (
                  <Description className='py-[27px] px-[16px] !text-[20px] font-semibold text-center text-[#1B1E3C]'>
                    {item.activeDescription ?? "Co mogę dla Ciebie zrobić?"}
                  </Description>
                ) : (
                  <Description className='py-[27px] px-[16px] !text-[12px] text-center text-[#494B63]'>
                    {item.description}
                  </Description>
                )}

                {activeIndex !== index && (
                  <div className="purple flex items-center justify-center size-[54px] rounded-[50%] absolute top-[44%] left-1/2 -translate-x-1/2 z-10">
                    <item.svg />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Hero