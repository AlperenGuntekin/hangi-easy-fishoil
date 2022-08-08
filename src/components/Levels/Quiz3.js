import React from "react";
import { LevelData } from "../../helpers/LevelData";
import { GameStateContext } from "../../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";

const Quiz3 = () => {
  const { Level3 } = LevelData;
  const [processing, setProcessing] = React.useState(false);
  const [optionChosen, setOptionChosen] = React.useState("");

  const { gameManager, setGameState, data, setData } =
    React.useContext(GameStateContext);

  const goNext = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const result = await gameManager.next({
      sessionId: data.sessionId,
      gender: optionChosen,
    });

    setProcessing(false);
    setData(result);
    setGameState(gameManager.states.level4);
  };

  const goPrev = async (e) => {
    e.preventDefault();
    setGameState(gameManager.states.level2);
  };

  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-10">
          <div className="w-4/4 md:w-2/4 mx-auto space-y-4">
            <img
              alt="description of image"
              className="rounded-3xl"
              src={Level3.image}
            />
            <h1 className="bg-white p-8 rounded-3xl text-gray-700 text-xl text-left">
              {Level3.prompt}
            </h1>
            <div className="flex flex-col justify-center gap-2">
              {Level3.options.map((option, i) => (
                <button
                  key={i}
                  id={option.key}
                  onClick={() => setOptionChosen(option.value)}
                  className={`${
                    option.value == optionChosen ? "selected " : ""
                  }relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary`}
                >
                  {option.value}
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
                    className="w-6"
                  ></img>
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
};

export default Quiz3;
