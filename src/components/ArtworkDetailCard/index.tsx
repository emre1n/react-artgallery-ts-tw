import React from 'react';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artworkDetail: IArtworkModel | null;
};

const ArtworkDetail = ({ artworkDetail }: TProps) => {
  return (
    <div className="flex items-start justify-center m-8">
      <div className="flex flex-col md:flex-row border rounded-2xl shadow-lg">
        <div className="flex justify-center items-center p-4">
          <img
            src={artworkDetail?.image_url}
            alt="artwork"
            className="object-cover overflow-hidden w-full h-full"
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold text-2xl"> {artworkDetail?.title}</h2>
          <p className="block italic text-slate-500 text-sm pb-4">
            {artworkDetail?.date_display}
          </p>
          <p className="pb-4 text-sm">{artworkDetail?.provenance_text}</p>
          <ul className="text-xs pb-4 list-none flex">
            {artworkDetail?.classification_titles.map(tag => (
              <li key={tag}>
                <p className="m-2 px-2 py-1 bg-slate-300">{tag}</p>
              </li>
            ))}
          </ul>
          <p className="text-slate-500 text-sm">Artist</p>
          <p className="font-bold"> {artworkDetail?.artist_title}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
