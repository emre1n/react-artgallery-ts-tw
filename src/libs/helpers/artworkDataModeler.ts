export const artworkDataModeler = (artwork: any) => {
  const randomArtworkModeled = {
    id: artwork.id,
    image_id: artwork.image_id,
    title: artwork.title,
    artist_title: artwork.artist_title,
    style_title: artwork.style_title,
    image_url: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
    date_display: artwork.date_display,
    provenance_text: artwork.provenance_text,
    classification_titles: artwork.classification_titles,
  };
  return randomArtworkModeled;
};
