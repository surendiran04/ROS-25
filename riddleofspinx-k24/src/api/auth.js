import Cookies from "js-cookie";
import api from "./axios";
import axios from "axios";
import toast from "react-hot-toast";
const url = "/user";

// Google signin

export const apiGSignin = async (data) => {
  var value;
  try {
    const kapi = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    var data1 = {
      restriction: "login",
    };
    const check = await api.post("/check/view_check", data1);
    try {
      let response = await kapi.post(`/auth/gsignin`, data);
      const { message, redirect, user, token } = response.data;
      //console.log(response.data.user);
      var d1 = response.data.user.email;
      value = response.data.user; // //console.log(d1+"EMAIL");
      var d = {
        kid: response.data.user.kid,
      };
      //console.log(d);
      const oresponse = await api.post("/user/authlogin", d);
      //console.log(oresponse+"AUTHLOGIN");
      if (oresponse.data.token) Cookies.set("token", oresponse.data.token);
      return { message, redirect, user, token };
    } catch (err) {
      try {
        //console.log(value.email + "EMAIL");
        const details = {
          kid: value.kid,
        };
        var data2 = {
          restriction: "newLogin",
        };
        const newLogin = await api.post("/check/view_check", data2);
        //console.log(newLogin);
        const a = {
          kid: value.kid,
          email: value.email,
          password: "",
          firstname: value.firstname,
          lastname: value.lastname,
          phone: value.phone,
        };
        //console.log("A" + a);
        const s = await api.post("/user/create_user", a);
        //console.log(s.data + "Create");
        const response = await api.post("/user/authlogin", details);
        const responseData = response.data;
        //console.log(data);

        if (responseData.token) Cookies.set("token", responseData.token);
        return { ...responseData };
      } catch (err) {
        //console.log("IN INNER CATHC");
        if (err.response) throw err.response.data.message;
        throw err;
      }
    }
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const rosLogin = async (data) => {
  try {
    var data1 = {
      restriction: "login",
    };
    const check = await api.post("/check/view_check", data1);
    //console.log(check);
    try {
      const response = await api.post("/user/login", data);
      const responseData = response.data;

      if (responseData.token) Cookies.set("token", responseData.token);
      return { ...responseData };
    } catch (err) {
      try {
        const details = {
          email: data.kid,
          pwd: data.password,
        };
        var data2 = {
          restriction: "newLogin",
        };
        const newLogin = await api.post("/check/view_check", data2);
        const kresponse = await axios.post(
          "https://api.kurukshetraceg.org.in/api/v1/auth/login",
          details
        );
        const k = kresponse.data.user;
        const a = {
          kid: k.kid,
          email: k.email,
          password: data.password,
          firstname: k.firstname,
          lastname: k.lastname,
          phone: k.phone,
        };
        await api.post("/user/create_user", a);
        const response = await api.post("/user/login", data);
        const responseData = response.data;
        //console.log(data);

        if (responseData.token) Cookies.set("token", responseData.token);
        return { ...responseData };
      } catch (err) {
        if (err.response) throw err.response.data.message;
        throw err;
      }
    }
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const submitChoices = async (data) => {
  try {
    const token = Cookies.get("token");
    const response = await api.post("/score/calculate_score", data);
    //console.log(response.data);
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const submitChoices2 = async (data) => {
  try {
    const token = Cookies.get("token");
    //console.log(data);
    const response = await api.post("/score/calculate_scorer2", data);
    //console.log(response.data);
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const startTimer = async () => {
  try {
    const response = await api.post("/score/calculate_score");
    //console.log(response.data.message);
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const startTimer2 = async () => {
  try {
    const response = await api.post("/score/calculate_scorer2");
    //console.log(response.data.message);
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const viewQuestions = async (data) => {
  try {
    //console.log(data);
    const response = await api.post("/question/view_questions", data);
    // //console.log(response.data.questions);
    // //console.log(response.data);
    return response.data.questions;
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const viewLeaderboard = async () => {
  try {
    var data = {
      restriction: "score",
    };
    const check = await api.post("/check/view_check", data);
    const response = await api.get("/score/leaderboard");
    return response.data.leaderboard;
  } catch (err) {
    if (err.response) throw err.response.data.message;
  }
};
const checkRemainingQuestions = async (level) => {
  try {
    //console.log(level);
    const response = await api.get("/user/getUser");

    //console.log(response.data);
    const levelData = response.data[level];
    //console.log(levelData);
    const levelArray = levelData.split(",");
    //console.log(levelArray[0] == undefined);
    return levelArray;
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const viewRank = async () => {
  try {
    const response = await api.get("/score/getRank");
    return response.data;
  } catch (err) {
    if (err.response) throw err.response.data.message;
  }
};
const planetsAvailable = async (level) => {
  try {
    //console.log(level);
    const response = await api.get("/user/getUser");
    const levelData = response.data[level];
    //console.log(levelData.length);

    //console.log(response.data);
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const viewScoreboard = async () => {
  try {
    var data = {
      restriction: "score",
    };
    const check = await api.post("/check/view_check", data);
    //console.log(check.data);
    try {
      const response = await api.get("/score/getScoreboard");
      return response.data.leaderboard;
    }
    catch(err){
      toast.error("Scoreboard will open at 6pm");
    }
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const viewUser = async () => {
  try {
    const response = await api.get("/user/getUser");
    //console.log(response.data);
    return response.data;
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const setCharacter = async (data) => {
  try {
    await api.post("/user/setCharacter", data);
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

const viewCharacter = async () => {
  try {
    const response = await api.get("/user/getCharacter");
    //console.log(response.data);
    return response.data;
  } catch (err) {
    if (err.response) throw err.response.data.message;
    throw err;
  }
};

export {
  rosLogin,
  submitChoices,
  submitChoices2,
  startTimer,
  startTimer2,
  viewQuestions,
  checkRemainingQuestions,
  planetsAvailable,
  viewLeaderboard,
  viewUser,
  setCharacter,
  viewCharacter,
  viewRank,
  viewScoreboard,
};
