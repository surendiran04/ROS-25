import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Maximize } from "lucide-react";
import imagesData from "@/constants/images";

const RiddleFig = ({ src, alt }) => {
  const image = imagesData[src];
  return (
    <div className="relative w-full max-w-fit mx-auto mt-8">
      <img
        src={image.url}
        alt={alt}
        className="max-h-[200px] w-fit rounded-2xl border border-violet-200/30"
      />
      <Dialog>
        <DialogTrigger className="absolute z-30 bottom-2.5 right-2.5" asChild>
          <Button
            size={"icon"}
            variant="secondary"
            className="border border-black"
          >
            <Maximize className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className={"max-w-4xl p-2 w-fit"}>
          <img src={image.url} alt={alt} className="mt-10 rounded-md" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RiddleFig;
