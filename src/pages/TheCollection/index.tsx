import { useEffect, useState } from 'react';

import Hero from '../../components/Hero';
import ArtworkList from '../../components/ArtworkList';

import { artworkDataModeler } from '../../libs/helpers/artworkDataModeler';

const TheCollection = () => {
  const [artworkPage, setArtworkPage] = useState<[] | null>(null);

  const getArtworkPage = async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=${3}`
    );
    const result = await response.json();
    const pageData = result.data;

    console.log(pageData);

    const artworkPageArray = pageData.map((artwork: any) => {
      const artworkDetails = artworkDataModeler(artwork);

      return artworkDetails;
    });

    console.log(artworkPageArray);

    setArtworkPage(artworkPageArray);
  };

  useEffect(() => {
    if (!artworkPage) {
      getArtworkPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <div>
        <ArtworkList artworkPage={artworkPage} />
      </div>
    </>
  );
};

export default TheCollection;
