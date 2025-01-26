import React, { useState, useContext, useEffect } from "react";
import { LoaderContext } from "@/context/LoaderContext";
import Levels1Bg from "@/assets/levels/levels_bg.jpg";
import Logo from "@/assets/logo.png";
import {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune
} from "@/assets/levels";
import Planet from "./components/Planet";
import { checkRemainingQuestions } from "@/api/auth";
import Loader from "@/components/Loader/Loader";
import { Link } from "react-router-dom";

const levels = [
  {
    level: 1,
    planet: Mercury,
    color: "yellow",
  },
  {
    level: 2,
    planet: Venus,
    color: "orange",
  },
  {
    level: 3,
    planet: Earth,
    color: "emerald",
  },
  {
    level: 4,
    planet: Mars,
    color: "pink",
  },
  {
    level: 5,
    planet: Jupiter,
    color: "blue",
  },
  {
    level: 6,
    planet: Saturn,
    color: "red",
  },
  {
    level: 7,
    planet: Uranus,
    color: "orange",
  },
  {
    level: 8,
    planet: Neptune,
    color: "blue",
  },
];

const Levels1 = () => {
  const { clickedPlanets, addClickedPlanet } = useContext(LoaderContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  if (isLoading) return <Loader />;

  const fetchRemainingQuestions = async () => {
    try {
      const questionsArray = await checkRemainingQuestions("level1");
      //console.log(questionsArray);
      //console.log(questionsArray[0]);
      if (questionsArray[0] == "") return 0;
      return [9 - questionsArray.length];
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
        const questionsArray = await checkRemainingQuestions("level1");
        //console.log(questionsArray);
        //console.log(questionsArray[0]);

        setRemainingQuestions([9 - questionsArray.length]);
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
            round={1}
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
          round={1}
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
          round={1}
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
          round={1}
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
          round={1}
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
        <Planet
          key={"set6"}
          round={1}
          planet={levels[5].planet}
          level={levels[5].level}
          color={levels[5].color}
          top="top-4"
          left="lg:-left-[10%]"
          planetSize="w-[40%]"
          // onClick={() => handleClick(6)}
          isDisabled={!remainingQuestions.includes(levels[5].level)}
          isUnlocked={false}
        />
        <div className="hidden lg:block col-span-1"></div>
        <Planet
          key={"set7"}
          round={1}
          planet={levels[6].planet}
          level={levels[6].level}
          color={levels[6].color}
          top="top-[30%]"
          left="left-[40%]"
          planetSize="w-[25%]"
          // onClick={() => handleClick(7)}
          isDisabled={!remainingQuestions.includes(levels[6].level)}
          isUnlocked={false}
        />
        <Planet
          key={"set8"}
          round={1}
          planet={levels[7].planet}
          level={levels[7].level}
          color={levels[7].color}
          top="top-[50%] lg:top-[30%]"
          left="left-[50%]"
          planetSize="w-[35%]"
          // onClick={() => handleClick(8)}
          isDisabled={!remainingQuestions.includes(levels[7].level)}
          isUnlocked={false}
        />
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

export default Levels1;
