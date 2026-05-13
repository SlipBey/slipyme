import type { IconType } from "react-icons";
import { FaApple, FaSpotify } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export const MUSIC_API_LIMIT = 24;

export type MusicPlatformKey =
  | "spotifySlipBey"
  | "spotifySoftPenguinsLabs"
  | "appleMusic"
  | "youtubeMusic";

export type MusicPlatform = {
  key: MusicPlatformKey;
  href: string;
  icon: IconType;
  primary?: boolean;
};

export const MUSIC_PLATFORM_LINKS: MusicPlatform[] = [
  {
    key: "spotifySlipBey",
    href: "https://open.spotify.com/intl-tr/artist/5i4GTYlGDGtlNIlEjFaOUp",
    icon: FaSpotify,
    primary: true,
  },
  {
    key: "spotifySoftPenguinsLabs",
    href: "https://open.spotify.com/intl-tr/artist/1KDKdFnQIB8vHSBMLqCXZE",
    icon: FaSpotify,
  },
  {
    key: "appleMusic",
    href: "https://music.apple.com/tr/artist/slipbey/1851991817",
    icon: FaApple,
  },
  {
    key: "youtubeMusic",
    href: "https://www.youtube.com/@SlipymeMusic",
    icon: SiYoutubemusic,
  },
];

export const MUSIC_PLATFORMS = MUSIC_PLATFORM_LINKS;
