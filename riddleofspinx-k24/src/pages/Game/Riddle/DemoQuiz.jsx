import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
var roman = 1;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  RiddleBox,
  RiddleQuestion,
  RiddleSubQuestion,
  RiddleFig,
  RiddleInput,
  RiddleMCQ,
  RiddleImgMCQ,
  RiddleSubmit,
} from "./components";
import CountdownTimer from "./components/CountdownTimer";
import ImgOption from "@/assets/riddle/imageOption.jpg";
import { AuthContext } from "@/context/AuthContext";
import ImgQuestion from "@/assets/levels/levels_bg.jpg";
import ImgQuestion2 from "@/assets/riddle/riddle_bg.webp";
import triangle from "@/assets/riddle/triangle.png";
import {
  checkRemainingQuestions,
  submitChoices,
  submitChoices2,
} from "@/api/auth";
import { LoaderContext } from "@/context/LoaderContext";
import Loader from "@/components/Loader/Loader";
import toast from "react-hot-toast";

const DemoQuiz = () => {
  const url = window.location.pathname.split("/");
  const navigate = useNavigate();
  const { fetchRemainingQuestions } = useContext(LoaderContext);
  const { questions, fetchQuestions } = useContext(AuthContext);
  const [api, setApi] = React.useState();
  const [showSubmit, setShowSubmit] = React.useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false); // Track if time is up

  const [values, setValues] = useState(["", "", ""]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (values) => {
    try {
      const data = {
        setNumber: questionArray[0].set,
        answers: values,
      };
      //console.log(data);
      // url[2] == 'round1' ? await submitChoices(data) : await submitChoices2(data);
      url[2] == "round1"
        ? toast.promise(submitChoices(data), {
          success: "Submitted successfully",
          loading: "Submitting...",
          error: "Error submitting level",
        })
        : toast.promise(submitChoices2(data), {
          success: "Submitted successfully",
          loading: "Submitting...",
          error: "Error submitting level",
        });

      // Redirecting to Scoreboard if the level is complete
      const fetchQs = await checkRemainingQuestions(
        url[2] == "round1" ? "level1" : "level2"
      );
      //console.log(fetchQs);
      fetchQs[0] == ""
        ? navigate("/Scoreboard")
        : navigate(`/rounds/${url[2]}`);
    } catch (error) {
      console.error("Error submitting choices:", error);
    }
  };

  useEffect(() => {
    fetchQuestions(url[2] == "round1" ? "1" : "2");

    // Fetch questions when component mounts
    setTimeout(() => setIsLoading(false), 3000);

    window.addEventListener("beforeunload", handleBeforeUnload);
    // window.addEventListener("popstate", () => {
    //   confirm("Are you sure you want to leave?");
    // });

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (timeIsUp) {
      // If time is up, submit choices and redirect to round1
      handleSubmit(values);
    }
  }, [timeIsUp]);

  const questionArray = questions;
  //console.log(questionArray);
  let currQuestionNum = 0;
  var num = url[3];
  var num1=num[5];
  console.log(num1);

  const riddles = questionArray.map((question, index) => {
    switch (question.type) {
      case "text":
        currQuestionNum++;
        return (
          <RiddleBox key={index}>
            <RiddleQuestion
              number={num1}
              question={question?.description}
            />
            <RiddleSubQuestion
              number={String.fromCharCode(96 + currQuestionNum)}
              question={question?.question}
            />
            {question.image && (
              <RiddleFig src={question?.image} alt={question?.image} />
            )}
            <RiddleInput
              value={values[index]}
              onChange={(e) => {
                const newValues = [...values];
                newValues[index] = e.target.value;
                setValues(newValues);
              }}
            />
          </RiddleBox>
        );

      case "mcq":
        currQuestionNum++;
        return (
          <RiddleBox key={index}>
            <RiddleQuestion
              number={currQuestionNum}
              question={question?.description}
            />
            <RiddleSubQuestion
              number={String.fromCharCode(96 + currQuestionNum)}
              question={question?.question}
            />
            <RiddleMCQ
              options={question.choices.map((choice, i) => ({
                value: String.fromCharCode(97 + i), // 'a', 'b', 'c', 'd'...
                label: choice,
              }))}
              value={values[index]}
              onChange={(e) => {
                const newValues = [...values];
                newValues[index] = e;
                setValues(newValues);
              }}
            />
          </RiddleBox>
        );

      case "img":
        currQuestionNum++;
        return (
          <RiddleBox key={index}>
            <RiddleQuestion
              number={currQuestionNum}
              question={question?.description}
            />
            <RiddleSubQuestion
              number={String.fromCharCode(96 + currQuestionNum)}
              question={question?.question}
            />
            {question.image && (
              <RiddleFig src={question?.image} alt={question?.image} />
            )}
            <RiddleImgMCQ
              options={question?.choices.map((choice, i) => ({
                value: `option${String.fromCharCode(65 + i)}`, // optionA optionB...
                img: `option${String.fromCharCode(65 + i)}`,
              }))}
              value={values[index]}
              onChange={(e) => {
                const newValues = [...values];
                newValues[index] = e;
                setValues(newValues);
              }}
            />
          </RiddleBox>
        );

      default:
        return null;
    }
  });

  const setCarouselHeight = (api) => {
    const currentSlide = api.selectedScrollSnap();
    const slideList = api.slideNodes();

    const slide = slideList[currentSlide].firstChild;

    const rootCarouselDiv = api.containerNode();
    if (slide) {
      const height = slide.offsetHeight;
      rootCarouselDiv.style.height = `${height + 20}px`;
    }
  };
  const handleBeforeUnload = (event) => {
    event.preventDefault();
    const confirmationMessage =
      "Your quiz progress will be lost. Are you sure you want to leave?";
    event.returnValue = confirmationMessage;
    return confirmationMessage;
  };
  useEffect(() => {
    if (!api) {
      return;
    }
    setCarouselHeight(api);
    api.on("select", () => {
      if (api.selectedScrollSnap() === riddles.length - 1) {
        setShowSubmit(true);
      } else {
        setShowSubmit(false);
      }
      setCarouselHeight(api);
    });
    window.addEventListener("resize", () => {
      setCarouselHeight(api);
    });
  }, [api, showSubmit]);
  const targetTime = new Date().getTime() + 1000 * 30 * 60;

  if (isLoading) return <Loader />;

  return (
    <div className="w-full md:max-w-6xl mx-auto">
      <CountdownTimer
        targetTime={targetTime}
        onTimeUp={() => setTimeIsUp(true)} // Set timeIsUp to true when time is up
      />
      {showSubmit && (
        <RiddleSubmit
          onClick={() => {
            handleSubmit(values);
          }}
        />
      )}
      <Carousel setApi={setApi}>
        <CarouselContent>
          {riddles.map((riddle, index) => (
            <CarouselItem key={index}>{riddle}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="top-14 min-[1000px]:top-[50vh] translate-x-14 min-[1280px]:-translate-x-4" />
        <CarouselNext className="top-14 min-[1000px]:top-[50vh] -translate-x-14 min-[1280px]:translate-x-4" />
      </Carousel>

    </div>
  );
};

export default DemoQuiz;
