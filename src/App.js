import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Quiz2 from "./components/Quiz2";
import Quiz3 from "./components/Quiz3";
import Quiz4 from "./components/Quiz4";
import Quiz5 from "./components/Quiz5";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
import { Question, Question2, Question3, Question4, Question5 } from "./helpers/Question";




// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (

      
    <div className="bg-background">
    <div className="container px-4 md:px-0 mx-auto py-10">
      <div className="space-y-10">
      <div className="flex justify-center">
      <div className="relative text-3xl md:text-4xl bg-white rounded-3xl pt-4 pb-3 px-6 z-10">
        <span>Welches EasyFishoil?</span>  
        <img src="stars.svg" className="absolute w-16 -left-8 -top-10"></img>
      </div>
      <div className="absolute -ml-6 mt-2 text-3xl md:text-4xl border border-dark text-transparent rounded-3xl pt-4 pb-3 px-6 z-0">
      Welches EasyFishoil?
      </div>
      </div>

      <div className="w-4/4 md:w-4/4 mx-auto space-y-4">
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz Question={Question} />}
        {gameState === "playing2" && <Quiz2 Question={Question2}/>}
        {gameState === "playing3" && <Quiz3 Question={Question3}/>}
        {gameState === "playing4" && <Quiz4 Question={Question4}/>}
        {gameState === "playing5" && <Quiz5 Question={Question5}/>}
        {gameState === "finished" && <EndScreen />}

      </GameStateContext.Provider>
      
      </div>  
    </div>
    </div>
    </div>
  );
}

export default App;
