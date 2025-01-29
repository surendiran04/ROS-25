import React from "react";
import SubmitBox from "@/assets/riddle/sub_question_box.webp";

const RiddleSubmit = ({ onClick }) => {
  return (
    <div className="flex justify-end pt-6 pb-10 px-4">
      <div className="group relative w-fit h-fit bg-black/50 hover:bg-black/60 backdrop-blur-md clip-path-octagon1">
        <img
          src={SubmitBox}
          alt={"Button Decoration"}
          className="absolute h-full -z-[10]"
        />
        <button className="px-12 py-3" onClick={onClick}>
          <span className="text-xl text-white font-bold tracking-widest">
            Submit
          </span>
        </button>
      </div>
    </div>
  );
};

export default RiddleSubmit;
