import React from 'react'
import { DemoVariant1 } from './blocks/animated-gallery-demo'
import SEO from "./SEO";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <SEO 
        title="Gallery"
        description="Explore our state-of-the-art gym facilities, equipment, and community photos. See what makes BFC the best place to workout in Bengaluru."
        keywords="gym photos, fitness center gallery, workout images, bfc gallery"
      />
      
      {/* Cinematic Header */}
      <div className="relative w-full py-32 px-4 md:px-8 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bfc-yellow/5 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-800/20 rounded-full blur-[120px] mix-blend-screen" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-bfc-yellow font-bold tracking-[0.5em] uppercase text-sm md:text-base mb-6 animate-fade-in-up">
                Visual Experience
            </h2>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-none mb-8">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">BFC</span> Vibe
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light tracking-wide">
                Where raw energy meets premium design. Witness the atmosphere that drives results.
            </p>
        </div>
      </div>

      <div className="relative z-20 pb-20 px-4 sm:px-6 lg:px-8">
           <DemoVariant1 />
      </div>
    </div>
  )
}

export default Gallery

