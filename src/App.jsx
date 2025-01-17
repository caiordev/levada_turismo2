import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import OurTours from './components/OurTours/OurTours'
import Transfer from './components/Transfer/Transfer'
import AvailablePlaces from './components/AvailablePlaces'
import Destinations from './components/Destinations/Destinations'
import Contact from './components/Contact/Contact'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import WhatsAppFloat from './components/WhatsApp/WhatsAppFloat'
import TourDetails from './components/TourDetails/TourDetails'
import Places from './components/Places/Places'
import Reviews from './components/Reviews/Reviews'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import KayakTour from './components/KayakTour/KayakTour'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: #333;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <Navbar />
        <Routes>
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/place/:id" element={<PlaceDetails />} />
          <Route path="/" element={
            <>
              <Home />
              <About />
              <OurTours />
              <KayakTour />
              <Transfer />
              <Places />
              <Reviews />
              <FAQ />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
