import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from 'Components/Header/Header'
// const inter = Inter({ subsets: ['latin'] })
import HeroSection from 'Components/HeroSection/HeroSection'
import DropDown from 'Components/DropDown/DropDown';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import DatePickers from 'Components/DatePicker/DatePickers';
import EndDate from 'Components/DatePicker/EndDate';
import Inform from 'Components/Modal/Modal';
import Detail from 'Components/Details/Details';
import Footer from 'Components/Footer/Footer';
import PostSection from 'Components/PostSection/PostSection';
import Guide from 'Components/Guide/Guide';
import Location from 'Components/Location/Location';
import Benefits from 'Components/Benefits/Benefits';
import Customer from 'Components/Customers/Customer';
import Detail2 from 'Components/Details/Details2';
import Detail3 from 'Components/Details/Details3';
import FinalComponent from 'Components/FinalComponent/FinalComponent'
import RoomDetails from '@/pages/RoomDetails'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <NextUIProvider>
        <div style={{ display: 'flex', justifyContent: 'space-evenly',position:'absolute',top:'27em',left:'28em'}}>
          <DropDown />
          <DatePickers />
          <EndDate />
          <Inform />
        </div>

      </NextUIProvider>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <Detail />
      <Detail2 />
      <Detail3 />
      </div>
      <FinalComponent />
      <FinalComponent />
      <FinalComponent />
      <Customer />
      <Benefits />
      <Location />
      <Guide />
      <PostSection />
      <Footer />
    </>
  )
}
