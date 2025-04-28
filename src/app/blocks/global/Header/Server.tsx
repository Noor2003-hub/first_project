import React from 'react';
import config from '@payload-config';
import { getPayload } from 'payload';
import Image from 'next/image';
import Link from 'next/link';

export default async function HeaderServer() {
  const payload = await getPayload({ config });
  const header = await payload.findGlobal({
    slug: 'header'
  });

  return (
    <header className="bg-blue-400 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Left side: Logo */}
        <div className="flex items-center space-x-4">
          <div className="relative w-30 h-30">
            <Image src={header.logo.url} alt={header.logo.alt} fill className="object-contain" />
          </div>
          
        </div>

        {/* Right side: Nav */}
        <nav className="flex space-x-8">
          {header.nav.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-white text-lg hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
