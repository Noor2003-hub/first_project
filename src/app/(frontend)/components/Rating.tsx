export default function Rating({ rate = 0, size = "md",haveText=true }) {
    const fullStars = Math.floor(rate);
    const hasHalf = rate % 1 >= 0.5;
    const totalStars = 5;
  
    const stars = [];
  
    for (let i = 0; i < totalStars; i++) {
      if (i < fullStars) {
        stars.push(
          <input
            key={i + "-full"}
            type="radio"
            className={`mask mask-star-2 bg-[#FFC633]`}
            readOnly
            checked
          />
        );
      } else if (i === fullStars && hasHalf) {
        stars.push(
          <input
            key={i + "-half"}
            type="radio"
            className={`mask mask-star-2 mask-half-1 bg-[#FFC633]`}
            readOnly
            checked
          />
        );
        stars.push(
          <input
            key={i + "-half-2"}
            type="radio"
            className={`mask mask-star-2 mask-half-2 bg-[#FFC633]`}
            readOnly
          />
        );
        i++; // skip next since we added both halves
      }
    }
  
    return (
        <div className="flex flex-row gap-3">
      <div className={`rating rating-${size} gap-3 pointer-events-none`}>
        {stars}
      </div>
      {haveText&& <p>{rate}/<span className="text-gray-600">5</span></p>}
      
      </div>
    );
  }
  