import React from 'react';

import HeroSection from '../../components/HeroSection';
import CuratedList from '../../components/CuratedList';

const CuratedPicks = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <HeroSection
        heading="CURATED ART COLLECTIONS"
        text="Browse through the curated art collections which have been hand-picked by our team"
      />
      <CuratedList />
    </div>
  );
};

export default CuratedPicks;
