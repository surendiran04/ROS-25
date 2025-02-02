import React from "react";
import bg from "@/assets/bg/nt-fnd.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[100lvh] w-screen">
      <img
        src={bg}
        alt="bg_img"
        className="fixed h-screen object-cover w-full -z-10 opacity-80"
      />
      <div className="h-full grid place-content-center">
        <div className="flex flex-col items-center">
          <h1
            style={{
              background: "linear-gradient(185deg, #caffdc, #85ffcc, #7bc2ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="drop-shadow-[0_0_50px_rgba(0,0,0,0.75)] leading-none relative text-[clamp(100px,40vw,350px)] font-bold"
          >
          
           
          </h1>
          <span
            style={{
              background: "linear-gradient(90deg, #afdeff, #b7aaff, #ffc0fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="py-1 drop-shadow-[0_0_50px_rgba(0,0,0,0.75)] text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-center"
          >
               PAGE NOT FOUND
          </span>
          <Link to="/" className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
            <button className="w-full max-w-[200px] py-2 px-8 md:px-12 m-1 rounded-full border-2 border-orange-200/10 bg-black text-xs md:text-base xl:text-lg font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
