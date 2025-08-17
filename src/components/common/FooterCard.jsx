import React from 'react'
import SubHeading from './SubHeading'
import Button from './Button'

const FooterCard = () => {
    return (
        <div className={`max-w-[1388px] min-[375px]:translate-y-[20%] translate-y-[10%] px-3 mx-auto `}>
            <div className='max-w-[1366px] rounded-[15px] purple md:py-[60px] px-[20px] pt-[40px] pb-[57px] flex items-center flex-col '>
                <SubHeading className='text-white max-w-[1002px] w-full text-center mb-[51px] sm:!text-[48px] !text-[30px]'>Zrób pierwszy krok w kierunku bezstresowego zarządzania nieruchomościami</SubHeading>
                <Button className='border border-white hover:bg-white transition-colors duration-200 '>Zarejestruj się</Button>
            </div>
        </div>
    )
}

export default FooterCard