import "../App.css";
import { Questions } from "../helpers/Questions";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const { score, setScore, setGameState } =
  useContext(GameStateContext);


useEffect(() => {
  setLoading(true);
  axios ({
      method: "POST",
      url: "https://api.beeshopify.com/easyfishoil-quizs/add",
  })
      .then((res) => {
      console.log(res.data);
      setData(res.data);
  })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);


  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const backQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion - 1);
  };
  
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };
  

  return (
    
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-10">
          <div className="w-4/4 md:w-2/4 mx-auto space-y-4">
          {data.map((add)=> ( 
          <div key={add.id} className="card">
           <div className="card-description">
               <h6>{add.childAge}</h6>
               <h6>{`Price: ${add.gender}`}</h6>
           </div>
          </div>
          ))}
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
                id="1"
                className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white"
                onClick={() => {
                  chooseOption("optionA");
                }}
              >
                {Questions[currentQuestion].optionA}
              </button>
              <button
                id="2"
                className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white"
                onClick={() => {
                  chooseOption("optionB");
                }}
              >
                {Questions[currentQuestion].optionB}
              </button>
              <button
                id="3"
                className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white"
                onClick={() => {
                  chooseOption("optionC");
                }}
              >
                {Questions[currentQuestion].optionC}
              </button>
              <button
                id="4"
                className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white"
                onClick={() => {
                  chooseOption("optionD");
                }}
              >
                {Questions[currentQuestion].optionD}
              </button>
              <button
                id="5"
                className="relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white"
                onClick={() => {
                  chooseOption("optionE");
                }}
              >
                {Questions[currentQuestion].optionE}
              </button>
            </div>
            <div className="flex justify-between">
                  {currentQuestion == Questions.length - 1 ? (
                      <button   
                      className="relative text-white h-16 px-7 text-2xl rounded-full"
                      onClick={restartQuiz}
                      id="backQuestion"
                    >
                    <img alt="description of image" src="./back-icon.svg" className="w-6"></img>
                    </button>
                  
                  ) : (
                    <button
                      className="relative text-white h-16 px-7 text-2xl rounded-full"
                      onClick={backQuestion}
                      id="backQuestion"
                    >
                    <img alt="description of image" src="./back-icon.svg" className="w-6"></img>
                    </button>
            )}
                    {currentQuestion == Questions.length - 1 ? (
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

export default Quiz;
