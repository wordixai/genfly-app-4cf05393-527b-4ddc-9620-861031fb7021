import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="tabular-nums">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;