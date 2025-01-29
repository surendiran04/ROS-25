import React, { useContext } from "react";
import RiddleBg from "@/assets/riddle/riddle_bg.jpg";
import DemoQuiz from "./DemoQuiz";
import { LoaderContext } from "@/context/LoaderContext";
import Loader from "@/components/Loader/Loader";
import { Link } from "react-router-dom";

const Riddle = () => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  if (isLoading) return <Loader />;
  return (
    <div className="h-[100lvh] w-screen overflow-x-hidden flex justify-center align-bottom">
      <img
        src={RiddleBg}
        alt="Space Background"
        className="fixed -z-[10] h-[100lvh] w-screen object-cover"
      />
      <DemoQuiz />
      <div className="fixed bottom-5 left-5">
        <Link to="/instructions" className="flex flex-col" target="_blank">
          <button className="w-full p-4 m-1 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
            Instructions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Riddle;
