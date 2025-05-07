import React from 'react';
import Navbar from './components/NavBar'
import WelcomeMessage from './components/WelcomeMessage';
import HeroSection from './components/HeroSection'; 
import FeatureCarousel from './components/FeatureCarousel'; 
import KeySellingPoints from "./components/KeySellingPoints"; 
import TestimonialCarousel from "./components/TestimonialCarousel"; 
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <WelcomeMessage />
      <HeroSection />
      <FeatureCarousel />
      <KeySellingPoints />
      <TestimonialCarousel />
      <Footer/>
    </>
  );
};

export default App;
