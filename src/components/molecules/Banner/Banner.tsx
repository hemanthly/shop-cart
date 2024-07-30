'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <Image
        src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e58c0997219ec01eb6_background-bg-min.png"
        alt="Shopping Banner Background"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0  pl-6">
        <div className="container mx-auto h-full flex flex-col justify-center px-4">
          <motion.h1 
            className="text-5xl font-bold mb-4 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shopping And<br />Department Store.
          </motion.h1>
          <motion.p 
            className="text-xl text-primary mb-6 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
          </motion.p>
          <motion.button 
            className="bg-green-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;