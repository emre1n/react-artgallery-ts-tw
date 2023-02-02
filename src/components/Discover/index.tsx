import React from 'react';
import ArtworkCard from '../ArtworkCard';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artwork: IArtworkModel | null;
  isLoading: boolean;
};

const Discover = ({ artwork, isLoading }: TProps) => {
  return (
    <div className="flex flex-col gap-12 md:flex-row m-8">
      <div className="flex justify-center">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <ArtworkCard artwork={artwork} />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold">
            Discover the brilliant works of great artists
          </h2>
          <p>
            Buy artworks from our art gallery or try out an English or a Dutch
            Auction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
