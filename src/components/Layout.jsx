import React from 'react'
import HeroSection from './HeroSection'
import Footer from './Footer'
import ProductViewSection from './ProductViewSection'

function Layout() {
  return (
      <div >
        <HeroSection/>
        <ProductViewSection/>
        
        <Footer/>
    </div>
  )
}

export default Layout