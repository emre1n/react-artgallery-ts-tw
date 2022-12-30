import React from 'react';

import IArtworkModel from '../../libs/models/artwork.model';

type TProps = {
  artworkDetail: IArtworkModel | null;
};

const ArtworkDetail = ({ artworkDetail }: TProps) => {
  return (
    // Background Container
    <div className="flex items-start justify-center h-screen">
      {/* Card Container */}
      <div className="p-4 mx-6 border rounded-2xl shadow-lg">
        {/* Flex Container */}
        <div className="flex">
          {/* Image */}
          <img
            src={artworkDetail?.image_url}
            alt="artwork"
            className="object-fill h-96 m-4"
          />
          {/* Content */}
          <div className="p-4 border m-4">
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
    </div>
  );
};

export default ArtworkDetail;
