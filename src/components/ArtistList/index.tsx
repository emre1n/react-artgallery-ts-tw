import React from 'react';

import ArtistCard from '../ArtistCard';
import IArtistModel from '../../libs/models/artist.model';

type TProps = {
  artistListPage: IArtistModel[] | null;
};

const ArtistList = ({ artistListPage }: TProps) => {
  return (
    <div>
      <ul className="gap-4 px-8">
        {artistListPage?.map(artist => (
          <li key={artist.id}>
            <ArtistCard artist={artist} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
