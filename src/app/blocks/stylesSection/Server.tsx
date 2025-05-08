import React from 'react'

type Style = {
  title: string
  image: {
    url: string
    alt?: string
  }
}

type Props = {
  title: string
  styles: Style[]
}

const StylesSectionServer: React.FC<Props> = ({ title, styles }) => {
  console.log('styles in server:',styles)
    return (
      <>
      <section className="bg-gray-100 p-20 rounded-3xl">
  <h2 className="text-5xl font-extrabold text-center mb-8">{title}</h2>
  <div className="flex flex-col md:grid md:grid-cols-3 gap-6 bg-[#F0F0F0] rounded-4xl p-4">
  {styles.map((style, i) => (
      <div
        key={i}
        className={`item${i + 1} relative bg-cover bg-center w-full h-[289px] rounded-lg overflow-hidden`}
        style={{ backgroundImage: `url(${style.cover?.url || '/default.png'})` }}
        >
        <div className="absolute top-2 left-2 text-black px-2 py-1 font-bold text-3xl rounded">
          {style.name}
        </div>
      </div>
    ))}
  </div>
</section>

      </>
    
  )
}

export default StylesSectionServer
