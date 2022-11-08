import React from 'react';
import ArtworkCard from '../ArtworkCard';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artwork: IArtworkModel | null;
};

const Discover = ({ artwork }: TProps) => {
  return (
    // Section Container
    <div className="flex items-center justify-center h-full p-8">
      {/* Card */}
      <div className="card p-2 w-11/12 mx-auto">
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row max-w-4xl h-{600}">
          {/* Content */}
          {/* Image, Title, Artist */}
          <div>
            <ArtworkCard artwork={artwork} />
          </div>
          <div className="flex flex-col justify-start md:justify-center max-w-xl h-96">
            <h2 className="items-center text-lg md:text-2xl font-bold p-4">
              Discover the brilliant works of great artists
            </h2>
            <p className="p-4 text-sm">
              Buy and sell your artworks on our marketplace or try out an
              English or a Dutch Auction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
