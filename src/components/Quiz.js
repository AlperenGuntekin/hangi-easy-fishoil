import axios from "axios";
import React from "react";
import "../App.css";
import { Questions } from "../helpers/Questions";
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


  React.useEffect(() => {
    axios.post(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);
  
  function updatePost() {
    axios
      .put(`${baseURL}`, {
        "id": 1,
        "ip": null,
        "email": null,
        "sessionId": "c3076708-416c-415d-bf24-f0d34347cc37",
        "childAge": 12,
        "gender": "male",
        "firstChoice": null,
        "priority": null,
        "season": null,
        "published_at": "2022-07-27T12:58:47.334Z",
        "created_by": null,
        "updated_by": null,
        "created_at": "2022-07-27T12:58:47.366Z",
        "updated_at": "2022-07-27T12:59:08.918Z"
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"
  
  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  
  const backQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion - 1);
  };
  
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };


  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("playing2");
  };  

  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-10">
          <div className="w-4/4 md:w-2/4 mx-auto space-y-4">
            <img
              alt="description of image"
              className="rounded-3xl"
              src={Questions[currentQuestion].images}
            />
            <h1 className="bg-white p-8 rounded-3xl text-gray-700 text-xl text-left">
            {Questions[currentQuestion].prompt}
            </h1>
            <div 
            className="flex flex-col justify-center gap-2">
                <button
                    id="optionA" 
                    value={optionA}
                    onClick={updatePost}             
                    className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                    {Questions[currentQuestion].optionA}
                </button>
                <button                    
                    id="optionB" 
                    value={optionB}
                    onClick={() => {
                    chooseOption("optionB");
                    }} 
                    className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                    {Questions[currentQuestion].optionB}
                </button>
                <button 
                    id="optionC" 
                    value={optionC}
                    onClick={() => {
                    chooseOption("optionC");
                    }}
                    className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                    {Questions[currentQuestion].optionC}
                </button>
                <button 
                    id="optionD" 
                    value={optionD}
                    onClick={() => {
                    chooseOption("optionD");
                    }}
                    className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                    {Questions[currentQuestion].optionD}
                </button>
                <button 
                    id="optionE" 
                    value={optionE}
                    onClick={() => {
                    chooseOption("optionE");
                    }}
                    className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                    {Questions[currentQuestion].optionE}
                </button>
              <div className="flex justify-between">
                  {currentQuestion == Questions.length + 1 ? (
                  (
                  <button
                  className="relative text-white h-16 px-7 text-2xl rounded-full border-primary"
                  onClick={backQuestion}
                  id="backQuestion"
                  >
                  <img alt="description of image" src="./back-icon.svg" className="w-6"></img>
                  </button>
                  )
                  ):<button   
                  className="relative text-white h-16 px-7 text-2xl rounded-full border-primary"
                  onClick={restartQuiz}
                  id="backQuestion"
                >
                <img alt="description of image" src="./back-icon.svg" className="w-6"></img>
                </button>}
                    {currentQuestion == Questions.length - 1 ? (
                      <button   
                      className="relative text-white h-16 px-7 text-2xl rounded-full border-primary"
                      onClick={finishQuiz}
                      id="nextQuestion"
                    >
                    <img alt="description of image" src="./next-icon.svg" className="w-6"></img>
                    </button>
                  
                  ) : (
                    <button
                      className="relative text-white h-16 px-7 text-2xl rounded-full border-primary"
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