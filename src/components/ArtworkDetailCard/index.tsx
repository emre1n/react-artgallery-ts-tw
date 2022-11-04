import React from 'react';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artworkDetail: IArtworkModel | null;
};

const ArtworkDetail = ({ artworkDetail }: TProps) => {
  return (
    <div>
      <img src={artworkDetail?.image_url} alt="" />
      {artworkDetail?.title}
      {artworkDetail?.artist_title}
    </div>
  );
};

export default ArtworkDetail;
