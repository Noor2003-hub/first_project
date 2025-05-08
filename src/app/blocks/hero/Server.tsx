import React from 'react';
import Image from 'next/image';
import ButtonCustom from '@/app/(frontend)/components/ButtonCustom';

interface HeroProps {
  layouts: {
    blockType: string;
    content?: {
      root: {
        children: any[];
      };
    };
    img?: {
      url: string;
      alt?: string;
    };
  }[];
  records: {
    title: string;
    record: number;
  }[];
}

const HeroServer: React.FC<HeroProps> = ({ layouts, records }) => {
  const richText = layouts.find((l) => l.blockType === 'richText')?.content?.root?.children || [];
  const image = layouts.find((l) => l.blockType === 'image')?.img;

  return (
<section className="bg-[#F2F0F1] px-10 md:px-40">
  <div className="flex flex-col  md:flex-row items-stretch justify-between gap-12">
    {/* LEFT SIDE */}
    <div className="w-full  pb-10 md:w-1/2 space-y-5 text-center md:text-left h-full min-h-[400px] md:min-h-[500px] flex flex-col justify-between">
      <div className="space-y-5">
        {richText.map((block, idx) => {
          const text = block.children?.map((c) => c.text).join(' ');
          if (block.type === 'heading') {
            return (
              <h1
                key={idx}
                className="text-[32px] mt-20 mr-10 leading-tight md:text-[64px] md:leading-[72px] font-bold tracking-tight text-black"
              >
                {text}
              </h1>
            );
          } else if (block.type === 'paragraph') {
            return (
              <p
                key={idx}
                className="text-gray-600 text-base md:text-lg leading-relaxed md:max-w-[480px] mx-auto md:mx-0"
              >
                {text}
              </p>
            );
          }
          return null;
        })}
      </div>

      <div>
        <ButtonCustom title="Shop Now" href="/shop" theme="dark" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:flex sm:flex-row mt-8">
        {records.map((stat, i) => (
          <div
            key={i}
            className={`text-center sm:text-left ${
              i === 2 ? 'col-span-2 justify-self-center sm:col-span-1 sm:justify-self-auto' : ''
            } ${i !== 0 ? 'sm:border-l sm:pl-6' : ''}`}
            style={i !== 0 ? { borderColor: '#0000001A', borderLeftWidth: '1px' } : {}}
          >
            <div className="text-[40px] font-bold text-black">{stat.record.toLocaleString()}+</div>
            <div className="text-gray-500 text-sm">{stat.title}</div>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE - IMAGE */}
    {image?.url && (
      <div className="relative w-full h-[400px] md:w-1/2 md:min-h-[600px]">
      <Image
          src={image.url}
          alt={image.alt || 'Hero Image'}
          fill
          className="object-cover"
          priority
        />
      </div>
    )}
  </div>
</section>

  );
};

export default HeroServer;
