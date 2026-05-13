"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { SocialHero } from "./components/SocialHero";
import { SocialStats } from "./components/SocialStats";
import { SocialAccounts } from "./components/SocialAccounts";
import { YouTubeFeed } from "./components/YouTubeFeed";
import { InstagramFeed } from "./components/InstagramFeed";
import { SocialCTA } from "./components/SocialCTA";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<FeedResp>("/api/social/feeds");
        setYtItems(data.data.youtube ?? []);
        setIgItems(data.data.instagram ?? []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <SocialHero />
      <SocialStats />
      <SocialAccounts />
      <YouTubeFeed items={ytItems} loading={loading} />
      <InstagramFeed items={igItems} loading={loading} />
      <SocialCTA />
    </>
  );
}
