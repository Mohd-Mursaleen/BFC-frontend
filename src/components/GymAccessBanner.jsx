import { FaStar } from "react-icons/fa";

const BANNER_ITEMS = [
  "OPEN 7 DAYS A WEEK",
  "UNLIMITED GYM ACCESS",
  "SUNDAY WORKOUTS",
  "PREMIUM FACILITIES",
];

const MARQUEE_REPEAT_COUNT = 4;

function GymAccessBanner() {
  const marqueeItems = Array.from({ length: MARQUEE_REPEAT_COUNT }).flatMap(
    () => BANNER_ITEMS
  );

  return (
    <div className="bg-white text-black py-12 border-y border-gray-100 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="relative flex items-center gap-12 whitespace-nowrap animate-scroll">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800 drop-shadow-sm"
              style={{ WebkitTextStroke: "1px black" }}
            >
              {item}
            </span>
            <FaStar className="text-bfc-yellow w-8 h-8 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GymAccessBanner;

