import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/BannerComponent/Banner'
import Footer from './Component/Footer/Footer'
import Slider from './Component/Slider/Slider'
import Pricing from './Component/Pricing/Pricing'
import Clients from './Component/Clients/Clients'
import BannerClient from './Component/BannerCompelet/BannerClient'



function Home() {
  return (
    <div>

      <Navbar />
      <Banner />
      <BannerClient />
    <Clients />
      {/* <Banner /> */}
   
  <Slider />

<Pricing />

 {/* Footer */}
 <Footer />
    </div>
  )
}

export default Home
