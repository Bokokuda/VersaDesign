import React from 'react';
import Navbar from './components/navbar'
import Hero from './components/hero'
import Aboutme from './components/aboutme';
import Notifyme from './components/notifyme';
import Footer from './components/footer';
import Services from './components/services';
import Photos from './components/photos';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutme />
      <Notifyme />
      <Services />
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
