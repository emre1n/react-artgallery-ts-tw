export const artistDataModeler = (artist: any) => {
  const artistModeled = {
    id: artist.id,
    title: artist.title,
    is_artist: artist.is_artist,
    sort_title: artist.sort_title,
    birth_date: artist.birth_date,
    death_date: artist.death_date,
  };
  return artistModeled;
};
