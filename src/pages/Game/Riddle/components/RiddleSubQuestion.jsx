import React from "react";
import SubQuestionBox from "@/assets/riddle/sub_question_box.webp";
import { useMediaQuery } from "react-responsive";

const RiddleSubQuestion = ({ number, question }) => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
  if (isLargeScreen)
    return (
      <div className="relative mt-4 backdrop-blur-3xl clip-path-octagon1">
        <img
          src={SubQuestionBox}
          alt="Space Background"
          className="absolute w-full h-full"
        />
        <div className="flex items-center p-8 px-14">
          <div>
            <div className="bg-white/20 rounded-full aspect-square h-14 w-14 flex items-center justify-center drop-shadow-[0_4px_2px_rgba(0,0,0,1)]">
              <span className="font-bold text-3xl text-white leading-none pb-2">
                {number}
              </span>
            </div>
          </div>
          <div className="px-8">
            <h2
              style={{
                background:
                  "-webkit-linear-gradient(90deg, #AB4CCD 0%, #90B3DC 33%, #FFFFFF 100% )",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-white font-bold tracking-widest md:text-xl lg:text-2xl"
            >
              {question}
            </h2>
          </div>
        </div>
      </div>
    );
  return (
    <div className="mt-4">
      <div className="flex flex-col md:flex-row items-center md:pb-10 md:pt-8 px-0 sm:px-4 md:px-6">
        <div>
          <div className="bg-white/20 rounded-full aspect-square  h-10 w-10 md:h-12 md:w-12 flex flex-col justify-center items-center drop-shadow-[0_4px_2px_rgba(0,0,0,1)]">
            <span className="font-bold text-2xl text-white leading-none pb-1.5">
              {number}
            </span>
          </div>
        </div>
        <div className="relative mt-5 md:mt-0 backdrop-blur-3xl p-4 rounded-2xl bg-black/30 md:bg-transparent md:px-8 border-2 border-violet-300/20">
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
  );
};

export default RiddleSubQuestion;
