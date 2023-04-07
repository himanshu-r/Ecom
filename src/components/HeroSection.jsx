import React from 'react'
import { Header } from './Header'
// import HeroImg from '../assests/hero.jpg'

export default function HeroSection() {
  return (
    <div className='hero-section-container'>
        <Header/>
        <div className='text-white mx-[145px] my-[120px]'>
            <h1 className='font-black text-[64px] leading-[87px]'>Latest Styles</h1>
            <h3 className='font-extrabold text-[20px]	'>At Yesterday’s Prices</h3>
            <button className='font-bold text-[16px] mt-[18px] rounded-[12px] bg-[#CA4022] p-[16px]'>BROWSE ALL STYLES</button>

        </div>

    </div>
  )
}
