import React from "react";
import NavSheet from "./components/NavSheet";
import Profile from "./components/Profile";
import { AuthContext } from "@/context/AuthContext";
import { useEffect, useContext } from "react";
import Cookies from "js-cookie";
const Header = () => {
  const { userdetails, fetchUser } = useContext(AuthContext);
  useEffect(() => {
    setTimeout(() => {
      fetchUser();
    }, 1500);
  }, []);
  const token = Object.keys(Cookies.get());
  //console.log(userdetails);

  return (
    <header className="fixed p-4 md:p-5 flex justify-between w-full items-start">
      <NavSheet />
      {token.includes("token") && <Profile details={userdetails} />}
    </header>
  );
};

export default Header;
