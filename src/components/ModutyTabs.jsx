import React from 'react'
import { Moduty_Tabs_Data } from '../utils/helper'

const ModutyTabs = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3'>
      <div className='max-w-[1140xpx] '>
        <div className='flex' >
          
          <div className='max-w-[267px] w-full'>
            {Moduty_Tabs_Data.map((item, index) => (
              <div className='text-[#1B1E3C] font-bold text-[20px]' key={index}>
                {item.name}
              </div>
            ))}

          </div>
          <div className='max-w-[850px] w-full'>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ModutyTabs