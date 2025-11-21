import { useMemo, useState } from 'react'
import img6 from '../assets/photo/img6.jpeg'
import img7 from '../assets/photo/img7.jpeg'
import img8 from '../assets/photo/img8.jpeg'
import img9 from '../assets/photo/img9.jpeg'
import img10 from '../assets/photo/img10.jpeg'
import img11 from '../assets/photo/img11.jpeg'
import { FaWhatsapp } from 'react-icons/fa'

const images = [
  { src: img6, alt: 'The Ivory Reformer' },
  { src: img7, alt: 'Pilates Instruction Session' },
  { src: img8, alt: 'Home Workout Class' },
  { src: img9, alt: 'Modern Pilates Studio' },
  { src: img10, alt: 'Outdoor Pilates' },
  { src: img11, alt: 'Luxury Studio Pilates' },
]

function ConnectSection() {
  const galleryImages = useMemo(() => images, [])
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section className="w-full bg-white py-8 md:py-12">
        {/* Header */}
        <div className="w-full px-5 text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-6">
            <span className="text-gray-900">CONNECT WITH US</span>{' '}
            <span className="text-gray-600">@BFC</span>
          </h2>
          
          <a 
            href="https://wa.me/918050022645"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Image Grid - Horizontal Scroll on Mobile */}
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none no-scrollbar">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden group min-w-[280px] md:min-w-0 h-[300px] md:h-64 snap-center cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2 md:h-[530px]" : ""
              }`}
              onClick={() => openModal(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal/Enlarged Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ConnectSection
