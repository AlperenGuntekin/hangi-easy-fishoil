import axios from "axios";
import React from "react";
import "../App.css";
import { Questions2 } from "../helpers/Questions2";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";


const baseURL = "https://api.beeshopify.com/easyfishoil-quizs/add";


export default function App() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen, option, optionA, optionB] = useState("");

  const { score, setScore, setGameState } =
  useContext(GameStateContext);


  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const backQuestion = () => {
    if (Questions2[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion - 1);
  };
  
  const nextQuestion = () => {
    if (Questions2[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setScore(0);
    setGameState("playing");
  };


  const finishQuiz = () => {
    if (Questions2[currentQuestion].answerA == optionChosen) {
      setGameState("playing3");
    }
    if (Questions2[currentQuestion].answerB == optionChosen) {
      setGameState("playing3");
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
              src={Questions2[currentQuestion].images}
            />
            <h1 className="bg-white p-8 rounded-3xl text-gray-700 text-xl text-left">
            {Questions2[currentQuestion].prompt}
            </h1>
            <div className="flex justify-between gap-4">
              <div className="w-2/4">
              <select className="relative w-full flex items-center justify-center apperance-none h-14 pt-1 px-5 text-center rounded-full text-white text-lg">
                <option value>Wählen</option>             
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
              </div>
              <div className="w-2/4">
                <button 
                id="optionB" 
                value={optionB}
                onClick={() => {
                chooseOption("optionB");
                }}              
                className="relative w-full h-14 pt-1 text-l rounded-full text-white">
                {Questions2[currentQuestion].optionB}
                </button>
              </div>
             </div>    
             <div className="flex justify-between">
              {currentQuestion == Questions2.length + 1 ? (
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
                                {currentQuestion == Questions2.length - 1 ? (
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
  );
}