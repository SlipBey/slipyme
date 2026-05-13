export type SpotifyRelease = {
  id: string;
  name: string;
  type: string;
  releaseDate: string | null;
  totalTracks: number;
  image: string | null;
  spotifyUrl: string | null;
};

export type SpotifyReleasesResponse = {
  updatedAt?: string | null;
  items?: SpotifyRelease[];
};
