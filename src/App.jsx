import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import OurTours from './components/OurTours/OurTours'
import Transfer from './components/Transfer/Transfer'
import Contact from './components/Contact/Contact'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import WhatsAppFloat from './components/WhatsApp/WhatsAppFloat'
import TourDetails from './components/TourDetails/TourDetails'
import Places from './components/Places/Places'
import Reviews from './components/Reviews/Reviews'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import { createGlobalStyle } from 'styled-components'
import TravelPackages from './components/TravelPackages/TravelPackages'
import Accommodation from './components/Accommodation/Accommodation'
import SeasonalInfo from './components/SeasonalInfo/SeasonalInfo'
import RegionDetails from './components/RegionDetails/RegionDetails'
import PackageDetails from './components/PackageDetails/PackageDetails'

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

const AppContent = () => {
  const location = useLocation();
  const isTourDetails = location.pathname.includes('/tour/');

  return (
    <>
      {!isTourDetails && <Navbar />}
      <Routes>
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/region/:id" element={<RegionDetails />} />
        <Route path="/package/:id" element={<PackageDetails />} />
        <Route path="/" element={
          <>
            <Home />
            <About />
            <OurTours />
            <TravelPackages />
            <Transfer />
            <Accommodation />
            <SeasonalInfo />
            <Reviews />
            <FAQ />
            <Contact />
          </>
        } />
      </Routes>
      {!isTourDetails && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <AppContent />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
