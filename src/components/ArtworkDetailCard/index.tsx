import React from 'react';

import IArtworkModel from '../../libs/models/artwork.model';
import Divider from '../ui/Divider';

type TProps = {
  artworkDetail: IArtworkModel | null;
};

const ArtworkDetail = ({ artworkDetail }: TProps) => {
  return (
    <div className="flex flex-col items-start justify-center gap-6">
      <div>
        <img
          src={artworkDetail?.image_url}
          alt="artwork"
          className="object-cover overflow-hidden w-full md:max-w-[800px] md:max-h-[450px]"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Divider />
        <h2 className="font-bold text-2xl"> {artworkDetail?.title}</h2>
        <p className="block text-slate-500 text-sm">
          {artworkDetail?.date_display}
        </p>
        <p className="text-slate-500 text-sm">Artist</p>
        <p className="font-bold"> {artworkDetail?.artist_title}</p>
        <p className="text-slate-500 text-sm">Description</p>
        <p className="text-sm text-slate-500">
          {artworkDetail?.provenance_text}
        </p>
        <ul className="text-xs list-none flex gap-2">
          {artworkDetail?.classification_titles.map(tag => (
            <li key={tag}>
              <p className="px-2 py-1 bg-slate-300">{tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtworkDetail;
