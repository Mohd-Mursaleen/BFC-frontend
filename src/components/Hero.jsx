import {useEffect, useState} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import videoBg from "../assets/Hero_Video.mp4";
import { FaWhatsapp } from "react-icons/fa";

function Hero({allowReveal = true}) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!allowReveal) return;

    const contentTimer = window.setTimeout(() => setShowContent(true), 100);
    return () => window.clearTimeout(contentTimer);
  }, [allowReveal]);

  useEffect(() => {
    if (!allowReveal || !isVideoReady) return;

    const frame = window.requestAnimationFrame(() => setShowVideo(true));
    return () => window.cancelAnimationFrame(frame);
  }, [allowReveal, isVideoReady]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`hero-video absolute top-0 left-0 w-full h-full object-cover z-0 ${
          showVideo ? "hero-video--visible" : ""
        }`}
        onCanPlay={() => setIsVideoReady(true)}
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Gradient Overlay (Scrim) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80 z-10"></div>

      {/* Content */}
      <div
        className={`hero-content relative z-20 max-w-5xl mx-auto px-4 text-center mt-[102px] ${
          showContent ? "hero-content--visible" : ""
        }`}
      >
        <h2 className="text-bfc-yellow font-display font-bold tracking-widest text-lg md:text-xl mb-4 uppercase">
          Bengaluru Fitness Connection
        </h2>
        
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-none mb-6 text-white uppercase tracking-tight">
          Unleash Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">True Potential</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto font-medium tracking-wide">
          Experience world-class training, premium equipment, and a supportive community that pushes you further.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/918050022645"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-bfc-yellow text-black border-2 border-bfc-yellow py-4 px-10 text-lg font-display font-bold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-black hover:text-white hover:border-bfc-yellow hover:shadow-[0_0_30px_rgba(244,196,48,0.4)] rounded-full overflow-hidden z-10 flex items-center gap-2 group"
          >
            <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
            <span className="relative z-20">Start Your Journey</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
