import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
import { GameManager } from "./helpers/GameManager";
import Menu from "./components/Menu";
import { Quiz1, Quiz2, Quiz3, Quiz4, Quiz5 } from "./components/Levels";
import EndScreen from "./components/EndScreen";
import "./App.css";

const App = () => {
  const gameManager = new GameManager();

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [data, setData] = useState({});

  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto py-10">
        <div className="space-y-10">
          <div className="flex justify-center">
            <div className="relative text-3xl md:text-4xl bg-white rounded-3xl pt-4 pb-3 px-6 z-10">
              <span>Welches EasyFishoil?</span>
              <img
                src="stars.svg"
                className="absolute w-16 -left-8 -top-10"
              ></img>
            </div>
            <div className="absolute -ml-6 mt-2 text-3xl md:text-4xl border border-dark text-transparent rounded-3xl pt-4 pb-3 px-6 z-0">
              Welches EasyFishoil?
            </div>
          </div>

          <div className="w-4/4 md:w-4/4 mx-auto space-y-4">
            <GameStateContext.Provider
              value={{
                gameManager,
                gameState,
                setGameState,
                score,
                setScore,
                data,
                setData,
              }}
            >
              {console.log(gameState, data, score)}
              {gameState === "menu" && <Menu />}
              {gameState === "level1" && <Quiz1 />}
              {gameState === "level2" && <Quiz2 />}
              {gameState === "level3" && <Quiz3 />}
              {gameState === "level4" && <Quiz4 />}
              {gameState === "level5" && <Quiz5 />}
              {gameState === "finished" && <EndScreen />}
            </GameStateContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
