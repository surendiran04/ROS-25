import React, { useState, useEffect, useContext } from "react";
import Cookie from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import bg from "@/assets/bg/instr.jpg";
import Logo from "@/assets/logo.png";
import { LoaderContext } from "@/context/LoaderContext";
import Loader from "@/components/Loader/Loader";
const Instructions = () => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const navigate = useNavigate();
  const [acceptedRules, setAcceptedRules] = useState(false);

  useEffect(() => {
    const userAcceptedRules = Cookie.get("acceptedRules");
    if (userAcceptedRules === "true") {
      setAcceptedRules(true);
    }
  }, []);


  const handleAcceptRules = () => {

    setAcceptedRules(true);
    Cookie.set("acceptedRules", "true", { expires: 20 }); // Set cookie to expire in 20 days
    navigate("/Rounds");
  };

  if (isLoading) return <Loader />;
  return (
    <div className="">
      <img
        src={bg}
        alt="bg_img"
        className="fixed h-screen object-cover w-full -z-10 opacity-90"
      />
      <div className="fixed inset-0 bg-slate-950 -z-[20]"></div>
      <div className="flex items-center justify-center mt-16 sm:mt-0">
        <img className="sm:h-40 h-20" src={Logo} alt="Riddle of The Sphinx" />
      </div>
      <h2 className="mt-10 mb-10 font-title font-bold text-white text-2xl sm:4xl lg:text-5xl text-center block">
        INSTRUCTIONS
      </h2>
      <div className="flex align-center justify-center mb-8 ">
        <div className="sm:max-w-[60%] text-white sm:mt-8 mt-0 font-primary sm:m-0 m-3 shadow-2xl bg-[rgba(255,255,255,0.3)] border-[1px solid rgba(255,255,255,0.1)] rounded-xl  backdrop-blur-[20px]">
          <div className="m-3 sm:m-5">
            <h3 className="font-bold font-title underline underline-offset-8 sm:mb-5 mb-3 text-center uppercase">
              THE GAME FLOW
            </h3>
            <ul className="list-decimal ml-3 sm:ml-6">
              <li className="p-1">
                The Game Consists of 2 Rounds.
              </li>
              <li className="p-1">
                Round 1 and 2 : (16-02-24 Friday 8:00pm to 18-02-24 Sunday 6:00pm).
              </li>
              {/* <li className="p-1">
                Round 2: (18-02-24 Sunday 9:00am to 6:00pm) 9hrs
              </li> */}
            </ul>
          </div>
          <div className="m-3 sm:m-5">
            <h3 className="font-bold font-title underline underline-offset-8 sm:mb-5 mb-3 text-center uppercase">
              TIME RESTRICTIONS
            </h3>
            <ul className="list-decimal ml-3 sm:ml-6">
              <li className="p-1">
                User can register for the game till 4pm at 18-02-2024 at day 2. After 4 pm of Day 2 only login is allowed.
              </li>
              <li className="p-1">
                The Round (either 1 or 2) will be autosubmitted at the given end-time in the game-flow.
              </li>
            </ul>
          </div>
          <div className="m-3 sm:m-5">
            <h3 className="font-bold font-title underline underline-offset-8 sm:mb-5 mb-3 text-center uppercase">
              Rounds
            </h3>
            <ul className="list-decimal ml-3 sm:ml-6">
              <li className="p-1">
                Round 1 consists of 8 Levels. By default, level 1 is unlocked.
              </li>
              <li className="p-1">
                The succeeding levels will be unlocked after completing the previous Level.
              </li>
              <li className="p-1">
                Each level in Round 1 consits of 3 interlinked questions and Each level in Round 2 consists of 5 interlinked questions with a story Line. The questions can be either MCQ type, Numeric type, or Image based MCQ. (NOTE: Numeric answer questions must be answered in integer format ex: “5” not <strike>"five"</strike>).
              </li>
              <li className="p-1">
                Each level has a time limit of 30 minutes. There will be a reverse-countdown timer indicating the time left for the level. The level will be auto-submitted when the timer goes off.
              </li>
              <li className="p-1">
                After completing all levels, user has to wait till 9pm of Sunday for scoreboard and leaderboard.
              </li>
              <li className="p-1">
                Round 2 will be unlocked in the next day. Users can play round 2 from 10am to 6pm of Sunday.
              </li>
            </ul>
          </div><div className="m-3 sm:m-5">
            <h3 className="font-bold font-title underline underline-offset-8 sm:mb-5 mb-3 text-center uppercase">
              SCORE calculation
            </h3>
            <ul className="list-decimal ml-3 sm:ml-6">
              <li className="p-1">
                5 points are awarded for each correct answer.
              </li>
              <li className="p-1">
                No negative marks for wrong answers.
              </li>
              <li className="p-1">
                If two players have equal points at the end, the leaderBoard position is calculated according to the time left for individual levels.
              </li>
              <li className="p-1">
                Player who completes the level in the shortest time and highest number of correct answers ranks top in the leaderboard.
              </li>
            </ul>
          </div>
          <div className="m-3 sm:m-5">
            <h3 className="font-bold font-title underline underline-offset-8 sm:mb-5 mb-3 text-center uppercase">
              SCOREBOARD & LEADERBOARD
            </h3>
            <ul className="list-decimal ml-3 sm:ml-6">
              <li className="p-1">
                Scoreboard and leaderboard will be unlocked at Sunday 9pm.
              </li>
              <li className="p-1">
                Scoreboard consists of the total score and individual round score.
              </li>
              <li className="p-1">
                Leaderboard consists of the rank of the player among all active players.
              </li>
            </ul>
          </div>
          <div className="m-3 sm:m-5">
            <h3 className="font-bold font-title underline underline-offset-8 sm:mb-5 mb-3 text-center uppercase">
              Other Restrictions
            </h3>
            <ul className="list-decimal ml-3 sm:ml-6">
              <li className="p-1">
                The current level will be auto-submitted if the user exits the page or browser. Those levels will not be evaluated and will be locked.
              </li>
              <li className="p-1">
                A good internet connection is required for the gameplay. Ensure that you have a good internet connectivity for smooth gameplay.
              </li>
            </ul>
          </div>
          <div className="m-3 sm:m-5">
            <h3 className="font-bold font-title underline underline-offset-8 sm:mb-5 mb-3 text-center uppercase">
              Mode of Contact
            </h3>
            <ul className="list-decimal ml-3 sm:ml-6">
              <li className="p-1">
                In case of any support needed, players can contact the team. The contact details are given in the side navigation bar.
              </li>
            </ul>
          </div>
          <div className="m-3 sm:m-5">
            <h3 className="font-bold font-title underline underline-offset-8 sm:mb-5 mb-3 text-center uppercase">
              Others
            </h3>
            <ul className="list-decimal ml-3 sm:ml-6">
              <li className="p-1">
                The instructions page can be accessed in between the game. Navigate to the instructions button in the bottom left corner of the page.
              </li> <li className="p-1">
                The final winners will be contacted within 24 hours by the Kurukshetra team.
              </li>
            </ul>
          </div>
          {!acceptedRules && (
            <div className="mb-4 flex flex-col align-items-center justify-center border-t-2 border-gray-700 sm:m-10 sm:p-5 p-2 m-2">
              <form onSubmit={handleAcceptRules}>
                <div className="fmb-4">
                  <input
                    id="checkbox"
                    type="checkbox"
                    required
                    className="h-5 w-5 cursor-pointer accent-green-500"
                  />
                  <label
                    for="checkbox"
                    className="mx-2 font-primary text-white font-semibold text-xl cursor-pointer"
                  >
                    I have read all the instructions and ready to play to the
                    game.
                  </label>
                </div>
                <button
                  type="submit"
                  className="outline-none rounded-md w-full bg-indigo-600 hover:bg-indigo-700 transition ease-in-out delay-150 text-white px-5 py-3 sm:mt-10 mt-5 font-title"
                >
                  PROCEED TO GAME
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      {acceptedRules && (
        <div className="fixed bottom-5 left-5">
          <Link to="/rounds">
            <button className="w-full p-4 rounded-lg border-2 border-orange-200/10 bg-black/50 py-2 font-subtitle font-medium tracking-widest text-orange-400 hover:bg-slate-950/60">
              Go to Rounds
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Instructions;
