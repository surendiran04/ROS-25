import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import charactersData from "@/constants/avatars";
import { AuthContext } from "@/context/AuthContext";

export default function Characters() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const { handleCharacter, refreshAuth } = useContext(AuthContext);

  const confirmAvatar = async () => {
    try {
      await handleCharacter(selectedAvatar);
    } catch (error) {
      console.error("Error setting character", error);
    }
  };

  return (
    <>
      {charactersData.map((item, index) => (
        <div
          key={index}
          className="w-[280px] h-[280px] grid place-content-center"
        >
          <Popup
            trigger={
              <motion.div whileHover={{ scale: 1.1 }}>
                <img
                  src={item.characterUrl}
                  className="w-[230px] h-[230px] rounded-3xl cursor-pointer"
                  onClick={() => setSelectedAvatar(item.characterUrlMin)}
                ></img>
              </motion.div>
            }
            nested
            modal
          >
            {(close) => (
              <div className="flex items-center justify-center sm:m-0 m-2">
                <div className="rounded-lg overflow-hidden sm:w-[70%] hadow-2xl bg-indigo-600 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-100">
                  <div className="flex flex-row-reverse">
                    <button
                      onClick={() => close()}
                      className=" bg-red-600 m-1.5 p-1.5 rounded-full outline-none"
                    ></button>
                  </div>

                  <div className="grid sm:grid-flow-col">
                    <div className="mb-3 mx-3 flex items-center justify-center sm:block">
                      <img
                        src={item.characterUrl}
                        className="sm:w-[240px] sm:h-[240px] h-[180px] w-[180px] rounded-3xl mb-2.5"
                      ></img>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                      <h2 className="mx-3 font-primary text-white font-semibold sm:text-2xl text-lg">
                        {" "}
                        Do you want to Confirm the selected avatar to represent
                        you in the entire game?
                      </h2>
                      <Link to="/Instructions">
                        <button
                          onClick={confirmAvatar}
                          className="sm:mb-0 mb-5 outline-none rounded-md bg-indigo-600 hover:bg-indigo-700 transition ease-in-out delay-150 text-white px-5 py-3 sm:mt-10 mt-5 font-title"
                        >
                          Confirm Avatar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popup>
        </div>
      ))}
    </>
  );
}
