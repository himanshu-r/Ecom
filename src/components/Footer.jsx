import React from 'react'
import Logo from "../assests/logo.png"
import PaymentImg from "../assests/payment.png"
import LogoSecond from "../assests/logo-second.png"
 
function Footer() {
  return (
    <div className='bg-[#1e1e1e] text-white'>
        <div className='p-[45px]'>
        <img src={Logo} alt="site-logo" />
        </div>
        <div className='flex'>
            <div className='w-[20%] ml-[45px]'> 
                <ul className='list-none text-[14px] leading-[29px]'>
                <li>Home </li>
                <li>All Products </li>
                <li>Featured Products </li>
                <li>Contact </li>
                <li>About Us </li>
                </ul>
                
            </div>
            <div className='w-[50%] mr-[100px]'>
                <p>
                We are a registered E-Commerce seller and we support a variety of Local and International payment modes
                </p>
                <img src={PaymentImg} alt="payment-image" />
            </div>
            <div className='w-[30%] flex items-center flex-col'> 
                <p className='mb-[45px]'>
                Website protected by
                </p>
                <img src={LogoSecond} alt="second-logo" />
            </div>

        </div>
    </div>
  )
}

export default Footer