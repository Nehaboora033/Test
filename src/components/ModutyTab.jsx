import React, { useEffect, useState } from 'react'
import { Dla_Box_Color, Dla_Box_Shadow, Dla_Card_Shadow, Moduty_Last_Part_Data, Moduty_Middle_Part_Data, Moduty_Tabs_Data } from '../utils/helper'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
import Box from './common/Box'
import { Notes } from '../utils/icons'
import multicircle from '../assets/webp/multicircles.webp'
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs'

const ModutyTab = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    useEffect(() => {
        const savedTab = localStorage.getItem("selectedModutyTab");
        if (savedTab !== null) {
            setSelectedTab(Number(savedTab));
        }
    }, []);
    const handleTabChange = (index) => {
        setSelectedTab(index);
        localStorage.setItem("selectedModutyTab", index);
    };
    return (
        <div className='max-w-[1164px] mx-auto px-3'>
            <div className='max-w-[1140xpx] '>
                <div className='flex gap-[24px]' >
                    <Tabs selectedIndex={selectedTab} onSelect={handleTabChange}>
                        <div className="flex gap-[24px]">
                            {/* LEFT SIDE - Tabs */}
                            <TabList className="!m-0 max-w-[267px] w-full flex flex-col gap-[13px]"> {/* Remove default react-tabs margins */}
                                
                                    {Moduty_Tabs_Data.map((item, index) => (
                                        <Tab
                                            key={index}
                                            className="rounded-[12px] cursor-pointer shadowlightblack text-center text-[#1B1E3C] py-[14px] px-[15px] text-[20px] transition-colors duration-400 focus:outline-none focus:ring-0"
                                            selectedClassName="purple text-white">
                                            {item.name}
                                        </Tab>
                                    ))}
                               
                            </TabList>

                            {/* RIGHT SIDE - Tab Panels */}
                            <div className="flex-1">
                                <TabPanel>
                                    {/* First Tab Content */}
                                    <div className="max-w-[850px] w-full rounded-[12px] shadowlightblack py-[30px] px-[36px]">
                                        <SubHeading className="text-center mb-[11px] !text-[36px]">
                                            Moduł ofert z integracjami
                                        </SubHeading>
                                        <SubHeading className="text-center text-[#5E13F6] mb-[11px] !text-[24px]">
                                            Do czego służy?
                                        </SubHeading>
                                        <Description className="max-w-[777px] w-full text-center text-[#494B63] mb-[37px]">
                                            Ten moduł pozwala publikować oferty najmu bez pośredników i prowizji bezpośrednio z systemu RentEasy.AI. Dzięki integracjom z zewnętrznymi portalami i własną podstroną ofertową możesz prowadzić cały lejek rezerwacyjny samodzielnie.
                                        </Description>
                                        <SubHeading className="text-center text-[#1B1E3C] mb-[17px] !text-[24px]">
                                            Co konkretnie zawiera?
                                        </SubHeading>

                                        {/* Middle Part */}
                                        <div className="relative grid grid-cols-2 w-[780px] gap-y-[90px] gap-x-[199px] mb-[67px]">
                                            {Moduty_Middle_Part_Data.map((item, index) => (
                                                <div
                                                    className="max-w-[249px] w-full flex flex-col items-center"
                                                    key={index}
                                                >
                                                    <Box
                                                        className="size-[57px] rounded-[13px] mb-[14px]"
                                                        style={{ backgroundColor: item.bg }}
                                                    >
                                                        <Notes />
                                                    </Box>
                                                    <Description className="cabin text-center leading-[134%] text-[#5F6277]">
                                                        {item.description}
                                                    </Description>
                                                </div>
                                            ))}
                                            <img
                                                src={multicircle}
                                                alt="multicircle-img"
                                                className="absolute top-[20%] left-[35%]"
                                            />
                                        </div>

                                        {/* End Part */}
                                        <SubHeading className="text-center mb-[15px] !text-[32px]">
                                            Dla kogo?
                                        </SubHeading>
                                        <SubHeading className="text-center textpurple !text-[24px] mb-[37px]">
                                            Dla firm, które chcą:
                                        </SubHeading>
                                        <div className="flex gap-[11px]">
                                            {Moduty_Last_Part_Data.map((item, index) => (
                                                <div
                                                    className={`group max-w-[195px] w-full rounded-[10px] h-[188px] px-[5px] pt-[22px] flex flex-col items-center transition-all duration-300 cursor-pointer ${Dla_Card_Shadow[index]}`}
                                                    key={index}
                                                >
                                                    <Box
                                                        className={`size-[53px] rounded-[12px] mb-[17.5px] transition-all duration-300 ${Dla_Box_Shadow[index]}`}
                                                        style={{ backgroundColor: Dla_Box_Color[index] }}
                                                    >
                                                        <item.svg />
                                                    </Box>
                                                    <Description className="text-[#4F4F4E] text-center !text-[11.6px]">
                                                        {item.description}
                                                    </Description>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <SubHeading >Moduł podstawowy</SubHeading>
                                </TabPanel>

                                <TabPanel>
                                    <SubHeading >Moduł Integracji z Google Workspace</SubHeading>
                                </TabPanel>

                                <TabPanel>
                                    <SubHeading >Moduł Bramki SMS</SubHeading>
                                </TabPanel>

                                <TabPanel>
                                    <SubHeading >Moduł płatności + umowy + klamki</SubHeading>
                                </TabPanel>

                                <TabPanel>
                                    <SubHeading >Moduł Task Manager</SubHeading>
                                </TabPanel>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default ModutyTab