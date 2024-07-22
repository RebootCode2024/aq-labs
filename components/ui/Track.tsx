// src/components/ui/Track.tsx
import React from 'react';
import Image from 'next/image';

interface TrackProps {
  title: string;
  description: string;
  posterUrl: string; // Add a prop for the poster URL
}

const Track: React.FC<TrackProps> = ({ title, description, posterUrl }) => {
  return (
    <div className="border border-black rounded-lg p-4 bg-white shadow-md m-4 text-center flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4 text-center">{description}</p>
      <div className="flex justify-center">
        <Image
          src={posterUrl}
          alt={`${title} poster`}
          width={1000}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Track;
