export default function Price({originalPrice = 10, finalPrice = 5, discounted = true, discountPercentage = 50}){
  
    return(
        <div className="mt-2 space-x-3 text-4xl font-bold text-gray-900">
            {finalPrice ? (
                <>
                ${finalPrice}
                {discounted && (
                    <>
                    <span className="line-through ml-2 text-gray-400 text-3xl">${originalPrice}</span>
                    <div className="badge badge-soft text-[#FF3333] text-lg rounded-full bg-[#FF33331A] badge-error p-5">-{discountPercentage}%</div>
                    {/* <span className="text-red-500 ml-2 text-sm">
                        -{discountPercentage}%
                    </span> */}
                    </>
                )}
                </>
            ) : (
                <span className="text-red-500 text-sm">Price not available</span>
            )}
            </div>
    )
}