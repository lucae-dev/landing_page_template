// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DetailsSection from './components/DetailsSection';
import ReviewsSection from './components/ReviewsSection';
import PricingSection from './components/PricingSection';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DetailsSection />
      <ReviewsSection />
      <PricingSection />
    </>
  );
}

export default App;