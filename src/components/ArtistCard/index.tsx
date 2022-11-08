import React from 'react';
import IArtistModel from '../../libs/models/artist.model';

type TProps = {
  artist: IArtistModel;
};

const ArtistCard = ({ artist }: TProps) => {
  return <div>{artist.title}</div>;
};

export default ArtistCard;
