import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import IArtistModel from '../../libs/models/artist.model';

type TProps = {
  artist: IArtistModel;
};

const ArtistCard = ({ artist }: TProps) => {
  const [artistImageId, setArtistImageId] = useState<string | null>(null);

  const getArtistImageId = async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${artist.sort_title}`
    );
    const result = await response.json();
    console.log(result.data[0].id);

    const response1 = await fetch(
      `https://api.artic.edu/api/v1/artworks/${result.data[0].id}`
    );
    const result1 = await response1.json();

    console.log(result1.data.image_id);
    setArtistImageId(result1.data.image_id);
  };
  useEffect(() => {
    if (!artistImageId) {
      getArtistImageId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex p-2 border rounded-2xl w-[300px]">
      <div>
        <div className="flex justify-center object-cover w-24 h-24 rounded-full  overflow-hidden ">
          <LazyLoadImage
            src={`https://www.artic.edu/iiif/2/${artistImageId}/full/843,/0/default.jpg`}
            alt=""
            effect="blur"
            placeholderSrc={`https://www.artic.edu/iiif/2/${artistImageId}/full/843,/0/default.jpg`}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex px-8">{artist.title}</div>
        <div className="flex text-slate-500">
          <div className="px-8">
            {artist.birth_date}-{artist.death_date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
