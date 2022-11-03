import React from 'react';

type TProps = {
  artwork_id?: number;
  title?: string;
  artist_title?: string;
  style_title?: string;
  image_id?: number;
  image_url?: string;
};

const Discover = ({ title, artist_title, image_url }: TProps) => {
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
          <div className="image-wrapper flex flex-col w-6/12 h-96 border overflow-hidden">
            <img src={image_url} alt={title} className="flex object-fit h-80" />
            <div className="description p-2">
              <p className="font-bold">{title}</p>
              <p>{artist_title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
