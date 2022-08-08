import React from "react";
import { LevelData } from "../../helpers/LevelData";
import { GameStateContext } from "../../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";

const Quiz5 = () => {
  const { Level5 } = LevelData;
  const [processing, setProcessing] = React.useState(false);
  const [optionChosen, setOptionChosen] = React.useState("");

  const { gameManager, setGameState, data, setData, score, setScore } =
  React.useContext(GameStateContext);

  const goNext = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (Level5.key1 = optionChosen) {
      setScore (score + 1);
    }
    if (Level5.key2 = optionChosen) {
      setScore (score + 2);
    }
    if (Level5.key3 = optionChosen) {
      setScore (score + 3);
    }
    if (Level5.key4 = optionChosen) {
      setScore (score + 4);
    }

    const result = await gameManager.next({
      sessionId: data.sessionId,
      priority: optionChosen,
    });

    setProcessing(false);
    setData(result);
    setGameState(gameManager.states.finished);
  };

  const goPrev = async (e) => {
    e.preventDefault();
    setGameState(gameManager.states.level4);
  };




  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-10">
          <div className="w-4/4 md:w-2/4 mx-auto space-y-4">
            <img
              alt="description of image"
              className="rounded-3xl"
              src={Level5.image}
            />
            <h1 className="bg-white p-8 rounded-3xl text-gray-700 text-xl text-left">
            {Level5.prompt}
            </h1>
            <div className="flex flex-col justify-center gap-2">
            {Level5.options.map((options, i) => (
                <button
                  key={i}
                  id={options.key}
                  onClick={() => setOptionChosen(options.value)}
                  className={`${
                    options.value == optionChosen ? "selected " : ""
                  }relative flex items-center justify-center px-12 py-2 pt-2 text-xl rounded-3xl text-white border-primary`}
                >
                  {options.value}
                </button>
              ))}
              <div className="flex justify-between">
                  <button
                  className="relative text-white h-16 px-7 text-2xl rounded-full border-primary"
                  onClick={goPrev}
                  id="prevQuestion"
                  >
                  <img
                  alt="description of image"
                  src="./back-icon.svg"
                  className="w-6">
                  </img>
                  </button>
      
                  <button
                className="relative text-white h-16 px-7 text-2xl rounded-full border-primary"
                onClick={goNext}
                disabled={processing || optionChosen === ""}
                id="nextQuestion"
              >
                <img
                  alt="description of image"
                  src="./next-icon.svg"
                  className="w-6"
                ></img>
              </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz5;