import React from 'react';
import ArtworkCard from '../ArtworkCard';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artwork: IArtworkModel | null;
  isLoading: boolean;
};

const Discover = ({ artwork, isLoading }: TProps) => {
  return (
    <div className="flex flex-col gap-12 md:flex-row mx-8">
      <div className="flex justify-center">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <ArtworkCard artwork={artwork} />
        )}
      </div>
      <div className="flex flex-col justify-start md:justify-center max-w-xl md:h-96">
        <h2 className="items-center text-xl md:text-2xl font-bold p-4">
          Discover the brilliant works of great artists
        </h2>
        <p className="p-4 text-sm">
          Buy and sell your artworks on our marketplace or try out an English or
          a Dutch Auction.
        </p>
      </div>
    </div>
  );
};

export default Discover;
