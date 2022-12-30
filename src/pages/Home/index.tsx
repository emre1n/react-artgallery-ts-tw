import { useState, useEffect } from 'react';

import Discover from '../../components/Discover';

import IArtworkModel from '../../libs/models/artwork.model';
import { artworkDataModeler } from '../../libs/helpers/artworkDataModeler';

const Home = () => {
  const [randomArtwork, setRandomArtwork] = useState<IArtworkModel | null>(
    null
  );

  const [loading, setLoading] = useState(true);

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
    setLoading(false);

    const randomArtworkModeled = artworkDataModeler(singleArtwork);

    setRandomArtwork(randomArtworkModeled);
  };

  useEffect(() => {
    if (!randomArtwork) {
      getRandomArtwork();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center">
      <Discover artwork={randomArtwork} isLoading={loading} />
    </div>
  );
};

export default Home;
