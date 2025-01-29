import React, { useContext } from "react";
import Characters from "@/components/Character/Character";
import Logo from "@/assets/logo.png";
import bg from "@/assets/bg/astro3.jpg";
import Loader from "@/components/Loader/Loader";
import { LoaderContext } from "@/context/LoaderContext";
const Character = () => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  if (isLoading) return <Loader />;
  return (
    <div>
      <img
        src={bg}
        alt="bg_img"
        className="fixed h-screen object-cover w-full -z-10 opacity-90"
      />
      <div className="flex items-center flex-col justify-center">
        <div className="flex items-center justify-center mt-16 sm:mt-0">
          <img className="sm:h-40 h-20" src={Logo} alt="Riddle of The Sphinx" />
        </div>
        <div className="mt-10 mb-10 font-title font-bold text-white inline-block text-2xl sm:4xl lg:text-5xl">
          SELECT YOUR AVATAR...
        </div>
        <div className="grid place-content-center grid-cols-1 grid-rows-4 gap-6 sm:grid-cols-4 sm:grid-rows-2">
          <Characters />
        </div>
      </div>
    </div>
  );
};

export default Character;
