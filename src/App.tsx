import React from 'react';
import { HeroSection } from './components/hero-section';
import { ServiceSection } from './components/service-section';
import { FeaturesSection } from './components/features-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { useEffect } from 'react';

function App() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <HeroSection />
      <ServiceSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
      {/* Chatwoot is loaded via script in index.html */}
    </main>
  );
}

export default App;