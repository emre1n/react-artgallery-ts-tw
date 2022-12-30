import React from 'react';

import ArtistCard from '../ArtistCard';
import IArtistModel from '../../libs/models/artist.model';

type TProps = {
  artistListPage: IArtistModel[] | null;
};

const ArtistList = ({ artistListPage }: TProps) => {
  return (
    <div className="flex flex-col">
      <ul className="flex flex-wrap gap-4">
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
