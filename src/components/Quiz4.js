import axios from "axios";
import React from "react";
import "../App.css";
import { Questions4 } from "../helpers/Questions4";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";


const baseURL = "https://api.beeshopify.com/easyfishoil-quizs/add";


export default function App() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen, option, optionA, optionB, optionC, optionD, optionE] = useState("");

  const { score, setScore, setGameState } =
  useContext(GameStateContext);


  const chooseOption = (option) => {
    setOptionChosen(option);
  };


  const backQuestion = () => {
    if (Questions4[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion - 1);
  };
  
  const restartQuiz = () => {
    setScore(0);
    setGameState("playing3");
  };

  const nextQuestion = () => {
    if (Questions4[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions4[currentQuestion].answerA == optionChosen) {
      setGameState("playing5");
    }
    if (Questions4[currentQuestion].answerB == optionChosen) {
      setGameState("playing5");
    }
    if (Questions4[currentQuestion].answerC == optionChosen) {
      setGameState("playing5");
    }
    if (Questions4[currentQuestion].answerD == optionChosen) {
      setGameState("playing5");
    }
    if (Questions4[currentQuestion].answerE == optionChosen) {
      setGameState("playing5");
    }
  };


  React.useEffect(() => {
    // invalid url will trigger an 404 error
    axios.post(`${baseURL}`).then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);
  
  if (error) return `Error: ${error.message}`;
  if (!post) return "Loading..."

  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-10">
          <div className="w-4/4 md:w-2/4 mx-auto space-y-4">
            <img
              alt="description of image"
              className="rounded-3xl"
              src={Questions4[currentQuestion].images}
            />
            <h1 className="bg-white p-8 rounded-3xl text-gray-700 text-xl text-left">
            {Questions4[currentQuestion].prompt}
            </h1>
            <div 
            className="flex flex-col justify-center gap-2" 
            type="radio">
                <button
                    id="optionA" 
                    value={optionA}
                    onClick={() => {
                    chooseOption("optionA");
                    }}
                    className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white">
                    {Questions4[currentQuestion].optionA}
                </button>
                <button 
                    id="optionB" 
                    value={optionB}
                    onClick={() => {
                    chooseOption("optionB");
                    }}
                    className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white">
                    {Questions4[currentQuestion].optionB}
                </button>
                <button 
                    id="optionC" 
                    value={optionC}
                    onClick={() => {
                    chooseOption("optionC");
                    }}
                    className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white">
                    {Questions4[currentQuestion].optionC}
                </button>
                <button 
                    id="optionD" 
                    value={optionD}
                    onClick={() => {
                    chooseOption("optionD");
                    }}
                    className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white">
                    {Questions4[currentQuestion].optionD}
                </button>
                <button 
                    id="optionE" 
                    value={optionE}
                    onClick={() => {
                    chooseOption("optionE");
                    }}
                    className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white">
                    {Questions4[currentQuestion].optionE}
                </button>
              <div className="flex justify-between">
                      {currentQuestion == Questions4.length + 1 ? (
                      (
                      <button
                      className="relative text-white h-16 px-7 text-2xl rounded-full"
                      onClick={backQuestion}
                      id="backQuestion"
                      >
                      <img alt="description of image" src="./back-icon.svg" className="w-6"></img>
                      </button>
                      )
                      ):<button   
                      className="relative text-white h-16 px-7 text-2xl rounded-full"
                      onClick={restartQuiz}
                      id="backQuestion"
                      >
                      <img alt="description of image" src="./back-icon.svg" className="w-6"></img>
                      </button>}
                      {currentQuestion == Questions4.length - 1 ? (
                      <button   
                      className="relative text-white h-16 px-7 text-2xl rounded-full"
                      onClick={finishQuiz}
                      id="nextQuestion"
                    >
                    <img alt="description of image" src="./next-icon.svg" className="w-6"></img>
                    </button>
                  
                  ) : (
                    <button
                      className="relative text-white h-16 px-7 text-2xl rounded-full"
                      onClick={nextQuestion}
                      id="nextQuestion"
                    >
                    <img alt="description of image" src="./next-icon.svg" className="w-6"></img>
                    </button>
            )}
            </div>  
            </div>    
          </div>
        </div>
      </div>
    </div>
  );
}