"use client";

import { useEffect, useState } from "react";
import api from "@/libs/api";
import InstagramFeed from "./components/InstagramFeed";
import SocialAccounts from "./components/SocialAccounts";
import SocialCTA from "./components/SocialCTA";
import SocialHero from "./components/SocialHero";
import SocialStats from "./components/SocialStats";
import YouTubeFeed from "./components/YouTubeFeed";

export type FeedResp = {
  data: {
    youtube: {
      id: string;
      title: string;
      publishedAt: string;
      thumbnail: string;
      views: number;
    }[];
    instagram: {
      id: string;
      media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
      media_url: string;
      thumbnail_url?: string;
      permalink: string;
      caption?: string;
      timestamp?: string;
    }[];
  };
};

export default function SocialClient() {
  const [ytItems, setYtItems] = useState<FeedResp["data"]["youtube"]>([]);
  const [igItems, setIgItems] = useState<FeedResp["data"]["instagram"]>([]);
  const [loadingFeeds, setLoadingFeeds] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<FeedResp>("/api/social/feeds");
        setYtItems(data.data.youtube ?? []);
        setIgItems(data.data.instagram ?? []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingFeeds(false);
      }
    })();
  }, []);

  return (
    <>
      <SocialHero />
      <SocialStats />
      <SocialAccounts />
      <YouTubeFeed items={ytItems} loading={loadingFeeds} />
      <InstagramFeed items={igItems} loading={loadingFeeds} />
      <SocialCTA />
    </>
  );
}
