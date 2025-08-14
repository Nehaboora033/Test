import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const MyTab = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
            </TabList>

            <TabPanel>
                <p>This is content for Tab 1</p>
            </TabPanel>
            <TabPanel>
                <p>This is content for Tab 2</p>
            </TabPanel>
            <TabPanel>
                <p>This is content for Tab 3</p>
            </TabPanel>
        </Tabs>
    )
}

export default MyTab