import React from 'react'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import { Jaksvg1, Jaksvg2, Jaksvg3 } from '../utils/icons'
import timeline1 from '../assets/png/timeline1.png'
import timeline2 from '../assets/png/timeline2.png'
import { Jak_Data } from '../utils/helper'
import Box from '../components/common/Box'


const Jakzac = () => {
    return (
        <div className='max-w-[1164px] mx-auto px-3 pb-[111px]'>
            <div className='max-w-[1140px] rounded-2xl shadowblack py-[62px] sm:px-[60px] p-[40px] border-[2px]  border-[#F6F5F4]  h- [620px]'>
                <SubHeading className='text-center mb-[18px]'>Jak Zacząć?</SubHeading>
                <Description className={'text-[#4D4F4E] max-w-[450px] w-full text-center mx-auto mb-[40px] sm:mb-[69px]'}>Chcesz uprościć zarządzanie swoją nieruchomością? Wykonaj trzy proste kroki:</Description>

                <div className='lg:block hidden'>
                    {/* timeline shown after lg */}
                    <div
                        className="timeline max-w-[1007px]  mx-auto">
                        <div className="w-1/2  md:pr-[105px] relative left-0 m ax-md:left-[5%] mb-10">
                            <SubHeading
                                className="!text-[20px] text-[#000302] md:text-right mb-[6px] ">
                                Skonfiguruj Swój Pakiet
                            </SubHeading>
                            <Description
                                className="leading-[134%] capitalize text-[#4D4F4E] md:text-right ">
                                Porozmawiaj z Zoe i pozwól jej wybrać funkcje, które odpowiadają potrzebom Twojej firmy.
                            </Description>
                            <div
                                className="absolute size-[73px] rounded-full bg-[#5E13F6] flex items-center justify-center top-0 right-[6px] z-1 " >
                                <img src={timeline1} alt="img" className='absolute top-[60%] -right-[90%] -z-1 min-[1120px]:block hidden ' />
                                <Jaksvg1 />
                            </div>
                        </div>
                        <div
                            className="w-1/2  md:pl-[113px] relative left-[50%] m ax-md:left-[5%] mb-5">
                            <SubHeading
                                className="!text-[20px] text-[#000302] mb-[6px] ">
                                Uzyskaj Spersonalizowane Rekomendacje
                            </SubHeading>
                            <Description
                                className="leading-[134%] capitalize text-[#4D4F4E] ">
                                Otrzymaj natychmiastową, dostosowaną do Twoich potrzeb propozycję modułu — wraz z przejrzystą wyceną.
                            </Description>
                            <div
                                className="absolute size-[73px] rounded-full bg-[#5E13F6] flex items-center justify-center top-0 left-[6px]">
                                <img src={timeline2} alt="img" className='absolute top-[60%] -left-[92%] -z-1 min-[1120px]:block hidden ' />
                                <Jaksvg2 />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2  md:pr-[105px] relative left-0 m ax-md:left-[5%]">
                        <div className="">
                            <SubHeading
                                className="!text-[20px] text-[#000302] md:text-right mb-[6px] ">
                                Przetestuj lub Skontaktuj się z nami
                            </SubHeading>
                            <Description
                                className="leading-[134%] capitalize text-[#4D4F4E] max-w-[315px] ml-auto text-right ">
                                Załóż konto, lub umów się na bezpłatną konsultację z naszym zespołem.
                            </Description>
                        </div>
                        <div
                            className="absolute size-[73px] rounded-full bg-[#5E13F6] flex items-center justify-center top-0 right-[6px] " >
                            <Jaksvg3 />
                        </div>
                    </div>
                </div>

                {/* tiemline before lg */}
                <div className='lg:hidden block'>
                    <div className='grid  md:grid-cols-2 min-[910px]:flex  gap-6'>
                        {Jak_Data.map((item, index) => (
                            <div className='' key={index}>
                                <Box className='rounded-[50%] mx-auto purple sm:size-[75px] size-[54px] mb-4'>
                                    <item.svg className={'max-sm:size-[30px]'}/>
                                </Box>
                                <SubHeading className='sm:!text-[20px] !text-[16px] text-center mb-4'>{item.title} </SubHeading>
                                <Description className={'text-center'}>{item.description} </Description>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Jakzac