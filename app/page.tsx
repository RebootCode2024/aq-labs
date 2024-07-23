
// src/app/page.tsx
import React from 'react';
import './globals.css';
import { AuroraBackground } from '../components/ui/aurora-background';
import Navbar from '../components/ui/Navbar';
import Track from '../components/ui/Track';

const MyApp: React.FC = () => {
  return (
    <>
      <AuroraBackground>
        <Navbar />
        <main className="mt-24 flex flex-col items-center px-4 md:px-8">
          <h1 className="text-3xl font-bold text-black dark:text-white mt-10">
            Our Work
          </h1>
          <div className="flex flex-col items-center mt-10 space-y-4 w-full max-w-4xl">
            <Track 
              title="Riyazat" 
              description="‘Riyazat’ meaning 'devotion' is a story painted on the canvas of distance with each separation a brushstroke and the reunion a master-piece waiting to unfold. Coming soon..." 
              posterUrl="https://yt3.ggpht.com/Jdck3rL1OD_Uh7SAQdKFpeRXpdqHuRXPtun-ZsdrGb4myVCx8ECkcbzoek3xKvSesDn1KgJM50teBg=s1024-c-fcrop64=1,00000000ffffffff-rw-nd-v1" 
            />
            {/* <Track 
              title="Track 2" 
              description="Description for Track 2" 
              posterUrl="https://yt3.ggpht.com/Jdck3rL1OD_Uh7SAQdKFpeRXpdqHuRXPtun-ZsdrGb4myVCx8ECkcbzoek3xKvSesDn1KgJM50teBg=s1024-c-fcrop64=1,00000000ffffffff-rw-nd-v1" 
            />
            <Track 
              title="Track 3" 
              description="Description for Track 3" 
              posterUrl="https://yt3.ggpht.com/Jdck3rL1OD_Uh7SAQdKFpeRXpdqHuRXPtun-ZsdrGb4myVCx8ECkcbzoek3xKvSesDn1KgJM50teBg=s1024-c-fcrop64=1,00000000ffffffff-rw-nd-v1" 
            /> */}
          </div>
        </main>
      </AuroraBackground>
    </>
  );
};

export default MyApp;
