import React from "react";
import { Input } from "@/components/ui/input";

const RiddleInput = ({ value, onChange }) => {
  return (
    <div className="border-2 bg-black/50 rounded-full mt-12 max-w-md mx-auto pl-3 ">
      <Input
        value={value ?? ""}
        onChange={onChange}
        style={{
          background:
            "-webkit-linear-gradient(90deg, #AB4CCD 0%, #90B3DC 33%, #FFFFFF 100% )",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        placeholder="Type your Answer"
        className="bg-transparent border-none md:h-14 rounded-full md:text-lg lg:text-xl font-bold tracking-wider text-white"
      />
    </div>
  );
};

export default RiddleInput;
