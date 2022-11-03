import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import IArtworkModel from '../../libs/models/artwork.model';

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

    const artworkDetailModeled = {
      artwork_id: artworkFromAPI.id,
      image_id: artworkFromAPI.image_id,
      title: artworkFromAPI.title,
      artist_title: artworkFromAPI.artist_title,
      style_title: artworkFromAPI.style_title,
      image_url: `https://www.artic.edu/iiif/2/${artworkFromAPI.image_id}/full/843,/0/default.jpg`,
    };

    setArtworkDetail(artworkDetailModeled);
  }, []);

  useEffect(() => {
    if (!artworkDetail) {
      getArtworkDetail(params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getArtworkDetail, params]);

  return (
    <div>
      Artwork details <img src={artworkDetail?.image_url} alt="" />
      {artworkDetail?.title}
      {artworkDetail?.artist_title}
    </div>
  );
};
export default ArtworkDetails;
