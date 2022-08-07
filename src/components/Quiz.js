import axios from "axios";
import React from "react";
import "../App.css";
import { Question } from "../helpers/Question";
import { useState } from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";

const baseURL = "https://api.beeshopify.com/easyfishoil-quizs/add";

export default function App() {
  const [post, setPost] = React.useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [value, setValue] = useState([0, 6]);

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
        sessionId : "c3076708-416c-415d-bf24-f0d34347cc37",
        season: chooseOption
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
    if (Question[currentQuestion].answer === optionChosen) {
      setScore(score + 0);
    }
    setCurrentQuestion(currentQuestion - 1);
  };
  
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  const nextQuestion = () => {
    if (Question[currentQuestion].answer === optionChosen) {
      setScore(score + 0);
    }
    setCurrentQuestion(currentQuestion + 1);
  };


  const finishQuiz = () => {
    if (Question[currentQuestion].answer === optionChosen) {
      setScore(score + 0);
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
              src={Question[currentQuestion].images}
            />
            <h1 className="bg-white p-8 rounded-3xl text-gray-700 text-xl text-left">
            {Question[currentQuestion].prompt}
            </h1>
            <div className="flex flex-col justify-center gap-2">
       {/*}     <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange} className="flex flex-col justify-center gap-2">
              <ToggleButton
                id="optionA" 
                value={1}
                onClick={updatePost}             
                className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">             
                {Question[currentQuestion].optionA}
              </ToggleButton>
              <ToggleButton                 
                id="optionB" 
                value={2}
                className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">             
                {Question[currentQuestion].optionB}
              </ToggleButton>
              <ToggleButton 
                id="optionC" 
                value={3}
                onClick={updatePost}             
                className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                {Question[currentQuestion].optionC}             
              </ToggleButton>
              <ToggleButton 
                id="optionD" 
                value={4}
                onClick={updatePost}             
                className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                {Question[currentQuestion].optionD}             
              </ToggleButton>
              <ToggleButton 
                id="optionE" 
                value={5}
                onClick={updatePost}             
                className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                {Question[currentQuestion].optionE}             
              </ToggleButton>
            </ToggleButtonGroup>  */}
            </div>
            <div type="checkbox" value={value} onClick={createPost} className="flex flex-col justify-center gap-2">
                <button
                    id="Winter" 
                    value={post.season}
                    onClick={() => {
                      chooseOption("optionA");
                    }}        
                    className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                    {Question[currentQuestion].optionA}
                </button>
                <button                
                    id="optionB" 
                    value={post.season}
                    onClick={() => {
                      chooseOption("optionB");
                    }}   
                    className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                    {Question[currentQuestion].optionB}
                </button>
                <button 
                    id="optionC" 
                    value={post.season}
                    onClick={() => {
                      chooseOption("optionC");
                    }}  
                    className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                    {Question[currentQuestion].optionC}
                </button>
                <button
                    id="optionD"
                    value={post.season}
                    onClick={() => {
                      chooseOption("optionD");
                    }}     
                    className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                    {Question[currentQuestion].optionD}
                </button>
                <button 
                    value={post.season} 
                    id="optionE"
                    onClick={() => {
                      chooseOption("optionE");
                    }}  
                    className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary">
                    {Question[currentQuestion].optionE}
                </button>
              <div className="flex justify-between">
                  {currentQuestion === Question.length + 1 ? (
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
                    {currentQuestion === Question.length - 1 ? (
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