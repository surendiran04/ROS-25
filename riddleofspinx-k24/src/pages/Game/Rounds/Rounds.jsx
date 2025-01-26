import React from "react";
import RoundsBg from "@/assets/rounds/rounds_bg.jpg";
import Logo from "@/assets/logo.png"
import Round1 from "./components/Round1";
import Round2 from "./components/Round2";
import { Link } from "react-router-dom";
import { cn } from "@/utils/utils";

const Rounds = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <img
        src={RoundsBg}
        alt="Space Background"
        className="fixed -z-[10] h-[100lvh] w-screen object-cover opacity-90"
      />
      <div>
        <div className="flex items-center justify-center mt-16 sm:mt-0">
          <img className="sm:h-40 h-20" src={Logo} alt="Riddle of The Sphinx" />
        </div>
      </div>
      <div className="pb-16">
        <div className="md:pl-8 lg:pl-16 xl:pl-20 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 max-w-6xl mx-auto place-content-center">
          <div className="grid place-content-center">
            <div
              // to={true ? "/rounds/round1" : ""}
              className={cn(
                "group relative cursor-not-allowed lg:mt-28 lg:mr-40 max-w-sm aspect-square grid place-content-center rounded-full before:absolute before:inset-0 before:z-[-1] before:rounded-full before:bg-gradient-to-br from-[#ae00ff] to-[#ffab6e] before:opacity-80 before:backdrop-filter before:blur-xl before:transform before:scale-0 before:rotate-12 before:translate-x-1 before:translate-y-1 before:transition-all before:duration-300 before:ease-in-out before:delay-20 hover:before:scale-[110%]",
                {
                  "from-[rgb(0,0,0)]/0 to-[rgb(0,0,0)]/0 backdrop-blur-0 cursor-not-allowed": true,
                }
              )}
            >
              <Round1 showCoins={true} isUnlocked={false} />
              <div className="absolute inset-x-0 -bottom-2 grid place-content-center">
                <span className="font-medium tracking-wide px-8 py-1 bg-slate-900/80 backdrop-blur-md border-2 border-slate-900 rounded-full text-white group-hover:text-orange-400 text-center text-2xl transition-colors">
                  Round 1
                </span>
              </div>
            </div>
          </div>

          <div className="grid place-content-center">
            <div

              // to={true ? "/rounds/round2" : ""}
              className={cn(
                "group cursor-not-allowed relative aspect-square grid place-content-center rounded-full before:absolute before:inset-0 before:z-[-1] before:rounded-full before:bg-gradient-to-br from-[#ae00ff] to-[#ffab6e] before:opacity-80 before:backdrop-filter before:blur-xl before:transform before:scale-0 before:rotate-12 before:translate-x-1 before:translate-y-1 before:transition-all before:duration-300 before:ease-in-out before:delay-20 hover:before:scale-[110%]",
                {
                  "from-[rgb(0,0,0)]/0 to-[rgb(0,0,0)]/0 backdrop-blur-0 ": true,
                }
              )}
            >
              <div className="absolute inset-x-0 -bottom-5 grid place-content-center">
                <span className="font-medium tracking-wide px-8 py-1 bg-slate-900/80 backdrop-blur-md border-2 border-slate-900 rounded-full text-white group-hover:text-orange-400 text-center text-2xl transition-colors">
                  Round 2 
                </span>
              </div>
              <Round2 showDiamond={true} isUnlocked={false} isDisabled={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 left-5 flex flex-col sm:flex-row">
        <Link to="/instructions" className="flex flex-col" target="_blank">
          <button className="w-full p-4 m-1 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
            Instructions
          </button>
        </Link>
        <Link to='/scoreboard' className="sm:mx-2">
          <button className="w-full p-4 m-1 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">ScoreBoard</button>
        </Link>
      </div>
    </div>
  );
};

export default Rounds;
