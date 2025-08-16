import React from 'react'
import Easyai from '../components/Easyai'
import Hero from '../components/Hero'
import DlaKogo from '../components/DlaKogo'
import Ciebiezrobic from '../components/Ciebiezrobic'
import Dlaczegowarto from '../components/Dlaczegowarto'
import looking from '../assets/webp/lookingimg.webp'
import Jakzac from '../components/Jakzac'

const Strona = () => {
    return (
        <>
            <Hero />
            <img src={looking} alt="img" className='max-sm:mx-auto max-sm:block hidden' />
            <Easyai />
            <DlaKogo />
            <img src={looking} alt="img" className='mx-auto' />
            <Ciebiezrobic />
            <Dlaczegowarto />
            <img src={looking} alt="img" className='mx-auto' />
            <Jakzac />
        </>
    )
}

export default Strona