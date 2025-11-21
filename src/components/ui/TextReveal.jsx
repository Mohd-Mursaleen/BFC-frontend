import { motion } from "framer-motion";

export const TextReveal = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ marginRight: "0.25em", display: "inline-block" }}
          className="whitespace-nowrap"
        >
          {word.split("").map((character, index) => (
            <motion.span
              style={{ display: "inline-block" }}
              variants={child}
              key={index}
            >
              {character}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};
