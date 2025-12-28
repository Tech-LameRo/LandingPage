import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import BrandsSection from './components/BrandsSection'
import DesignShowcase from './components/DesignShowcase'
import CustomizeSection from './components/CustomizeSection'
import Footer from './components/Footer'
import EarlyAccess from './pages/EarlyAccess'

function LandingPage() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/early-access" element={<EarlyAccess />} />
      </Routes>
    </Router>
  )
}

export default App
