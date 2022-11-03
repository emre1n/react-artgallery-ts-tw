import React from 'react';

import IArtworkModel from '../../libs/models/artwork.model';

import ArtworkCard from '../ArtworkCard';

type TProps = {
  artworkPage: IArtworkModel[] | null;
};

const ArtworkList = ({ artworkPage }: TProps) => {
  return (
    <div>
      <ul>
        {artworkPage?.map(artwork => (
          <li key={artwork.artwork_id}>
            <ArtworkCard artwork={artwork} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtworkList;
