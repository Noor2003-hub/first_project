// components/blocks/topBrands/Server.tsx
import Image from 'next/image';
import React from 'react';

type TopBrandsProps = {
  topBrands: {
    name: string;
    logo: {
      url: string;
      alt?: string;
    };
  }[];
};

const TopBrandsServer: React.FC<TopBrandsProps> = ({ topBrands }) => {
  if (!topBrands || topBrands.length === 0) return null;

  return (
    <div className="bg-black flex flex-wrap justify-center items-center sm:justify-start gap-4">
      {topBrands.map((brand) => (
        <div key={brand.name} className="w-30 mx-3 h-30 justify-center items-center relative sm:mx-20 sm:h-50 sm:w-50">
          <Image
            src={brand.logo.url}
            alt={brand.logo.alt}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>

  );
};

export default TopBrandsServer;
