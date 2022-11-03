import { useState, useEffect } from 'react';

import Discover from '../../components/Discover';

import IArtworkModel from '../../libs/models/artwork.model';

const Home = () => {
  const [randomArtwork, setRandomArtwork] = useState<IArtworkModel | null>(
    null
  );

  const getRandomArtwork = async () => {
    const randomPage = Math.trunc(Math.random() * 9785);
    const randomArtwork = Math.trunc(Math.random() * 12);

    console.log(randomPage);

    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=${randomPage}`
    );
    const result = await response.json();
    const singleArtwork = result.data[randomArtwork];

    console.log(singleArtwork);

    const randomArtworkModeled = {
      artwork_id: singleArtwork.id,
      image_id: singleArtwork.image_id,
      title: singleArtwork.title,
      artist_title: singleArtwork.artist_title,
      style_title: singleArtwork.style_title,
      image_url: `https://www.artic.edu/iiif/2/${singleArtwork.image_id}/full/843,/0/default.jpg`,
    };

    setRandomArtwork(randomArtworkModeled);
  };

  useEffect(() => {
    if (!randomArtwork) {
      getRandomArtwork();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Discover artwork={randomArtwork} />
    </>
  );
};

export default Home;
