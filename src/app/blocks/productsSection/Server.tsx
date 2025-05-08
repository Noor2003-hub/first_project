import ButtonCustom from '@/app/(frontend)/components/ButtonCustom';
import Card from '@/app/(frontend)/components/Card';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsSectionServer({ title,products }) {
  return (
<section className="space-y-4">
  <h2 className="text-5xl py-20 font-extrabold text-center mb-8">{title}</h2>

  <div className="overflow-scroll flex justify-center scrollbar-hide">
    <div className="flex gap-6 min-w-max">
      {products.map((product) => (
        <div key={product.id} className="w-[300px] h-auto shrink-0">
          <Card product={product} />
        </div>
      ))}
    </div>
  </div>


  <div className="flex justify-center mb-20 w-full">
    <div className= " w-3/4 md:w-1/9">
    <ButtonCustom title="View All" href="/" theme="light" /></div>
  </div>
</section>
  );
}
