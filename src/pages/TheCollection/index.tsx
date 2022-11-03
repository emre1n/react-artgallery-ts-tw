import { useEffect, useState } from 'react';

import Hero from '../../components/Hero';
import ArtworkList from '../../components/ArtworkList';

const TheCollection = () => {
  const [artworkPage, setArtworkPage] = useState<[] | null>(null);

  const getArtworkPage = async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=${0}`
    );
    const result = await response.json();
    const pageData = result.data;

    console.log(pageData);

    const artworkPageArray = pageData.map((artwork: any) => {
      const artworkDetails = {
        artwork_id: artwork.id,
        image_id: artwork.image_id,
        title: artwork.title,
        artist_title: artwork.artist_title,
        style_title: artwork.style_title,
        image_url: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
      };

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
      <ArtworkList artworkPage={artworkPage} />
    </>
  );
};

export default TheCollection;
