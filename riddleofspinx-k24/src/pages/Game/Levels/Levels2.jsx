import React, { useState, useContext, useEffect } from "react";
import { LoaderContext } from "@/context/LoaderContext";
import Levels1Bg from "@/assets/levels/levels_bg.jpg";
import Logo from "@/assets/logo.png";
import {
  Earth,
  Saturn,
  Uranus,
  Sun,
  Moon
} from "@/assets/levels"
import Planet from "./components/Planet";
import { checkRemainingQuestions } from "@/api/auth";
import { Link } from "react-router-dom";
import Loader from "@/components/Loader/Loader";

const levels = [
  {
    level: 1,
    planet: Sun,
    color: "yellow",
  },
  {
    level: 2,
    planet: Moon,
    color: "orange",
  },
  {
    level: 3,
    planet: Earth,
    color: "emerald",
  },
  {
    level: 4,
    planet: Saturn,
    color: "pink",
  },
  {
    level: 5,
    planet: Uranus,
    color: "blue",
  },
];

const Levels2 = () => {
  const { clickedPlanets, addClickedPlanet } = useContext(LoaderContext);

  const fetchRemainingQuestions = async () => {
    try {
      const questionsArray = await checkRemainingQuestions("level2");
      //console.log(questionsArray);
      //console.log(questionsArray[0]);
      if (questionsArray[0] == "") return 0;
      return [6 - questionsArray.length];
    } catch (error) {
      console.error("Error fetching remaining questions:", error);
    }
  };
  const [remainingQuestions, setRemainingQuestions] = useState([
    fetchRemainingQuestions,
  ]);
  useEffect(() => {
    const fetchRemainingQuestions = async () => {
      try {
        const questionsArray = await checkRemainingQuestions("level2");
        //console.log(questionsArray);
        //console.log(questionsArray[0]);

        setRemainingQuestions([6 - questionsArray.length]);
        if (questionsArray[0] == "") setRemainingQuestions([0]);
        //console.log(remainingQuestions);
      } catch (error) {
        console.error("Error fetching remaining questions:", error);
      }
    };

    fetchRemainingQuestions();
  }, []);

  return (
    <div className="h-[100lvh] w-screen overflow-x-hidden">
      <img
        src={Levels1Bg}
        alt="Space Background"
        className="fixed -z-[10] h-[100lvh] w-screen object-cover opacity-90"
      />
      <div>
        <div className="flex items-center justify-center mt-16 sm:mt-0">
          <img className="sm:h-40 h-20" src={Logo} alt="Riddle of The Sphinx" />
        </div>
      </div>
      <div className="pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 pl-20 md:pl-12">
        <div>
          <Planet
            key={"set1"}
            round={2}
            planet={levels[0].planet}
            level={levels[0].level}
            color={levels[0].color}
            top="md:top-[-15%] lg:-top-[20%]"
            left="left-[10%] md:left-[30%] lg:left-[40%]"
            planetSize="w-[25%]"
            // onClick={() => handleClick(1)}
            isDisabled={!remainingQuestions.includes(levels[0].level)}
            isUnlocked={true}
          />
        </div>
        <Planet
          key={"set2"}
          round={2}
          planet={levels[1].planet}
          level={levels[1].level}
          color={levels[1].color}
          top="top-0 md:top-1 lg:top-0"
          left="left-[40%]"
          planetSize="w-[20%] lg:w-[30%]"
          // onClick={() => handleClick(2)}
          isDisabled={!remainingQuestions.includes(levels[1].level)}
          isUnlocked={false}
        />
        <Planet
          key={"set3"}
          round={2}
          planet={levels[2].planet}
          level={levels[2].level}
          color={levels[2].color}
          top="lg:-top-[20%]"
          left="left-[30%]"
          planetSize="w-[30%]"
          // onClick={() => handleClick(3)}
          isDisabled={!remainingQuestions.includes(levels[2].level)}
          isUnlocked={false}
        />
        <Planet
          key={"set4"}
          round={2}
          planet={levels[3].planet}
          level={levels[3].level}
          color={levels[3].color}
          top="lg:-top-4"
          left="left-5"
          planetSize="w-[70%] md:w-[45%]"
          // onClick={() => handleClick(4)}
          isDisabled={!remainingQuestions.includes(levels[3].level)}
          isUnlocked={false}
        />
        <Planet
          key={"set5"}
          round={2}
          planet={levels[4].planet}
          level={levels[4].level}
          color={levels[4].color}
          top="top-0"
          left="lg:-left-[10%]"
          planetSize="w-[30%]"
          // onClick={() => handleClick(5)}
          isDisabled={!remainingQuestions.includes(levels[4].level)}
          isUnlocked={false}
        />
        {/* {/* 
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  if (isLoading) return <Loader />;
  return (
    <div className="h-[100lvh] w-screen overflow-x-hidden">
      <img
        src={Levels1Bg}
        alt="Space Background"
        className="fixed -z-[10] h-[100lvh] w-screen object-cover"
      />
      <div className="pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 pl-20 md:pl-12">
        <Planet
          round={2}
          planet={levels[0].planet}
          level={levels[0].level}
          color={levels[0].color}
          top="md:top-[-15%] lg:-top-[20%]"
          left="left-[10%] md:left-[30%] lg:left-[40%]"
          planetSize="w-[25%]"
        />
        <Planet
          round={2}
          planet={levels[1].planet}
          level={levels[1].level}
          color={levels[1].color}
          top="top-0 md:top-1 lg:top-0"
          left="left-[40%]"
          planetSize="w-[20%] lg:w-[30%]"
        />
        <Planet
          round={2}
          planet={levels[2].planet}
          level={levels[2].level}
          color={levels[2].color}
          top="lg:-top-[20%]"
          left="left-[30%]"
          planetSize="w-[30%]"
        />
        <Planet
          round={2}
          planet={levels[3].planet}
          level={levels[3].level}
          color={levels[3].color}
          top="lg:-top-4"
          left="left-5"
          planetSize="w-[70%] md:w-[45%]"
        />
        <Planet
          round={2}
          planet={levels[4].planet}
          level={levels[4].level}
          color={levels[4].color}
          top="top-0"
          left="lg:-left-[10%]"
          planetSize="w-[30%]"
        /> */}
      </div>
      <div className="fixed bottom-5 left-5">
        <Link to="/instructions" className="flex flex-col" target="_blank">
          <button className="w-full p-4 m-1 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
            Instructions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Levels2;
