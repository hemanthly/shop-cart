import React from 'react';
import Image from 'next/image';
import { LogoProps } from './logo.types';

const Logo: React.FC<LogoProps> = ({ imageUrl, altText }) => {
  return (
    <div className="relative h-8 w-32 sm:h-10 sm:w-32"> 
      <Image
        src={imageUrl}
        alt={altText}
        fill
        style={{objectFit: "contain"}}
      />
    </div>
  );
};

export default Logo;