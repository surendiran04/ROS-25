import React from "react";
import ObjectStyles from "@/utils/Objects.module.css";
import Island from "@/assets/rounds/round_2_island.webp";
import Diamond from "@/assets/rounds/diamond.webp";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";

const Round2 = ({ showCoins, showDiamond, isUnlocked, className, isDisabled }) => {
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
      transition: { type: "spring", duration: 0.8, delay: 0.4 },
    },
    float: {
      y: [0, 25, 0],
      transition: {
        duration: 6,
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
        <div className="absolute flex right-8 top-3 sm:top-4 md:top-5">
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
            } p-2 rounded-full backdrop-blur-sm aspect-square grid place-content-center cursor-not-allowed`}
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
        alt="Round 2 Island image"
        className={cn("w-full max-w-[440px]", {
          grayscale: !isUnlocked,
        })}
      />
    </motion.div>
  );
};

export default Round2;
