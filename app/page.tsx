// src/app/page.tsx

import React from 'react';
import './globals.css';
import { AuroraBackground } from '../components/ui/aurora-background';
import Navbar from '../components/ui/Navbar';

const MyApp: React.FC = () => {
  return (
    <>
      <AuroraBackground>
      <Navbar />
      
        <main className="mt-24 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-black dark:text-white mt-10 ml-0">
            Our Creations
          </h1>
        </main>
      </AuroraBackground>
    </>
  );
};

export default MyApp;
