import React from 'react'
import ProductHero from '../components/ProductComponents/ProdutHero/ProductHero'
import DealerContactForm from '../components/ProductComponents/DealerContactform/DealerContactForm'
import Dealer from '../components/ProductComponents/Dealer/Dealer'

const Products = () => {
  return (
    <div>
      <ProductHero/> 
      <Dealer/>
      <DealerContactForm/>

    </div>
  )
}

export default Products