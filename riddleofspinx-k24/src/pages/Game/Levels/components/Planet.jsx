import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import { LoaderContext } from "@/context/LoaderContext";
import { startTimer, startTimer2, viewQuestions } from "@/api/auth";

const getHaloColor = (color) => {
  const colorMap = {
    red: "drop-shadow-[0_0_30px_rgba(239,68,68,0.75)] hover:drop-shadow-[0_0_50px_rgba(239,68,68,1)]",
    blue: "drop-shadow-[0_0_30px_rgba(96,165,250,0.75)] hover:drop-shadow-[0_0_50px_rgba(96,165,250,1)]",
    orange:
      "drop-shadow-[0_0_30px_rgba(251,146,60,0.75)] hover:drop-shadow-[0_0_50px_rgba(251,146,60,1)]",
    green:
      "drop-shadow-[0_0_30px_rgba(74,222,128,0.75)] hover:drop-shadow-[0_0_50px_rgba(74,222,128,1)]",
    yellow:
      "drop-shadow-[0_0_30px_rgba(253,224,71,0.75)] hover:drop-shadow-[0_0_50px_rgba(253,224,71,1)]",
    purple:
      "drop-shadow-[0_0_30px_rgba(192,132,252,0.75)] hover:drop-shadow-[0_0_50px_rgba(192,132,252,1)]",
    emerald:
      "drop-shadow-[0_0_30px_rgba(52,211,153,0.75)] hover:drop-shadow-[0_0_50px_rgba(52,211,153,1)]",
    pink: "drop-shadow-[0_0_30px_rgba(255,105,180,0.75)] hover:drop-shadow-[0_0_50px_rgba(255,105,180,1)]",
  };
  return colorMap[color];
};

const Planet = ({
  round,
  planet,
  color,
  level,
  top,
  planetSize,
  left,
  onClick,
  isDisabled,
  isCompleted,
}) => {
  const url = window.location.pathname.split("/");
  const variants = {
    hidden: {
      y: 5000,
      opacity: 0,
      scale: 0.2,
    },
    entry: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 0.8, delay: level * 0.2 },
    },
    float: {
      y: [0, level % 2 == 0 ? -10 : 10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: level * 0.2,
      },
    },
  };

  const { clickedPlanets, addClickedPlanet } = useContext(LoaderContext);

  const handleClick = async (level) => {
    if (!isDisabled)
      url[2] == 'round1' ? await startTimer() : await startTimer2();

  };
  //console.log(isDisabled, level);
  return (
    <motion.div
      initial={"hidden"}
      animate={["entry", "float"]}
      variants={variants}
      onClick={onClick}
      className="col-span-1 relative w-full min-h-[180px] h-[20vh]"
    >
      {isDisabled ? (
        <div
          className={cn(
            "absolute",
            top,
            left,
            planetSize,
            "max-w-[150px] md:max-w-none min-w-[90px] group"
          )}
        >
          <img
            src={planet}
            alt={`Level ${level}`}
            className={cn("object-fill transition-all grayscale cursor-not-allowed")}
          />
        </div>
      ) : (
        <Link
          to={`/rounds/round${round}/level${level}`}
          className={cn(
            "absolute",
            top,
            left,
            planetSize,
            "max-w-[150px] md:max-w-none min-w-[90px] group"
          )}
        >
          <img
            src={planet}
            alt={`Level ${level}`}
            className={cn("object-fill transition-all", getHaloColor(color))}
            onClick={() => handleClick(level)}
          />
        </Link>
      )}
    </motion.div>
  );
};

export default Planet;
