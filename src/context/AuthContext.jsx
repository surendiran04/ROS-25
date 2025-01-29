import React, { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiGSignin, setCharacter } from "@/api/auth";
import { viewUser } from "@/api/auth";
import { viewCharacter } from "@/api/auth";
import { viewScoreboard } from "@/api/auth";
// import { checkLogin } from "@/api/auth";
import { viewRank } from "@/api/auth";

import { viewLeaderboard } from "@/api/auth";

import { viewQuestions } from "@/api/auth";

import { rosLogin } from "@/api/auth";

import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { LoaderContext } from "./LoaderContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const DEFAULT_REDIRECT_PATH = "/";
  const { captchaToken, refreshRecaptcha } = useContext(LoaderContext);

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({ LoggedInStatus: undefined });
  const [questions, setQuestions] = useState([]);
  const [leaderboard, setLeaderboard] = useState({});
  const [rank, setRank] = useState({});
  const [scoreboard, setScoreboard] = useState([{ scorer1: 0, scorer2: 0 }]);
  const [userdetails, setUserdetails] = useState({});
  const [characterdetails, setCharacterdetails] = useState({});
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    refreshAuth();
  }, [auth]);

  const refreshAuth = () => {
    const token = Cookies.get("token");
    setAuth(!!token);
  };

  const handleGoogleOAuth = (data) => {
    refreshRecaptcha();
    //console.log(data);
    toast.promise(
      apiGSignin({
        ...data,
        captcha: captchaToken,
      }),
      {
        loading: "Traveling to space...",
        success: (data) => {
          if (data.redirect) {
            const url = `https://kurukshetraceg.org.in${data.redirect.path}`;
            navigate(url, {
              replace: true,
              state: data.redirect.state,
            });

            return data.message;
          } else {
            // logging the user in
            setAuth(true);

            // Navigate to dashboard page
            viewCharacter().then((data) => {
              if (!data.message)
                navigate("/Avatars");
              else
                navigate("/rounds");
            }).catch((err) => { })

            // Success Message
            return data.message;
          }
        },

        error: (err) => {
          return typeof err == "object" ? err.message : err;
        },
      }
    );
  };

  const handleRosLogin = (data) => {
    toast.promise(rosLogin(data), {
      loading: "Authorizing...",
      success: (data) => {
        setAuth(true);
        refreshAuth();
        viewCharacter()
          .then((data) => {
            if (!data.message) navigate("/Avatars");
            else navigate("/rounds");
          })
          .catch((err) => { });

        return "Logged in!";
      },
      error: (err) => {
        return typeof err === "object" ? err.message : err;
      },
    });
  };

  const fetchQuestions = async (data) => {
    //console.log(data);
    try {
      var data = {
        level: data,
      };
      // //console.log(data);
      const fetchedQuestions = await viewQuestions(data);
      setQuestions(fetchedQuestions);
      // //console.log(fetchedQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleLogout = async () => {
    Cookies.remove("token");
    navigate("/");
    setAuth(false);
  };

  const fetchLeaderboard = async () => {
    try {
      const fetchedLeaderboard = await viewLeaderboard();
      setLeaderboard(fetchedLeaderboard);
    } catch (error) {
      console.error("Error fetching leaderboard", error);
    }
  };

  const fetchRank = async () => {
    try {
      const fetchedRank = await viewRank();
      setRank(fetchedRank);
    } catch (error) {
      console.error("Error fetching rank", error);
    }
  };

  const fetchScoreboard = async () => {
    try {
      const fetchedScoreboard = await viewScoreboard();
      setScoreboard(fetchedScoreboard);
    } catch (error) {
      toast.error("Scoreboard will open on Sunday at 9pm IST");
      console.error("Error fetching scoreboard", error);
    }
  };

  const fetchUser = async () => {
    try {
      const fetchedUser = await viewUser();
      setUserdetails(fetchedUser);
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  const handleCharacter = async (data) => {
    try {
      var data1 = {
        character: data,
      };
      setCharacterdetails({
        message: data
      });
      //console.log(data1);
      await setCharacter(data1);
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  const fetchCharacter = async () => {
    try {
      const fetchedcharacter = await viewCharacter();
      // console.log(fetchedcharacter);
      setCharacterdetails(fetchedcharacter);
    } catch (error) {
      console.error("Error fetching character", error);
    }
  };

  const isLogged = async () => {
    const token = Cookies.get("token");
    return token;
  };
  // const fetchLogin = async() =>{
  //   try{
  //     const fetchedLogin = await checkLogin();
  //     setIsLoggedIn(fetchedLogin);

  //   }
  // }

  const fetchLogin = async () => {
    try {
      const fetchedLogin = await checkLogin();
      // //console.log(fetchedLogin);
      setIsLoggedIn(fetchedLogin);
    } catch (error) {
      console.error("Error fetching character", error);
    }
  };

  // const handleTimerStart = (data) => {};
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
        handleRosLogin,
        handleLogout,
        fetchQuestions,
        questions,
        fetchLeaderboard,
        leaderboard,
        fetchRank,
        rank,
        fetchScoreboard,
        scoreboard,
        fetchUser,
        userdetails,
        handleCharacter,
        fetchCharacter,
        characterdetails,
        handleGoogleOAuth,
        isLoggedin,
        fetchLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
