import React, { useState } from "react";
import { checkRemainingQuestions } from "@/api/auth";
//Context
export const LoaderContext = React.createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [clickedPlanets, setClickedPlanets] = useState([]);
  const addClickedPlanet = (planetId) => {
    if (!clickedPlanets.includes(planetId))
      setClickedPlanets((prevPlanets) => [...prevPlanets, planetId]);
  };
  const removeClickedPlanet = (planetId) => {
    setClickedPlanets((prevPlanets) =>
      prevPlanets.filter((planet) => planet !== planetId)
    );
  };

  const remainingQuestions = async () => {
    try {
      const questionsArray = await checkRemainingQuestions("level1");
    } catch {}
  };

  const refreshRecaptcha = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(`${import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}`, {
          action: "homepage",
        })
        .then((token) => {
          setCaptchaToken(token);
        });
    });
  };

  const toggleCaptchaBadge = (show) => {
    const badge = document.getElementsByClassName("grecaptcha-badge")[0];
    if (badge && badge instanceof HTMLElement) {
      badge.style.visibility = show ? "visible" : "hidden";
    }
  };

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
        clickedPlanets,
        addClickedPlanet,
        removeClickedPlanet,
        refreshRecaptcha,
        toggleCaptchaBadge,
        captchaToken,
        setCaptchaToken,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
