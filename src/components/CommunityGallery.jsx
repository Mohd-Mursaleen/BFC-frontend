import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import img6 from "../assets/photo/img6.jpeg";
import img10 from "../assets/photo/img10.jpeg";
import img11 from "../assets/photo/img11.jpeg";
import img7 from "../assets/photo/img7.jpeg";
import img8 from "../assets/photo/img8.jpeg";

const images = [
  { src: img7, alt: "Gym Community 1" },
  { src: img10, alt: "Gym Community 2" },
  { src: img11, alt: "Gym Community 3" },
  { src: img6, alt: "Gym Community 4" },
  { src: img8, alt: "Gym Community 5" },
  { src: img7, alt: "Gym Community 6" }, // Duplicate for seamless loop
  { src: img10, alt: "Gym Community 7" },
  { src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzxOMJXZptRfFoVyx4UJM32n_HwzEUrNyrTNzoV6y4Gv95cNNCtqD0p4i995RP-4Ia5f8u3_j_k9g1lKwtlONBzPWx4VdWAVhB_gLNirdWu8gKx9-RCntbvl1RAZdXbaLFtSpvxtA=s1360-w1360-h1020-rw", alt: "Gym Community 8" },
  { src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwaICe4oWC0dDUrFJFmlK_Wuwd7F2h1Zx6u3cIESOrElH2kBlzb6LZy_9frZtbQ0w-P0d9mhjbwg9mMlQZKYt4B6AuipdcP33IhIVX1M01L_tZdJA5OFUjHgmulxUTQ4JwqQ3xLzg=s1360-w1360-h1020-rw", alt: "Gym Community 9" },
  { src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwIIUYUyz46hVhPMpb9Ba8K7DrLu-vtF1alB0-rau9qhTlPfTZ4miUmS-kOTT2Z3jgK04G-2jRb5E8cS6LaRRwxj94jLKiKLGKnymSy6Iw0Rbb4JRIS7PnHrTXZ2DraoGF3--oAfA=s1360-w1360-h1020-rw", alt: "Gym Community 10" },
];

function CommunityGallery() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  // pixels per second
  const speed = 80;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Ensure natural immediate positioning
    el.scrollLeft = 0;

    let rafId;
    let last = performance.now();

    const step = (now) => {
      const dt = now - last;
      last = now;
      if (!isPaused) {
        // Move scrollLeft by speed (px/s)
        el.scrollLeft += (speed * dt) / 1000;
        // When we've scrolled past half of the scrollWidth (since we duplicated the list), wrap-around
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-4"
          >
            Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-bfc-yellow to-yellow-600">Tribe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 font-medium max-w-2xl mx-auto"
          >
            More than just a gym. It's a lifestyle.
          </motion.p>
      </div>

      {/* Marquee Container: JS-driven continuous scroll for seamless circular effect */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="relative w-full overflow-x-auto overflow-y-hidden no-scrollbar touch-pan-x"
        style={{ scrollBehavior: "auto" }}
      >
        <div className="flex gap-6 min-w-max px-4">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="relative w-[300px] md:w-[400px] h-[400px] flex-shrink-0 rounded-2xl overflow-hidden group transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-bfc-yellow font-bold uppercase tracking-wider text-lg">
                  #BFCFamily
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityGallery;
