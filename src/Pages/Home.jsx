import React from 'react'
import Hero from '../components/HomeComponents/Hero/Hero'
import AboutOverview from '../components/HomeComponents/AboutOverview/AboutOverview'
import Product from '../components/HomeComponents/Products/Product'
import OurProcess from '../components/HomeComponents/OurProcess/OurProcess'
import Dealer from '../components/HomeComponents/Dealer/Dealer'
import Dealerthree from '../components/HomeComponents/Dealer/Dealerthree'
import Map from '../components/HomeComponents/Dealer/Map'
import HomeContact from '../components/HomeComponents/HomeContact'


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutOverview/>
      <Product/>
      <OurProcess/>
      <Dealer/>
      <Dealerthree/>
      <HomeContact/>
    </div>
  )
}

export default Home