// src/components/ui/Track.tsx
import React from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './carousel'; // Adjust the import path as needed

interface TrackProps {
  title: string;
  description: string;
  posterUrl: string; // Add a prop for the poster URL
}

const Track: React.FC<TrackProps> = ({ title, description, posterUrl }) => {
  const images = [
    "https://yt3.ggpht.com/2dakIYA-L9etQFjHzejZl2C3KZauHo2BWHMKtnaPVuyXswFBvlfrlSt5dE4AdOeQbz6tmuQTQsFOaw=s576-c-fcrop64=1,647a0000f47affff-rw-nd-v1",
    "https://yt3.ggpht.com/d7GLvjvaB80FQFHB2L0g0rLUooSOBMcGgr1DG6TNBuDKtZDmvcVUyJqFeJ05twdlIoXYF9Ho597p=s576-c-fcrop64=1,2b0a0000bb0affff-rw-nd-v1",
    "https://yt3.ggpht.com/ToVo4_88g-zLy6g0zkHzS-Li8hDB5lixDL-QtTelsVyToRg-178IanUjGuBVaPewLarUTVtEzTzN0A=s575-c-fcrop64=1,3b000000cabfffff-rw-nd-v1",
    "https://yt3.ggpht.com/qJSt1mNkS478odVgDyA-Dx9fSEa6H3CiF9uyBxKn566Ynn2Aqo81e5nd5AaGeUCFPgq_0QsGeUyB5A=s576-c-fcrop64=1,40a40000d0a3ffff-rw-nd-v1"
  ];

  const carouselDescription = "Farewell’s melody softened by the sweet notes of reunion";
  const firstVideoDescription = "The dusk of distance surrenders to the graceful dawn of reunion.\n\nOfficial video dropping soon...";
  const secondVideoDescription = "Shot in the beautiful Mashobra valley, 'Riyazat' marks the debut of Aquaregia. Fortunate enough to have worked alongside a very cohesive and well organised team spear-headed by Director Emminel, Aquaregia set its sail for a long voyage ahead...";
  const lastVideoDescription = "Inspired by Raag Yaman, 'Riyazat' was blessed to have some soulful melodies embellish its melancholic yet deeply soothing vibe by none other than the flute maestro, Pandit Ajay Prasanna ji. #Raagbasedsongs #Songofseparation";

  return (
    <div className="border border-black rounded-lg p-4 bg-white shadow-md m-4 text-center flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <h3 className="mb-4 text-center">{description}</h3>
      <div className="flex justify-center w-full max-w-2xl">
        <Image
          src={posterUrl}
          alt={`${title} poster`}
          width={1000}
          height={300}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <h2 className="mt-4 mb-2 text-center">{carouselDescription}</h2>
      <div className="w-full mt-4 flex justify-center">
        <Carousel className="relative w-full max-w-2xl">
          <CarouselContent className="flex w-full">
            {images.map((img, index) => (
              <CarouselItem key={index} className="w-full">
                <Image
                  src={img}
                  alt={`Carousel image ${index + 1}`}
                  width={1000}
                  height={300}
                  className="rounded-lg w-full h-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
      <div className="w-full mt-4 flex flex-col items-center space-y-4">
        <p className="text-center text-lg mb-2">
          {firstVideoDescription}
        </p>
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/KHw3L-k-izY?si=Uen5pp1C7cpgPEll" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        <p className="text-center text-lg mb-2">
          {secondVideoDescription}
        </p>
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/d8yRyDqvYas?si=rva6mpbDMtBYA8xe" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        <p className="text-center text-lg mb-2">
          {lastVideoDescription}
        </p>
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/IjAIuMjIHkg?si=EFCGCF9YPBR0XwlK" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
};

export default Track;
