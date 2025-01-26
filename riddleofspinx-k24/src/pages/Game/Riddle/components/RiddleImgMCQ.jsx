import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Circle, CheckCircle, Maximize } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import imagesData from "@/constants/images";
const RiddleImgMCQ = ({ value, onChange, options }) => {
  return (
    <ToggleGroup
      type={"single"}
      value={value}
      onValueChange={onChange}
      className="grid grid-cols-1 min-[800px]:grid-cols-2 mt-10 sm:px-4 lg:px-0"
    >
      {options.map((option, index) => (
        <div key={index} className="relative w-full">
          <ToggleGroupItem
            key={index}
            value={option.value}
            size={"lg"}
            className="w-full relative h-fit rounded-2xl group bg-black/50 hover:bg-black/60 backdrop-blur-md text-white border border-violet-200/60 data-[state=on]:bg-gradient-to-b from-teal-500/40 via-violet-400/70 to-orange-400/20 data-[state=on]:font-bold flex justify-start gap-4 px-4 data-[state=on]:border-slate-950 items-start py-4"
          >
            {value === option.value ? (
              <CheckCircle className="h-4 w-4 mt-2" />
            ) : (
              <Circle className="h-4 w-4 mt-2" />
            )}
            <div className="min-h-[200px] max-w-[90%] grid place-content-center">
              <img
                src={imagesData[option.value].url}
                alt={value + " option image"}
                className="max-h-[200px] w-fit rounded-2xl border border-violet-200/30"
              />
            </div>
          </ToggleGroupItem>
          <Dialog>
            <DialogTrigger className="absolute z-30 bottom-4 right-4" asChild>
              <Button
                size={"icon"}
                variant="secondary"
                className="border border-black"
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className={"max-w-4xl p-2 w-fit"}>
              <img
                src={option.img}
                alt={value + " option image"}
                className="mt-8 rounded-md"
              />
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </ToggleGroup>
  );
};

export default RiddleImgMCQ;
