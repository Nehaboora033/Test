import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import looking from "../assets/webp/lookingimg.webp"
import timeline1 from '../assets/png/timeline1.png'
import timeline2 from '../assets/png/timeline2.png'
import { Jaksvg1, Jaksvg2, Jaksvg3 } from '../utils/icons'
import { Jak_Data } from '../utils/helper'
import jakimg1 from '../assets/png/jakimg1.png'
import jakimg2 from '../assets/png/jakimg2.png'
import jakimg3 from '../assets/png/jakimg3.png'

const Jak = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 pb-[450px]'>
      <div className='max-w-[1140px] rounded-2xl shadowblack py-[62px] px-[60px] relative border-[2px] border-[#F6F5F4]'>
        <img src={looking} alt="img" className='pointer-events-none absolute left-[40%] top-[-151px]' />
        <SubHeading className='text-center mb-[18px]'>Jak Zacząć?</SubHeading>
        <Description className={'text-[#4D4F4E] max-w-[450px] w-full text-center mx-auto mb-[69px]'}>Chcesz uprościć zarządzanie swoją nieruchomością? Wykonaj trzy proste kroki:</Description>

        {/* timeline */}
        {/* <div className='relative'>
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
        </div> */}


        <div className="relative max-w-[1200px] mx-auto px-4 before:content-[''] hidden min-[1070px]:block before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-ml-[3px]">
          <img
            className="absolute min-[1140px]:left-[43%] z-10 left-[47%]"
            src={jakimg1}
            alt="roadmap-img-1"
          />
          <img
            className="absolute left-[49.2%] top-[11%] hidden min-[1140px]:block"
            src={timeline1}
            alt="line1"
          />
          <div className="w-1 bg-black absolute left-[50.5%] top-[1%] block min-[1140px]:hidden h-[350px] min-[768px]:h-[259px] max-[900px]:left-[52%]"></div>
          <img
            className="absolute left-[47%] min-[1140px]:left-[51.8%] top-[38%]"
            src={jakimg2}
            alt="roadmap-img-2"
          />
          <img
            className="absolute right-[47.9%] top-[47%] hidden min-[1140px]:block"
            src={timeline2}
            alt="line2"
          />
          <img
            className="absolute min-[1140px]:left-[43%] left-[47%] min-[1140px]:top-[73.6%] top-[76.6%]"
            src={jakimg3}
            alt="roadmap-img-3"
          />

          {Jak_Data.map((item, index) => (
            <div
              key={index}
              className={`relative w-1/2 ${index % 2 === 1
                ? "left-1/2 min-[1024px]:left-[44%] min-[1140px]:left-[51%] max-[1139px]:top-[21px] !pl-0 md:!pl-[90px] lg:!pl-[119px]"
                : "lg:pl-[95px] md:left-0 max-lg:!max-w-[292px]"
                }`}
            >
              <div className={`max-w-[373px] ${item.alignment}`}>
                <h2
                  className={`text-xl font-bold font-lato pb-[6px] text-dark-black ${index === 1 ? "pt-[21px]" : ""
                    } ${index === 0 || index === 2 ? "pr-[21px]" : ""}`}
                >
                  {item.title}
                </h2>

                <p className=" leading-[140%] max-w-[353px] text-dark-black opacity-70 capitalize">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>


        <div className="block min-[1070px]:hidden">
          <div className="flex flex-wrap justify-center gap-[49px] sm:gap-[80px]">
            {Jak_Data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col max-w-[212px] items-center text-center "
              >
                <img
                  className="w-[54px] h-[54px]"
                  src={
                    index === 0
                      ? jakimg1
                      : index === 1
                        ? jakimg2
                        : jakimg3
                  }
                  alt={`roadmap-img-${index + 1}`}
                />
                <p className="font-bold text-xl leading-120 pt-[13px] font-lato text-dark-black">
                  {" "}
                  {item.title}{" "}
                </p>
                <p className="text-dark-black opacity-70 leading-[134%]  pt-[6px]">
                  {" "}
                  {item.description}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>

  )
}

export default Jak