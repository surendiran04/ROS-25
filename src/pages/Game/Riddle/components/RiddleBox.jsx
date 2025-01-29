import React from "react";

const RiddleBox = ({ children }) => {
  return (
    <div className="min-[1000px]:clip-path-octagon relative max-w-6xl mx-auto w-full z-0 p-4 md:p-6 bg-slate-950/40 backdrop-blur-lg flex justify-center mt-4">
      <div className="md:py-6 md:w-[90%]">{children}</div>
    </div>
  );
};

export default RiddleBox;
