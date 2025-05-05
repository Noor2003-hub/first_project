'use client'

import React from 'react'

type Slide = {
  title?: string
  caption?: string
  image: {
    url: string
  }
}

export default function Slider({ slides }: { slides: Slide[] }) {
  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <img src={slide.image?.url} alt={slide.title || 'Slide'} />
          <h3>{slide.title}</h3>
          <p>{slide.caption}</p>
        </div>
      ))}
    </div>
  )
}
