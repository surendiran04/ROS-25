import React from "react";
import Profiles from "./profiles";
import { Leaderboard } from "@/constants/database";
import Logo from "@/assets/logo.png";
import bg from "@/assets/loginpage/BG.jpg";
import { useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { LoaderContext } from "@/context/LoaderContext";
import Loader from "@/components/Loader/Loader";
// import './styles.css'

export default function Board() {
  const { leaderboard, fetchLeaderboard } = useContext(AuthContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  if (isLoading) return <Loader />;
  useEffect(() => {
    fetchLeaderboard();
  }, {});
  //console.log(leaderboard);
  return (
    <div>
      <img
        src={bg}
        alt="bg_img"
        className="fixed h-screen object-cover w-full -z-10 opacity-90"
      />
      <div className="fixed inset-0 bg-slate-950 -z-[20]"></div>
      <div className="flex items-center justify-center pt-16 sm:pt-0">
        <img className="sm:h-40 h-20" src={Logo} alt="Riddle of The Sphinx" />
      </div>
      <h1 className="pt-5 mb-10 font-title font-bold text-white text-2xl sm:4xl lg:text-5xl flex justify-center uppercase">
        LeaderBoard
      </h1>
      <Profiles Leaderboard={leaderboard} />
    </div>
  );
}
// between(Leaderboard);
// function between(data) {
//     return data.sort((a, b) => {
//         if (a.score === b.score) {
//             return b.score - a.score;
//         } else {
//             return b.score - a.score;
//         }
//     })
// }
