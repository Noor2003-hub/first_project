import React from 'react';
import config from '@payload-config';
import { getPayload } from 'payload';
import Image from 'next/image';
import Link from 'next/link';

export default async function FooterServer() {
  const payload = await getPayload({ config });
  const footer = await payload.findGlobal({
    slug: 'footer'
  });

  return (
    <header className="bg-blue-400 border-t-blue-600 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Left side: Logo */}
        <div className="flex items-center space-x-4">
          <div className="relative w-30 h-30">
            <Image src={footer.logo.url} alt={footer.logo.alt} fill className="object-contain" />
          </div>
          
        </div>
        <nav className=' text-lg hover:underline'>
            {footer.copyrightNotice}
        </nav>

        {/* Right side: Nav */}
        <nav className="flex space-x-8">
          {footer.nav.map((item, index) => (
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
