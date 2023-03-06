import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artwork: IArtworkModel | null | undefined;
};

const CuratedCollection = ({ artwork }: TProps) => {
  return (
    <div className="flex flex-col m-auto border rounded-2xl w-[300px] md:w-[800px]">
      <h2 className="px-4 py-2 font-bold text-xl">{artwork?.style_title}</h2>
      <div className="flex w-full">
        <LazyLoadImage
          className="w-full h-[100px] md:h-[200px] object-cover"
          src={artwork?.image_url}
          alt={artwork?.title}
          effect="blur"
          placeholderSrc={artwork?.image_url}
          width={800}
        />
      </div>
    </div>
  );
};

export default CuratedCollection;
