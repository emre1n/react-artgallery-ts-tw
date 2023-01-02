import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artwork: IArtworkModel | null;
};

const ArtworkCard = ({ artwork }: TProps) => {
  return (
    <div className="flex flex-col justify-between border overflow-hidden rounded-2xl shadow-lg h-[400px]">
      <picture className="flex justify-center items-center overflow-hidden  w-[400px] h-[400px]">
        <LazyLoadImage
          src={artwork?.image_url}
          alt={artwork?.title}
          effect="blur"
          placeholderSrc={artwork?.image_url}
          className="object-cover w-full min-w-[600px]"
        />
      </picture>

      <div className="p-4">
        <p className="text-base md:text-xl font-bold">{artwork?.title}</p>
        <p className="text-sm italic">{artwork?.date_display}</p>
        <p>{artwork?.artist_title}</p>
      </div>
    </div>
  );
};

export default ArtworkCard;
