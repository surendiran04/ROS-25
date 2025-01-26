import React from "react";
import bg from "@/assets/bg/astro1.jpg";
import Logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import { CoordsData } from "./TeamData";
import { BiCalendar, BiCubeAlt, BiData, BiPalette, BiSolidUser } from "react-icons/bi";
import { LoaderContext } from "@/context/LoaderContext";
import Loader from "@/components/Loader/Loader";
import { useContext } from "react";

const Team = () => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  if (isLoading) return <Loader />;
  const sortedTeamData = CoordsData.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      <img
        src={bg}
        alt="bg_img"
        className="fixed h-screen object-cover w-full -z-10 opacity-90"
      />
      <div className="fixed inset-0 bg-slate-950 -z-[20]"></div>
      <div className="flex items-center justify-center mt-16 sm:mt-0">
        <img className="sm:h-40 h-20" src={Logo} alt="Riddle of The Sphinx" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center flex-col justify-center sm:max-w-[90%] max-w-[98%]">
          <div className="mt-10 mb-10 font-title font-bold text-white inline-block sm:text-5xl text-2xl">
            Our Team
          </div>
          <div className="sm:mr-auto sm:ml-20 items-center flex justify-center text-white font-title m-5 text-xl font-semibold">
            DESIGNED AND DEVELOPED BY
          </div>
          <div className="flex sm:flex-row flex-col flex-wrap items-center justify-center uppercase font-title mb-10 ">
            {sortedTeamData.map((member, index) => (
              <motion.div whileHover={{ scale: 1.03 }} title={member.team}>
                <a href={member.linkedin} target="_blank">
                  <div
                    key={index}
                    className="flex items-center justify-center p-5 border-yellow-200 border-2 m-1 text-yellow-400 bg-[#23272f] bg-opacity-80 sm:w-[290px] w-[300px]"
                  >
                    <div className="flex justify-center items-center">
                      <div className="text-4xl text-yellow-300">
                        {member.team === "Frontend" ? (
                          <BiCubeAlt />
                        ) : member.team === "Backend" ? (
                          <BiData />
                        ) : member.team === "Events" ? (
                          <BiCalendar />
                        ) : member.team === "Design" ? (
                          <BiPalette />
                        ) : (
                          <BiSolidUser />
                        )}
                      </div>
                      <div className="pl-2">{member.name}</div>
                      {/* <a href={member.linkedin} className="pl-2 text-black" target="_blank"><div className="bg-yellow-500 rounded-full p-2 text-base"><BiLogoLinkedin /></div></a> */}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
