import Card from '../components/Card'
import Image from 'next/image'

const imgUrl = '/shirt.png'
const originalPrice = 10
const averageRating = 3.5
const finalPrice = 5
const title = 'shirt1'
const discounted = true
const discountPercentage = 50
export default async function ExamplePage() {
  return (
    <div className="w-50">
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={title}
          width={300}
          height={300}
          className="mx-auto h-[240px]  object-contain"
        />
      )}
      <h3 className="mt-4 font-semibold text-sm text-gray-800">{title}</h3>
      <div className="flex items-center justify-center gap-1 text-yellow-400 text-sm mt-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < Math.round(averageRating ?? 0) ? '★' : '☆'}</span>
        ))}
        <span className="ml-1 text-gray-600 text-xs">{(averageRating ?? 0).toFixed(1)}</span>
      </div>
      <div className="mt-2 text-lg font-bold text-gray-900">
        {finalPrice ? (
          <>
            ${finalPrice}
            {discounted && (
              <>
                <span className="line-through ml-2 text-gray-400 text-sm">${originalPrice}</span>
                <span className="text-red-500 ml-2 text-sm">-{discountPercentage}%</span>
              </>
            )}
          </>
        ) : (
          <span className="text-red-500 text-sm">Price not available</span>
        )}
      </div>
    </div>
  )
}
