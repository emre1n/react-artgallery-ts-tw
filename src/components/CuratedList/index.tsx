import { useState, useEffect } from 'react';
import CuratedCollection from '../CuratedCollection';

import IArtworkModel from '../../libs/models/artwork.model';

import { artworkDataModeler } from '../../libs/helpers/artworkDataModeler';

const CuratedList = () => {
  const [artwork, setArtwork] = useState<IArtworkModel[] | null>(null);

  const getArtwork = async () => {
    const response1 = await fetch(
      `https://api.artic.edu/api/v1/artworks/14598`
    );
    const response2 = await fetch(
      `https://api.artic.edu/api/v1/artworks/80607`
    );
    const result1 = await response1.json();
    const result2 = await response2.json();
    console.log(result1);
    console.log(result2);
    const artworkModeled1 = artworkDataModeler(result1.data);
    const artworkModeled2 = artworkDataModeler(result2.data);
    const artworkModeledArray = [artworkModeled1, artworkModeled2];
    console.log(artworkModeledArray);
    setArtwork(artworkModeledArray);
  };

  useEffect(() => {
    if (!artwork) {
      getArtwork();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col w-full gap-8">
      <CuratedCollection artwork={artwork?.[0]} />
      <CuratedCollection artwork={artwork?.[1]} />
    </div>
  );
};

export default CuratedList;
