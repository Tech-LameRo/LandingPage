import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import BrandsSection from './components/BrandsSection'
import DesignShowcase from './components/DesignShowcase'
import CustomizeSection from './components/CustomizeSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <BrandsSection />
        <DesignShowcase />
        <CustomizeSection />
        <Footer />
      </main>
      </div>
  )
}

export default App
