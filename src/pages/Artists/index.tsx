import { useState, useEffect } from 'react';

import { artistDataModeler } from '../../libs/helpers/artistDataModeler';

import ArtistList from '../../components/ArtistList';
import HeroSection from '../../components/HeroSection';

const ResidentArtists = () => {
  const [artistListPage, setArtistListPage] = useState<[] | null>(null);

  const getArtistList = async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/agents?page=${3}`
    );
    const result = await response.json();
    const pageData = result.data;
    console.log(pageData);

    const artistPageArray = pageData.map((artist: any) => {
      const artistDetails = artistDataModeler(artist);

      return artistDetails;
    });
    console.log(artistPageArray);

    setArtistListPage(artistPageArray);
  };

  useEffect(() => {
    if (!artistListPage) {
      getArtistList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col p-12 gap-8">
      <HeroSection
        heading="ARTISTS"
        text="Our resident artists, including abstract painters, conceptual artist,
        portrait painters, sketch artists, illustrators, digital artists,
        printmakers, textile artists, glass artists and mixed media artists."
      />
      <ArtistList artistListPage={artistListPage} />
    </div>
  );
};

export default ResidentArtists;
