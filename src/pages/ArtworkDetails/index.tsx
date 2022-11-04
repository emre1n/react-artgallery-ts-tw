import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import IArtworkModel from '../../libs/models/artwork.model';
import { artworkDataModeler } from '../../libs/helpers/artworkDataModeler';

import ArtworkDetailCard from '../../components/ArtworkDetailCard';

const ArtworkDetails = () => {
  const [artworkDetail, setArtworkDetail] = useState<IArtworkModel | null>(
    null
  );

  const params = useParams();
  console.log('params', params);

  const getArtworkDetail = useCallback(async (id: string | undefined) => {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
    const result = await response.json();

    console.log('result', result.data);

    const artworkFromAPI = result.data;

    const randomArtworkModeled = artworkDataModeler(artworkFromAPI);

    setArtworkDetail(randomArtworkModeled);
  }, []);

  useEffect(() => {
    if (!artworkDetail) {
      getArtworkDetail(params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getArtworkDetail, params]);

  return <ArtworkDetailCard artworkDetail={artworkDetail} />;
};
export default ArtworkDetails;
