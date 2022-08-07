import axios from "axios";
import React from "react";
import "../App.css";
import { Question3 }   from "../helpers/Question";
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

  React.useEffect(() => {
    axios.post(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        "sessionId" : "c3076708-416c-415d-bf24-f0d34347cc37",
        "gender": "male",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "Loading..."


  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const backQuestion = () => {
    if (Question3[currentQuestion].answer == optionChosen) {
      setScore(score + 0);
    }
    setCurrentQuestion(currentQuestion - 1);
  };
  
  const nextQuestion = () => {
    if (Question3[currentQuestion].answer == optionChosen) {
      setScore(score + 0);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setScore(0);
    setGameState("playing2");
  };


  const finishQuiz = () => {
    if (Question3[currentQuestion].answerA == optionChosen) {
      setGameState("playing4");
    }
    if (Question3[currentQuestion].answerB == optionChosen) {
      setGameState("playing4");
    }
  };
  
 /*  React.useEffect(() => {
    axios.post(`${baseURL}/add`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .post(baseURL, {
        childAge: 12,
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!" */

  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-10">
          <div className="w-4/4 md:w-2/4 mx-auto space-y-4">
            <img
              alt="description of image"
              className="rounded-3xl"
              src={Question3[currentQuestion].images}
            />
            <h1 className="bg-white p-8 rounded-3xl text-gray-700 text-xl text-left">
            {Question3[currentQuestion].prompt}
            </h1>
            <div
            onClick={createPost} 
            className="flex flex-col justify-center gap-2" 
            type="radio">
                <button
                    id="optionA" 
                    value={post.gender}
                    onClick={() => {
                      chooseOption("optionA");
                    }}     
                    className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white border-primary">
                    {Question3[currentQuestion].optionA}

                </button>
                <button 
                    id="optionB" 
                    value={post.gender}
                    onClick={() => {
                      chooseOption("optionB");
                    }}         
                    className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white border-primary">
                    {Question3[currentQuestion].optionB}
                </button>
              <div className="flex justify-between">
              {currentQuestion == Question3.length + 1 ? (
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
                                {currentQuestion == Question3.length - 1 ? (
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