import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import About from './About';
import Feed from "../Feed";
import CollegeMeet from "./CollegeMeet"
import Gallery from "../Gallery"
import ActivityCard from '../profile/ActivityCard';
export default function ProfileTabs() {
  return (
    <div className='flex items-center'>
      <Tabs className='flex items-center justify-center'>
  <TabList className='flex justify-around'>
    <Tab>Timeline</Tab>
    <Tab>About</Tab>
    <Tab>Friends</Tab>
    <Tab>Photos</Tab>
  </TabList>

  <TabPanels className='flex items-center justify-center'>
    <TabPanel>
    <main className=" flex space-x-2 pr-1">
          <About/>
          <Feed />
          <div className=' items-center space-y-2'>
          <CollegeMeet/>
          <Gallery/>
          <ActivityCard/>
          </div>
        </main>
    </TabPanel>
    <TabPanel>
      <p>about</p>
    </TabPanel>
    <TabPanel>
      <p>friends</p>
    </TabPanel>
    <TabPanel>
      <p>photos</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}
