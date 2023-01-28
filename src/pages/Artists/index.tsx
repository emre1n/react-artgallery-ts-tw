import { useState, useEffect } from 'react';

import { artistDataModeler } from '../../libs/helpers/artistDataModeler';

import ArtistList from '../../components/ArtistList';
import HeroArtists from '../../components/HeroArtists';

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
      <HeroArtists />
      <ArtistList artistListPage={artistListPage} />
    </div>
  );
};

export default ResidentArtists;
