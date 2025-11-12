import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Navbar from './components/HomeComponents/Navbar/Navbar'
import Footer from './components/Footer'
import { Scroll } from 'lucide-react'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App