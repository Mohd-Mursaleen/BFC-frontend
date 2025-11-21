import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

// Import images from assets folder
import img1 from '../../assets/photo/img1.jpeg'
import img2 from '../../assets/photo/img2.jpeg'
import img3 from '../../assets/photo/img3.jpeg'
import img4 from '../../assets/photo/img4.jpeg'
import img5 from '../../assets/photo/img5.jpeg'
import img6 from '../../assets/photo/img6.jpeg'
import img7 from '../../assets/photo/img7.jpeg'
import img8 from '../../assets/photo/img8.jpeg'
import img9 from '../../assets/photo/img9.jpeg'
import img10 from '../../assets/photo/img10.jpeg'
import img11 from '../../assets/photo/img11.jpeg'

let img12 = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyss7o07ZmYKtd1T47o3ixJA8lWOASwVIJj0sO4PxTCHglfM7meX4eEJF0UoAZ3SbXGXvwGp7Mcvfbxaj4cA9eA5a94_PRatkdgWV_qx0kgVGavvUdaKzCZanEzzeLQ4sk6_uXpzw=s1360-w1360-h1020-rw"
let img13 = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwIIUYUyz46hVhPMpb9Ba8K7DrLu-vtF1alB0-rau9qhTlPfTZ4miUmS-kOTT2Z3jgK04G-2jRb5E8cS6LaRRwxj94jLKiKLGKnymSy6Iw0Rbb4JRIS7PnHrTXZ2DraoGF3--oAfA=s1360-w1360-h1020-rw"
let img14 = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwaICe4oWC0dDUrFJFmlK_Wuwd7F2h1Zx6u3cIESOrElH2kBlzb6LZy_9frZtbQ0w-P0d9mhjbwg9mMlQZKYt4B6AuipdcP33IhIVX1M01L_tZdJA5OFUjHgmulxUTQ4JwqQ3xLzg=s1360-w1360-h1020-rw"
let img15 = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzxOMJXZptRfFoVyx4UJM32n_HwzEUrNyrTNzoV6y4Gv95cNNCtqD0p4i995RP-4Ia5f8u3_j_k9g1lKwtlONBzPWx4VdWAVhB_gLNirdWu8gKx9-RCntbvl1RAZdXbaLFtSpvxtA=s1360-w1360-h1020-rw"
let img16 = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy7sbcVypx1VEl_rhZTR6xL6ARxRvnaixkbWBhbRciSnFcpb43CBgRtqoGFNIu5ZtEUmnkAXBLc5D7Qaazjlu6sctza_LdvvxdJZzB2i45rIOEWvOf5MSc95eNQ_miUms9NmVOFfA=s1360-w1360-h1020-rw"
let img17 = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy_R6cwzixz-HE0STmQvZ48CpK6i52ErAdiu5TaG-Sm6j6AcbMBNAkA5SgM7icdnO_3qnTgH4IclcgJB3AEpMgTssIQi8SIE1T4fHoomyOfRrTr1yFDt4XYRDtwzLnJvuHnA3Xu=s1360-w1360-h1020-rw"


const images = [
  img1, img2, img3, img4, img5, img6, 
  img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17
]

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [0, distance])
}

const ImageCard = ({ src, index, onClick }) => {
  return (
    <motion.div
      layoutId={`image-${index}`}
      onClick={onClick}
      className="relative w-full mb-6 overflow-hidden rounded-lg cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-900">
        <img
          src={src}
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-bfc-yellow/20 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  )
}

const Column = ({ images, y, onClick }) => {
  return (
    <motion.div style={{ y }} className="flex flex-col w-full">
      {images.map((src, i) => (
        <ImageCard key={i} src={src} index={i} onClick={() => onClick(src)} />
      ))}
    </motion.div>
  )
}

const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:-top-12 md:right-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-50"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src={image}
          alt="Full size"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </motion.div>
    </motion.div>
  )
}

export const DemoVariant1 = () => {
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useParallax(scrollYProgress, -100)
  const y2 = useParallax(scrollYProgress, 100)
  const y3 = useParallax(scrollYProgress, -50)
  const y4 = useParallax(scrollYProgress, 50)

  // Split images into 4 columns
  const col1 = images.filter((_, i) => i % 4 === 0)
  const col2 = images.filter((_, i) => i % 4 === 1)
  const col3 = images.filter((_, i) => i % 4 === 2)
  const col4 = images.filter((_, i) => i % 4 === 3)

  return (
    <div ref={containerRef} className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Column images={col1} y={y1} onClick={setSelectedImage} />
        <Column images={col2} y={y2} onClick={setSelectedImage} />
        <Column images={col3} y={y3} onClick={setSelectedImage} />
        <Column images={col4} y={y4} onClick={setSelectedImage} />
      </div>

      <AnimatePresence>
        {selectedImage && (
          <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

