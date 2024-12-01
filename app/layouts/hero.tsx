// src/components/react/HeroSection.tsx
import React from 'react';
import type { AdDetailProps } from '../types/apitypes';


const HeroSection: React.FC<AdDetailProps> = ({adDataResponse}) => {
  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{adDataResponse?.data?.Title}</h1>
        <p >Price: {adDataResponse?.data?.PriceCurrency?.replace("&pound;","£")}</p>
      </div>
    </section>
  );
};

export default HeroSection;