import React from 'react'
import Easyai from '../components/Easyai'
import Hero from '../components/Hero'
import DlaKogo from '../components/DlaKogo'
import Ciebiezrobic from '../components/Ciebiezrobic'
import Dlaczegowarto from '../components/Dlaczegowarto'
import Jak from '../components/Jak'
import looking from '../assets/webp/lookingimg.webp'

const Strona = () => {
    return (
        <>
            {/* <Hero /> */}
            {/* <Easyai /> */}
            <DlaKogo />
            <img src={looking} alt="img" className='mx-auto' />
            <Ciebiezrobic />
            <Dlaczegowarto />
            <img src={looking} alt="img" className='mx-auto' />
            <Jak />
        </>
    )
}

export default Strona