import axios from "axios";
import React from "react";
import "../App.css";
import { Question2 } from "../helpers/Question";
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
        "childAge": 12,
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
    if (Question2[currentQuestion].answer == optionChosen) {
      setScore(score + 0);
    }
    setCurrentQuestion(currentQuestion - 1);
  };
  
  const nextQuestion = () => {
    if (Question2[currentQuestion].answer == optionChosen) {
      setScore(score + 0);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setScore(0);
    setGameState("playing");
  };


  const finishQuiz = () => {
    if (Question2[currentQuestion].answerA == optionChosen) {
      setGameState("playing3");
    }
    if (Question2[currentQuestion].answerB == optionChosen) {
      setGameState("playing3");
    }
  };
  

 /* React.useEffect(() => {
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
  if (!post) return "No post!"  */

  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-10">
          <div className="w-4/4 md:w-2/4 mx-auto space-y-4">
            <img
              alt="description of image"
              className="rounded-3xl"
              src={Question2[currentQuestion].images}
            />
            <h1 className="bg-white p-8 rounded-3xl text-gray-700 text-xl text-left">
            {Question2[currentQuestion].prompt}
            </h1>
            <div className="flex justify-between gap-4">
              <div className="w-2/4">
              <select 
                id="optionB" 
                value={optionA}
                onClick={() => {
                chooseOption("optionA");
                }}                  
              className="relative w-full h-14 pt-1 text-l rounded-full text-white text-center border-primary">
                <option value>Wählen</option>             
                <option value={post.childAge}>3</option>
                <option value={post.childAge}>4</option>
                <option value={post.childAge}>5</option>
                <option value={post.childAge}>6</option>
                <option value={post.childAge}>7</option>
                <option value={post.childAge}>8</option>
                <option value={post.childAge}>9</option>
                <option value={post.childAge}>10</option>
                <option value={post.childAge}>11</option>
              </select>
              </div>
              <div 
              onClick={createPost}
              className="w-2/4">
                <button 
                id="optionB" 
                value={post.childAge}
                onClick={() => {
                  chooseOption("optionB");
                }}          
                className="relative w-full h-14 pt-1 text-l rounded-full text-white border-primary">
                {Question2[currentQuestion].optionB}
                </button>
              </div>
             </div>    
             <div className="flex justify-between">
              {currentQuestion == Question2.length + 1 ? (
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
                  className="relative text-white h-16 px-7 text-2xl rounded-full border-primary"
                  onClick={restartQuiz}
                  id="backQuestion"
                >
                <img alt="description of image" src="./back-icon.svg" className="w-6"></img>
                </button>}
                                {currentQuestion == Question2.length - 1 ? (
                      <button   
                      className="relative text-white h-16 px-7 text-2xl rounded-full border-primary"
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