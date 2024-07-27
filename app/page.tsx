"use client";

import React, { useEffect, useState } from 'react';
import './globals.css';
import { AuroraBackground } from '../components/ui/aurora-background';
import Navbar from '../components/ui/Navbar';
import Track from '../components/ui/Track';

interface SongData {
  _id: { $oid: string };
  title: string;
  description: string;
  posterUrl: string;
  carouselDescription: string;
  firstVideoDescription: string;
  secondVideoDescription: string;
  lastVideoDescription: string;
  images: string[];
  firstVideoUrl: string;
  secondVideoUrl: string;
  lastVideoUrl: string;
}

const MyApp: React.FC = () => {
  const [songs, setSongs] = useState<SongData[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('/api/songs');
        const data = await response.json();
        setSongs(data); // Songs are already sorted in descending order by _id
      } catch (error) {
        console.error('Error fetching songs data:', error);
      }
    };

    fetchSongs();
  }, []);

  if (songs.length === 0) return <div>Loading...</div>;

  return (
    <>
      
        <Navbar />
        <main className="mt-24 flex flex-col items-center px-4 md:px-8">
          <h1 className="text-3xl font-bold text-black dark:text-white mt-10">
            Our Work
          </h1>
          <div className="flex flex-col items-center mt-10 space-y-4 w-full max-w-4xl">
            {songs.map(song => (
              <Track key={song._id.$oid} {...song} />
            ))}
          </div>
        </main>
      
    </>
  );
};

export default MyApp;
