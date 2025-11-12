import React from 'react'
import ContactHero from '../components/ContactComponents/ContactHero/ContactHero'
import Contactsection from '../components/ContactComponents/Contactsection/Contactsection'
import Map from '../components/HomeComponents/Dealer/Map'

const Contact = () => {
  return (
    <div>
      <ContactHero/>
      <Contactsection/>
      <Map/>
    </div>
  )
}

export default Contact