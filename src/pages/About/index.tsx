import React from 'react';
import HeroSection from '../../components/HeroSection';

const About = () => {
  return (
    <div className="flex p-12">
      <HeroSection
        heading="ABOUT"
        text="At One Art, we are providing a space for emerging artists as well as
        established artists. We are making our curations creatively and
        carefully to present our collectors the best curated collections."
      />
    </div>
  );
};

export default About;
