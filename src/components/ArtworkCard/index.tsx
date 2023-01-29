import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artwork: IArtworkModel | null;
};

const ArtworkCard = ({ artwork }: TProps) => {
  return (
    <div className="flex flex-col border overflow-hidden rounded-2xl shadow-lg max-w-[460px] h-[360px]  md:h-[460px]  md:w-[320px]">
      <picture className="overflow-hidden h-3/4 ">
        <img
          src={artwork?.image_url}
          alt={artwork?.title}
          className="object-cover object-center w-full h-full"
        />
      </picture>

      <div className="p-2 w-full h-1/3 overflow-y-auto">
        <p className="text-base md:text-xl font-bold">{artwork?.title}</p>
        <p className="text-sm italic">{artwork?.date_display}</p>
        <p>{artwork?.artist_title}</p>
      </div>
    </div>
  );
};

export default ArtworkCard;
