export const artistDataModeler = (artist: any) => {
  const artistModeled = {
    id: artist.id,
    title: artist.title,
    is_artist: artist.is_artist,
  };
  return artistModeled;
};
