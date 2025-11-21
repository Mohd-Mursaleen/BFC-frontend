import {useMemo} from "react";

const BANNER_ITEMS = [
  "PERSONAL TRAINING",
  "WEIGHT MANAGEMENT",
  "WEIGHT LOSS",
  "DIET COUNSELING FROM EXPERT COACH",
];

function DietServicesBanner() {
  const marqueeItems = useMemo(() => [...BANNER_ITEMS, ...BANNER_ITEMS], []);

  return (
    <section className="bg-white text-black py-10 border-y-4 border-bfc-yellow overflow-hidden">
      <div className="flex items-center gap-12 whitespace-nowrap animate-diet-scroll-reverse">
        {marqueeItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export default DietServicesBanner;
