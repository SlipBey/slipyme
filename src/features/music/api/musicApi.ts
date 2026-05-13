import api from "@/lib/api";
import type { SpotifyReleasesResponse } from "../types";

export async function getSpotifyReleases(limit = 24) {
  const { data } = await api.get<SpotifyReleasesResponse>(
    "/api/music/spotify",
    {
      params: { limit },
    },
  );

  return {
    updatedAt: data?.updatedAt ?? new Date().toISOString(),
    items: Array.isArray(data?.items) ? data.items : [],
  };
}
