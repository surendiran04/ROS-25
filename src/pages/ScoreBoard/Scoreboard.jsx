import React, { useState } from "react";
import GoldStar from "@/assets/scoreboard/Level1.svg";
import ColorStar from "@/assets/scoreboard/Level2.svg";
import GreyStar from "@/assets/scoreboard/Level2Locked.svg";
import Fivestar from "@/assets/scoreboard/star5.svg";
import GreyFivestar from "@/assets/scoreboard/greystar5.png";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";
import bg from "@/assets/scoreboard/bermuda.jpg";
import { cn } from "@/utils/utils";
import { AuthContext } from "@/context/AuthContext";
import { useEffect, useContext } from "react";
import { LoaderContext } from "@/context/LoaderContext";
import Loader from "@/components/Loader/Loader";

export default function Scoreboard() {
  const { scoreboard, fetchScoreboard } = useContext(AuthContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  if (isLoading) return <Loader />;

  useEffect(() => {
    fetchScoreboard();
  }, []);
  // //console.log(scoreboard);
  var score1 = scoreboard[0].scorer1;
  var score2 = scoreboard[0].scorer2;
  var totalscore = parseInt(score1) + parseInt(score2);

  var fivestar1, fivestar2, fivestar3, goldstar1, goldstar2, goldstar3;
  if (score1 == "" && score2 == "") {
    fivestar1 = GreyFivestar;
    fivestar2 = GreyFivestar;
    fivestar3 = GreyFivestar;
    goldstar1 = GreyStar;
    goldstar2 = GreyStar;
    goldstar3 = GreyStar;
    score1 = score2 = 0;
    totalscore = 0;
  }
  if (score1 != "") {
    fivestar1 = Fivestar;
    fivestar2 = GreyFivestar;
    fivestar3 = GreyFivestar;
    goldstar1 = GoldStar;
    goldstar2 = GreyStar;
    goldstar3 = ColorStar;
  }
  if (score1 == "") {
    score1 = 0;
  }
  if (score2 == "") {
    score2 = 0;
  }
  if (score2 != "") {
    fivestar1 = GreyFivestar;
    fivestar3 = GreyFivestar;
    fivestar2 = Fivestar;
    goldstar1 = GreyStar;
    goldstar2 = GoldStar;
    goldstar3 = ColorStar;
  }
  if (score1 != "" && score2 != "") {
    fivestar1 = Fivestar;
    fivestar2 = Fivestar;
    fivestar3 = Fivestar;
    goldstar1 = GoldStar;
    goldstar2 = GoldStar;
    goldstar3 = ColorStar;
  }
  return (
    <div className="font-title h-[100lvh] w-screen overflow-x-hidden md:flex md:justify-center">
      <div className="fixed inset-0 bg-slate-950 -z-[20]"></div>
      <img
        src={bg}
        alt="bg_img"
        className="fixed -z-[10] h-[100lvh] w-screen opacity-30 object-cover"
      />
      <div>
        <div className="flex items-center justify-center mt-16 sm:mt-0">
          <img className="sm:h-40 h-20" src={Logo} alt="Riddle of The Sphinx" />
        </div>
        <div className="my-20 md:my-10 max-w-xl lg:max-w-7xl px-10 lg:px-8 mx-auto flex md:flex-row flex-col gap-20 md:gap-0 items-center justify-center">
          <div className="w-[clamp(200px,50vw,400px)] md:w-[22%] md:order-1 order-2 text-center mx-16 md:mt-16 flex flex-col items-center justify-center">
            <p className="mb-4 text-white font-semibold text-lg bg-indigo-400/40 backdrop-blur-sm rounded-full p-1.5 px-4 w-[70%] min-w-fit">
              ROUND&nbsp;1
            </p>
            <div
              className={cn("flex flex-col items-center relative", {
                "before:absolute before:h-full before:z-[-1] before:rounded-full before:bg-gradient-to-br from-[#e99b0b] to-[#ffab6e] before:opacity-10 before:backdrop-filter before:blur-xl before:aspect-square before:animate-pulse before:duration-5000":
                  score1 != "",
              })}
            >
              <img src={fivestar1} className="w-[clamp(200px, 33vw, 300px)]" />
              <img src={goldstar1} className="w-[clamp(200px, 33vw, 300px)]" />
            </div>
            <span className="text-white text-5xl mt-5 block font-bold">
              {score1}
            </span>
            <span className="text-white text-xl mt-1 block font-bold">
              points
            </span>
          </div>
          <div className="w-[clamp(250px,80vw,400px)] md:w-[33%] md:order-2 order-1 text-center mx-16 flex flex-col items-center justify-center">
            <p className="mb-5 text-white font-semibold text-xl lg:text-2xl bg-indigo-400/40 backdrop-blur-sm rounded-full p-2 px-4 w-[70%] sm:w-full lg:w-[75%] xl:w-[70%]">
              TOTAL SCORE
            </p>
            <div
              className={cn("relative flex flex-col items-center", {
                "before:absolute before:h-full before:z-[-1] before:rounded-full before:bg-gradient-to-br from-[#e99b0b] via-[#e20be9] to-[#49e1f5] before:opacity-10 before:backdrop-filter before:blur-xl before:aspect-square before:animate-pulse before:duration-5000":
                  totalscore != "",
              })}
            >
              <img src={fivestar3} />
              <img src={goldstar3} />
            </div>
            <span className="text-white text-6xl lg:text-7xl mt-5 block font-bold">
              {totalscore}
            </span>
            <span className="text-white text-4xl mt-1 block font-bold">
              points
            </span>
          </div>
          <div className="w-[clamp(200px,50vw,400px)] md:w-[22%] md:order-3 order-3 text-center mx-16 md:mt-16 flex flex-col items-center justify-center">
            <p className="mb-4 text-white font-semibold text-lg bg-indigo-400/40 backdrop-blur-sm rounded-full p-1.5 px-4 w-[70%] min-w-fit">
              ROUND&nbsp;2
            </p>
            <div
              className={cn("flex flex-col items-center relative", {
                "before:absolute before:h-full before:z-[-1] before:rounded-full before:bg-gradient-to-br from-[#e99b0b] to-[#ffab6e] before:opacity-10 before:backdrop-filter before:blur-xl before:aspect-square before:animate-pulse before:duration-5000":
                  score2 != "",
              })}
            >
              <img src={fivestar2} className="w-[clamp(200px, 33vw, 300px)]" />
              <img src={goldstar2} className="w-[clamp(200px, 33vw, 300px)]" />
            </div>
            <span className="text-white text-5xl mt-5 block font-bold">
              {score2}
            </span>
            <span className="text-white text-xl mt-1 block font-bold">
              points
            </span>
          </div>
        </div>

        <div className="fixed bottom-5 left-5 flex flex-col sm:flex-row">
          <Link to="/leaderboard">
            <button className="w-full p-4 m-1 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
              LeaderBoard
            </button>
          </Link>
          <Link to="/rounds" className="sm:mx-2">
            <button className="w-full p-4 m-1 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
              Go to Rounds
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
