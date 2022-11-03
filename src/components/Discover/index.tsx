import React from 'react';
import ArtworkCard from '../ArtworkCard';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artwork: IArtworkModel | null;
};

const Discover = ({ artwork }: TProps) => {
  return (
    // Section Container
    <div className="flex items-center justify-center h-{600} p-16">
      {/* Card */}
      <div className="card p-2 w-11/12 mx-auto">
        {/* Flex Container */}
        <div className="flex max-w-4xl">
          {/* Content */}
          <div className="flex flex-col justify-center max-w-xl h-96">
            <h2 className="items-center text-2xl font-bold p-4">
              Discover the brilliant works of great artists
            </h2>
            <p className="p-4">
              Buy and sell your artworks on our marketplace or try out an
              English or a Dutch Auction.
            </p>
          </div>
          {/* Image, Title, Artist */}
          <ArtworkCard artwork={artwork} />
        </div>
      </div>
    </div>
  );
};

export default Discover;
