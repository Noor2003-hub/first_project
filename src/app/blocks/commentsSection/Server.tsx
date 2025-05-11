'use client'
import Rating from '@/app/(frontend)/components/Rating'
import React, { useRef } from 'react'

type Comment = {
  name: string
  comment: string
  rating: number
}

type Props = {
  title: string
  comments: Comment[]
}

const CommentsSectionServer: React.FC<Props  & { locale?: string }> = ({ title, comments,locale }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="my-16">
      <div className='flex flex-row justify-between px-40 py-10'>
        <h2 className="text-5xl font-extrabold text-center mb-8">{title}</h2>
        <div className="flex items-center justify-center gap-4 mb-4">
  {locale === 'ar' ? (
    <>
      <button onClick={() => scroll('right')} className="text-5xl">→</button>
      <button onClick={() => scroll('left')} className="text-5xl">←</button>
    </>
  ) : (
    <>
      <button onClick={() => scroll('left')} className="text-5xl">←</button>
      <button onClick={() => scroll('right')} className="text-5xl">→</button>
    </>
  )}
</div>

      </div>

      

      {/* Relative container to host scroll + overlay */}
      <div className="relative">
        {/* Left Blurred Overlay */}
        <div className="hidden lg:block absolute top-0 left-0 h-full w-[20%] z-10 pointer-events-none">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm mask-horizontal-fade"></div>
          </div>
        </div>

        {/* Right Blurred Overlay */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-[20%] z-10 pointer-events-none">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm mask-horizontal-fade-right"></div>
          </div>
        </div>

        {/* Scrollable Comments */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 px-4 scrollbar-hide scroll-smooth relative z-0"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {comments.map((c, i) => (
            <div
              key={i}
              className="card flex-shrink-0 w-[400px] rounded-4xl p-10 bg-base-100 space-y-5 border border-gray-100 scroll-snap-align-start"
            >
              <Rating rate={c.rating} haveText={false} />
              <h2 className="card-title font-bold text-xl flex items-center gap-2">
                {c.userName.name}
                <img src="/valid.png" alt="verified" />
              </h2>
              <p className="text-gray-600 text-[16px]">"{c.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommentsSectionServer
