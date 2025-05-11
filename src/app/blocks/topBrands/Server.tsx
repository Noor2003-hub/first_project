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
    <div className="bg-black">
      <div className=" flex flex-wrap justify-center items-center gap-1">
      {topBrands.map((brand) => (
        <div key={brand.name} className="w-20 mx-1 h-20 justify-center items-center relative sm:mx-20 sm:h-50 sm:w-50">
          <Image
            src={brand.logo.url}
            alt={brand.logo.alt}
            fill
            className="object-contain"
          />
        </div>
      ))}
      </div>
    </div>
  );
};

export default TopBrandsServer;
