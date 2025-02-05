import React, { lazy, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const Login = lazy(() => import("@/pages/Login/Login"));
const Music = lazy(() =>
  import("@/components/MusicPlayer/BackgroundAudioPlayer")
);
const Avatars = lazy(() => import("@/pages/Characters/Character"));
const Instructions = lazy(() => import("@/pages/Instructions/Instructions"));
const Leaderboard = lazy(() => import("@/pages/LeaderBoard/board"));
const Scoreboard = lazy(() => import("@/pages/ScoreBoard/Scoreboard"));
const Riddle = lazy(() => import("@/pages/Game/Riddle/Riddle"));
const Rounds = lazy(() => import("@/pages/Game/Rounds/Rounds"));
const Levels1 = lazy(() => import("@/pages/Game/Levels/Levels1"));
const Levels2 = lazy(() => import("@/pages/Game/Levels/Levels2"));
const ProtectedRoutes = lazy(() => import("./routes/ProtectedRoutes"));
const DemoQuiz = lazy(() => import("./pages/Game/Riddle/DemoQuiz"));
const Header = lazy(() => import("./components/Header/Header"));
const Team = lazy(() => import("@/pages/Team/Team"));
import NotFound from '@/pages/NotFound/NotFound'
import Query from '@/pages/Queries/query'
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { LoaderContext } from "./context/LoaderContext";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { auth } = useContext(AuthContext);
  const { isLoading, setIsLoading } = useContext(LoaderContext);
   //change the design only 
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <div className="overflow-x-hidden">
        {/* {auth && <Header />} */}
        <Header />   {/* added */}
        <Music />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />

            {/* added */}
          <Route path="/Instructions" exact element={<Instructions />} />
            <Route path="/riddle" exact element={<Riddle />} /> {/* added*/}
            <Route path="/rounds" exact element={<Rounds />} />

            <Route path="/rounds/round1" exact element={<Levels1 />} />
            {/* ----Enable for round 2---- */}
            {/* <Route path="/rounds/round2" exact element={<Levels2 />} /> */}

            <Route path="/rounds/round1/:level" exact element={<Riddle />} />

            {/* <Route path="/rounds/round2/:level" exact element={<Riddle />} /> */}
            
            <Route path="/Leaderboard" exact element={<Leaderboard />} />
            <Route path="/Scoreboard" exact element={<Scoreboard />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="*" exact element={<NotFound />} />
          <Route path="/query" exact element={<Query />} />
            {/* added */}

       

          <Route path="/team" exact element={<Team />} />
          <Route path="*" exact element={<NotFound />} />
          <Route path="/query" exact element={<Query />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
