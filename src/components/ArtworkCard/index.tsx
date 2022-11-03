import React from 'react';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artwork: IArtworkModel | null;
};

const ArtworkCard = ({ artwork }: TProps) => {
  return (
    <div className="image-wrapper flex flex-col w-6/12 h-96 border overflow-hidden">
      <img
        src={artwork?.image_url}
        alt={artwork?.title}
        className="flex object-fit h-80"
      />
      <div className="description p-2">
        <p className="font-bold">{artwork?.title}</p>
        <p>{artwork?.artist_title}</p>
      </div>
    </div>
  );
};

export default ArtworkCard;
