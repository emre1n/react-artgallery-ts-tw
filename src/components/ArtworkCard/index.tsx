import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artwork: IArtworkModel | null;
};

const ArtworkCard = ({ artwork }: TProps) => {
  return (
    <div className="flex flex-col justify-between md:min-w-[340px] border overflow-hidden rounded-2xl shadow-lg h-[600px]">
      <LazyLoadImage
        src={artwork?.image_url}
        alt={artwork?.title}
        effect="blur"
        placeholderSrc={artwork?.image_url}
        className="flex object-cover object-top h-[450px] min-w-[340px] hover:filter hover:brightness-50 transition-all"
      />
      <div className="p-4">
        <p className="text-base md:text-xl font-bold">{artwork?.title}</p>
        <p className="text-sm italic">{artwork?.date_display}</p>
        <p>{artwork?.artist_title}</p>
      </div>
    </div>
  );
};

export default ArtworkCard;
