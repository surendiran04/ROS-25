import React from "react";
import ObjectStyles from "@/utils/Objects.module.css";
import Island from "@/assets/rounds/round_1_island.webp";
import Diamond from "@/assets/rounds/diamond.webp";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";

const Round1 = ({ showCoins, showDiamond, isUnlocked, className }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 500,
      scale: 0.5,
    },
    entry: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 0.8, delay: 0.2 },
    },
    float: {
      y: [0, 25, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={["entry", "float"]}
      variants={variants}
      className={cn("relative", className)}
    >
      {showCoins && (
        <div className="absolute flex right-0 min-[500px]:right-2 2xl:right-6 -top-4 2xl:-top-2">
          <span className={ObjectStyles.coin}></span>
          <span className={ObjectStyles.coin}></span>
          <span className={ObjectStyles.coin}></span>
        </div>
      )}
      {showDiamond && (
        <div className="absolute flex gap-2 right-1/2 translate-x-2/3 -top-2">
          <div
            className={`${
              isUnlocked ? ObjectStyles.diamond : ""
            } p-2 rounded-full backdrop-blur-sm aspect-square grid place-content-center`}
          >
            <img
              src={Diamond}
              alt="Diamond"
              className={cn("h-10 min-[420px]:h-12 md:h-14", {
                grayscale: !isUnlocked,
              })}
            />
          </div>
        </div>
      )}
      <img
        src={Island}
        alt="Round 1 Island image"
        className={cn("w-full max-w-[280px] min-[420px]:max-w-none", {
          grayscale: !isUnlocked,
        })}
      />
    </motion.div>
  );
};

export default Round1;
