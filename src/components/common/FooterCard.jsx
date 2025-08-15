import React from 'react'
import SubHeading from './SubHeading'
import Button from './Button'

const FooterCard = () => {
    return (
        <div className={`max-w-[1388px] translate-y-[20%] px-3 mx-auto `}>
            <div className='max-w-[1366px] rounded-[15px] purple py-[60px] px-[181px] flex items-center flex-col'>
                <SubHeading className='text-white max-w-[1002px] w-full text-center mb-[51px]'>Zrób pierwszy krok w kierunku bezstresowego zarządzania nieruchomościami</SubHeading>
                <Button className='border border-white '>Zarejestruj się</Button>
            </div>
        </div>
    )
}

export default FooterCard