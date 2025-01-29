import React, { useState, useEffect } from "react";
import { cn } from "@/utils/utils";

const CountdownTimer = ({ targetTime, onTimeUp }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetTime).getTime() - +new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      // Check if time is up and call onTimeUp callback
      if (updatedTimeLeft.minutes === 0 && updatedTimeLeft.seconds === 0) {
        clearInterval(timer);
        onTimeUp();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const padWithZero = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="w-full">
      <div
        className={cn(
          "rounded-full border border-violet-300/20 px-4 py-2 md:px-8 lg:py-2.5 bg-black/50 backdrop-blur-md w-fit mx-auto my-3 flex flex-grow-0 text-3xl md:text-4xl min-[1100px]:text-5xl leading-none tracking-widest font-bold font-title",
          { "text-emerald-300": timeLeft.minutes > 15 },
          { "text-orange-200": timeLeft.minutes <= 15 && timeLeft.minutes > 5 },
          { "text-red-400": timeLeft.minutes <= 5 }
        )}
      >
        <span>{padWithZero(timeLeft.minutes)} </span>
        <span className="mx-2 sm:mx-4">:</span>
        {<span>{padWithZero(timeLeft.seconds)}</span>}
      </div>
    </div>
  );
};

export default CountdownTimer;
