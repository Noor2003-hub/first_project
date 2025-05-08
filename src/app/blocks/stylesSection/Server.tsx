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
      <div className='px-40'>
      <section className="bg-[#F0F0F0] p-20 rounded-4xl">
  <h2 className="text-6xl font-extrabold text-center py-10">{title}</h2>
  <div className="flex flex-col md:grid md:grid-cols-3 gap-6 p-4">
  {styles.map((style, i) => (
      <div
        key={i}
        className={`item${i + 1} relative bg-cover bg-center w-full h-[289px] rounded-4xl overflow-hidden`}
        style={{ backgroundImage: `url(${style.cover?.url || '/default.png'})` }}
        >
        <div className="absolute top-10 left-10 text-black px-2 py-1 font-bold text-4xl rounded">
          {style.name}
        </div>
      </div>
    ))}
  </div>
</section>

      </div>
    
  )
}

export default StylesSectionServer
