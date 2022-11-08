import React from 'react';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artwork: IArtworkModel | null;
};

const ArtworkCard = ({ artwork }: TProps) => {
  return (
    <div className="image-wrapper flex flex-col max-w-{300} h-{500} border overflow-hidden">
      <img
        src={artwork?.image_url}
        alt={artwork?.title}
        className="flex object-fit h-80"
      />
      <div className="description p-2">
        <p className="font-bold">{artwork?.title}</p>
        <p className="text-sm italic">{artwork?.date_display}</p>
        <p>{artwork?.artist_title}</p>
      </div>
    </div>
  );
};

export default ArtworkCard;
