import Image from 'next/image';
import Link from 'next/link';
import Rating from './Rating';
import Price from './Price';

export default function Card({ id,product }) {
    const imgUrl = product.images?.[0]?.image?.url;
    const originalPrice = product.price;
    const discounted = product.onsale && product.discountedPrice;
    const finalPrice = discounted ? product.discountedPrice:originalPrice;

    return(

      <div className=" bg-base-100 w-96 shadow-none">
      <figure className="p-0 m-0">
        <img
          src={imgUrl}
          alt={product.title}
          className="rounded-4xl h-[300px] w-full object-cover"
        />
      </figure>
      <div className="p-0 m-0 space-y-2">
      <h1 className="mt-4 font-semibold text-2xl text-gray-800 truncate">{product.title}</h1>
      <Rating rate={product.averageRating} size='sm' />
      <Price originalPrice ={originalPrice} finalPrice ={finalPrice}
       discounted ={discounted} discountPercentage ={product.discountPercentage}/>
      </div>
    </div>

            )
        }