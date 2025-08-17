import React, { useState } from 'react'
import SubHeading from './common/SubHeading'
import { Dla_Data } from '../utils/helper'
import Description from './common/Description'
import { Dla_Box_Color, Dla_Box_Shadow, Dla_Card_Shadow } from '../utils/helper'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const DlaKogo = () => {
  const [tabIndex, setTabIndex] = useState(() => {
    const savedIndex = localStorage.getItem('dlaKogoTab')
    return savedIndex !== null ? Number(savedIndex) : 0
  })

  const handleTabChange = (index) => {
    setTabIndex(index)
    localStorage.setItem('dlaKogoTab', index)
  }

  return (
    <div className='max-w-[1164px] w-full mx-auto px-3 mb-[140px]'>
      <div className='max-w-[1140px] '>
        <SubHeading className='text-center mb-[44px]'>Dla kogo?</SubHeading>

        <Tabs selectedIndex={tabIndex} onSelect={handleTabChange}>
          <div className='flex justify-center'>
            <TabList className="flex bg-white max-w-[452px] mb-[77px] w-full border border-[#5E13F6] rounded-full gap-1 justify-center items-center h-[73px]">
              <Tab
                className="sm:py-[21.5px] sm:pl-[58.8px] w-full py-[25px] max-w-[226px] px-6 whitespace-nowrap sm:pr-[42px] rounded-[73px] sm:text-xl font-bold text-[#1B1E3C] text-[16px] cursor-pointer border border-transparent focus:outline-none focus:ring-0 transition-colors duration-300"
                selectedClassName="purple text-white shadow-sm shadowinner"
              >
                Firm, Które...
              </Tab>
              <Tab
                className="sm:px-6 pl-2 py-[25px] sm:py-[21.5px] w-full !pr-0 rounded-[73px] whitespace-nowrap text-[16px] sm:text-xl font-bold text-[#1B1E3C] cursor-pointer border border-transparent focus:outline-none focus:ring-0 transition-colors duration-300"
                selectedClassName="purple text-white border border-purple-blue shadow-sm shadowinner"
              >
                Właścicieli, Którzy...
              </Tab>
            </TabList>
          </div>
          {/* cards data */}
          <TabPanel>
            <div className="grid min-[900px]:grid-cols-4 min-[730px]:grid-cols-3 min-[500px]:grid-cols-2  gap-4 ">
              {Dla_Data.map((item, index) => (
                <div
                  key={index}
                  className={`group max-w-[251px] card w-full sm:h-[258px] justify-center mx-auto rounded-[15px] flex flex-col items-center sm:p-[25px] cursor-pointer transition-all duration-300 ${Dla_Card_Shadow[index]}`}
                >
                  <div
                    className={`size-[74px] rounded-2xl mb-[24px] flex items-center justify-center transition-all duration-300 ${Dla_Box_Shadow[index]}`}
                    style={{ backgroundColor: Dla_Box_Color[index] }}
                  >
                    <item.svg />
                  </div>
                  <div className="max-w-[190px] w-full">
                    <h4 className="font-bold text-lg text-center text-[#020403] mb-[11px] whitespace-nowrap">
                      {item.title}
                    </h4>
                    <Description className="text-center text-[#5F6277]">
                      {item.description}
                    </Description>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <SubHeading className='!text-[20px] text-center p-3'>Obsługują aparthotele</SubHeading>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default DlaKogo