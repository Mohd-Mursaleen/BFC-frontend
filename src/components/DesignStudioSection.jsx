import { useMemo } from 'react'
import image1 from '../assets/photo/img7.jpeg'

function DesignStudioSection() {
  // Memoize image source to prevent recreation
  const imageSrc = useMemo(() => image1, [])

  return (
    <section className="w-full min-h-[600px] flex flex-col md:flex-row bg-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-[500px] md:h-auto overflow-hidden">
        <img
          src={imageSrc}
          alt="Pilates reformers in studio and home setting"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8 md:px-16 py-16 md:py-24">
        <div className="max-w-lg">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 uppercase tracking-tight leading-tight">
            DESIGNED FOR STUDIOS
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 uppercase tracking-tight leading-tight">
            PERFECT FOR HOMES
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Improve your well-being by creating a Pilates space at home.
          </p>
          <button className="bg-gray-900 text-white border-none py-4 px-10 text-base font-semibold cursor-pointer transition-all uppercase tracking-wider hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg">
            Shop now
          </button>
        </div>
      </div>
    </section>
  )
}

export default DesignStudioSection

