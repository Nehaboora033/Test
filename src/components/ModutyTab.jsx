import React, { useEffect, useState } from 'react'
import { Dla_Box_Color, Dla_Box_Shadow, Dla_Card_Shadow, Moduty_Last_Part_Data, Moduty_Middle_Part_Data, Moduty_Tabs_Data } from '../utils/helper'
import SubHeading from './common/SubHeading'
import Description from './common/Description'
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
            <div className='max-w-[1140xpx] mb-[63px] '>
                <Tabs selectedIndex={selectedTab} onSelect={handleTabChange}>
                    <div className="flex gap-[24px] min-[1100px]:flex-row flex-col">
                        {/* LEFT SIDE - Tabs */}
                        <TabList className="!m-0 min-[1100px]:max-w-[267px] w-full  min-[1100px]:flex flex-col gap-[13px] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">

                            {Moduty_Tabs_Data.map((item, index) => (
                                <Tab
                                    key={index}
                                    className="rounded-[12px] flex items-center justify-center cursor-pointer shadowlightblack text-center text-[#1B1E3C] py-[14px] px-[15px] text-[20px] transition-colors duration-400 focus:outline-none focus:ring-0"
                                    selectedClassName="purple text-white">
                                    {item.name}
                                </Tab>
                            ))}

                        </TabList>

                        {/* RIGHT SIDE - Tab Panels */}
                        <div className="f lex-1 ">
                            <TabPanel>
                                {/* First part */}
                                <div className="min-[1100px]:max-w-[850px] w-full rounded-[12px] shadowlightblack py-[30px] px-[36px]">
                                    <SubHeading className="text-center mb-[11px] !text-[36px]">
                                        Moduł ofert z integracjami
                                    </SubHeading>
                                    <SubHeading className="text-center text-[#5E13F6] mb-[11px] !text-[24px]">
                                        Do czego służy?
                                    </SubHeading>
                                    <Description className="min-[1100px]:max-w-[777px] w-full text-center text-[#494B63] mb-[37px]">
                                        Ten moduł pozwala publikować oferty najmu bez pośredników i prowizji bezpośrednio z systemu RentEasy.AI. Dzięki integracjom z zewnętrznymi portalami i własną podstroną ofertową możesz prowadzić cały lejek rezerwacyjny samodzielnie.
                                    </Description>

                                    {/* Middle Part */}
                                    <SubHeading className="text-center text-[#1B1E3C] mb-[17px] !text-[24px]">
                                        Co konkretnie zawiera?
                                    </SubHeading>
                                    <div className="relative grid min-[500px]:grid-cols-2 min-[1100px]:w-[780px] gap-6 md:gap-y-[90px] md:gap-x-[199px] mb-[67px]">
                                        {Moduty_Middle_Part_Data.map((item, index) => (
                                            <div
                                                className="min-[1100px]:max-w-[249px] w-full flex flex-col items-center"
                                                key={index}
                                            >
                                                <div
                                                    className="size-[57px] rounded-[13px] flex items-center justify-center mb-[14px]"
                                                    style={{ backgroundColor: item.bg }}
                                                >
                                                    <Notes />
                                                </div>
                                                <Description className="cabin text-center leading-[134%] text-[#5F6277]">
                                                    {item.description}
                                                </Description>
                                            </div>
                                        ))}
                                        <img
                                            src={multicircle}
                                            alt="multicircle-img"
                                            className="absolute top-[20%] left-[39%] md:block hidden"
                                        />
                                    </div>

                                    {/* End Part */}
                                    <SubHeading className="text-center mb-[15px] !text-[32px]">
                                        Dla kogo?
                                    </SubHeading>
                                    <SubHeading className="text-center textpurple !text-[24px] mb-[37px]">
                                        Dla firm, które chcą:
                                    </SubHeading>
                                    <div className="sm:flex gap-[11px] grid min-[400px]:grid-cols-2 gird-cols-1 ">
                                        {Moduty_Last_Part_Data.map((item, index) => (
                                            <div
                                                className={`group min-[1100px]:max-w-[195px] w-full rounded-[10px] h-[188px] px-[5px] pt-[22px] flex flex-col items-center transition-all duration-300 cursor-pointer ${Dla_Card_Shadow[index]}`}
                                                key={index}
                                            >
                                                <div
                                                    className={`size-[53px] flex items-center justify-center rounded-[12px] mb-[17.5px] transition-all duration-300 ${Dla_Box_Shadow[index]}`}
                                                    style={{ backgroundColor: Dla_Box_Color[index] }}
                                                >
                                                    <item.svg />
                                                </div>
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
    )
}

export default ModutyTab