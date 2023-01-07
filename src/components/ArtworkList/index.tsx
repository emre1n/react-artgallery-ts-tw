import React from 'react';
import { toPath } from '../../libs/helpers/strings';
import { Link } from 'react-router-dom';

import IArtworkModel from '../../libs/models/artwork.model';

import ArtworkCard from '../ArtworkCard';

import ROUTES from '../../libs/constants/routes';

type TProps = {
  artworkPage: IArtworkModel[] | null;
};

const ArtworkList = ({ artworkPage }: TProps) => {
  return (
    <div className="max-w-[2000px]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {artworkPage?.map(artwork => (
          <div key={artwork.id}>
            <Link
              to={toPath(ROUTES.ArtworkDetails.path, {
                id: `${artwork.id}`,
              })}
            >
              <ArtworkCard artwork={artwork} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworkList;
