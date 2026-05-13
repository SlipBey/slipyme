export type SpotifyRelease = {
  id: string;
  name: string;
  releaseDate: string;
  totalTracks: number;
  type: string;
  image: string | null;
  spotifyUrl: string | null;
};

export type SpotifyReleasesResponse = {
  updatedAt: string;
  items: SpotifyRelease[];
};
