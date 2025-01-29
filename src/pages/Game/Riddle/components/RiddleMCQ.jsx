import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Circle, CheckCircle } from "lucide-react";

const RiddleMCQ = ({ value, onChange, options }) => {
  return (
    <ToggleGroup
      type={"single"}
      value={value}
      onValueChange={onChange}
      className="grid grid-cols-1 min-[800px]:grid-cols-2 mt-10 sm:px-4 lg:px-0 gap-y-2"
    >
      {options.map((option, index) => (
        <ToggleGroupItem
          key={index}
          value={option.value}
          size={"lg"}
          className="group h-max p-4 rounded-lg col-span-2 bg-black/50 hover:bg-black/60 backdrop-blur-md text-white border border-violet-200/60 data-[state=on]:bg-gradient-to-r from-teal-500/40 via-violet-400/70 to-orange-400/20 data-[state=on]:font-bold flex justify-start gap-4 px-4 data-[state=on]:border-slate-950"
        >
          {value === option.value ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <Circle className="h-4 w-4" />
          )}
          <span className="text-lg tracking-wide">{option.label}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default RiddleMCQ;
