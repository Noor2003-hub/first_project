// components/global/Footer.tsx
import React from 'react';
import config from '@payload-config';
import { getPayload } from 'payload';
import Image from 'next/image';
import Link from 'next/link';

export default async function Footer() {
  const payload = await getPayload({ config });
  const footer = await payload.findGlobal({ slug: 'footer' });

  return (
    <footer className="bg-[#F0F0F0] pt-16 px-6">
      <div className="w-full px-40 mx-auto space-y-12">

        {/* Top Section */}
        <div className="mt-20 flex flex-row justify-between">
          {/* Logo + Description + Socials */}
          <div className="  space-y-10 mr-10 col-span-2">
            <div className='w-full'>
              
            </div>
            {footer.aboutSection.logo?.url && (
                        <div className="relative w-50 h-10 ">
                          <Image
                            src={footer.aboutSection.logo.url}
                            alt={footer.aboutSection.logo.alt || 'Logo'}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
            <p className="text-sm text-gray-600">{footer.aboutSection.description}</p>
            
            <div className="flex flex-row space-x-4">
              {footer.aboutSection.socialLinks?.map((link, index) => (
                <div key={index} className="relative w-10 h-6">
                <Image
                  src={link.icon.url}
                  alt={link.icon.alt || 'Social icon'}
                  fill
                  className="object-contain"
                />
              </div>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {footer.linkSections?.map((section, i) => (
            <div key={i} className='mt-10 text-[16px]'>
              <h4 className="font-semibold mb-5 tracking-wider">{section.heading}</h4>
              <ul className="space-y-7 text-gray-700">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.url||'/'}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 text-sm text-gray-600 space-y-4 md:space-y-0">
          <p>{footer.bottomNote}</p>
          <div className="flex space-x-2">
            {footer.paymentIcons?.map((icon, i) => (
              <div key={i} className="relative w-10 h-6">
                <Image
                  src={icon.image.url}
                  alt={icon.altText || 'Payment icon'}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
