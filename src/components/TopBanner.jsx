import {useMemo} from "react";

const BANNER_ITEMS = [
  "OPEN 7 DAYS A WEEK",
  "UNLIMITED ACCESS TO THE GYM",
  "NO LOCK-IN PERIODS",
  "NO HIDDEN FEES",
];

const MARQUEE_REPEAT_COUNT = 3;

function TopBanner() {
  const marqueeItems = useMemo(
    () =>
      Array.from({length: MARQUEE_REPEAT_COUNT}).flatMap(() => BANNER_ITEMS),
    []
  );

  return (
    <div className="fixed top-0 left-0 right-0 bg-black text-white py-2 overflow-hidden z-50 h-8">
      <div className="flex items-center gap-8 whitespace-nowrap animate-scroll">
        {marqueeItems.map((item, index) => (
          <span key={index} className="text-xs font-normal flex-shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TopBanner;
