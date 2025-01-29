import React from "react";
import QuestionBox from "@/assets/riddle/question_box.webp";
import RandomBar from "@/assets/riddle/random_bar.webp";
import { useMediaQuery } from "react-responsive";

const RiddleQuestion = ({ number, question }) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
  if (isLargeScreen)
    return (
      <div className="relative bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl p-1">
        {/* <img
          src={QuestionBox}
          alt="Space Background"
          className="absolute w-full h-full"
        /> */}
        <img
          src={RandomBar}
          alt=""
          className="absolute top-5 md:left-8 lg:left-12 w-[40%]"
        />
        <div className="flex items-center pb-20 pt-12 px-10 xl:px-14 bg-gray-900 rounded-xl">
          <div>
            <div className="bg-white/20 rounded-full aspect-square h-14 w-14 flex flex-col justify-center items-center drop-shadow-[0_4px_2px_rgba(0,0,0,1)]">
              <span className="font-bold text-3xl text-white leading-none">
                {number}
              </span>
            </div>
          </div>
          <div className="px-8">
            <h1
              style={{
                background:
                  "-webkit-linear-gradient(90deg, #AB4CCD 0%, #90B3DC 33%, #FFFFFF 100% )",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-white font-bold tracking-widest md:text-xl lg:text-2xl"
            >
              {question}
            </h1>
          </div>
        </div>
      </div>
    );
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:pb-10 md:pt-8 px-0 sm:px-4 md:px-6">
        <div>
          <div className="bg-white/20 rounded-full aspect-square  h-10 w-10 md:h-12 md:w-12 flex flex-col justify-center items-center drop-shadow-[0_4px_2px_rgba(0,0,0,1)]">
            <span className="font-bold text-2xl text-white leading-none">
              {number}
            </span>
          </div>
        </div>
        <div className="relative mt-5 md:mt-0 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl p-1">
          {/* <img
            src={QuestionBox}
            alt="Space Background"
            className="md:hidden absolute w-full h-full"
          /> */}
          <div className="px-8 md:px-6 py-10 md:py-0 bg-gray-900 rounded-xl">
            <h1
              style={{
                background:
                  "-webkit-linear-gradient(90deg, #AB4CCD 0%, #90B3DC 33%, #FFFFFF 100% )",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-white font-bold tracking-widest text-sm sm:text-base md:text-xl lg:text-2xl"
            >
              {question}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiddleQuestion;
