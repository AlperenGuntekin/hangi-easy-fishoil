import React from "react";
import { LevelData } from "../../helpers/LevelData";
import { GameStateContext } from "../../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";

const Quiz2 = () => {
  const { Level2 } = LevelData;
  const [processing, setProcessing] = React.useState(false);
  const [optionChosen, setOptionChosen] = React.useState("");

  const { gameManager, setGameState, data, setData } =
    React.useContext(GameStateContext);

  const goNext = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const result = await gameManager.next({
      sessionId: data.sessionId,
      childAge: optionChosen,
    });

    setProcessing(false);
    setData(result);
    setGameState(gameManager.states.level3);
  };

  const goPrev = async (e) => {
    e.preventDefault();
    setGameState(gameManager.states.level1);
  };

  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-10">
          <div className="w-4/4 md:w-2/4 mx-auto space-y-4">
            <img
              alt="description of image"
              className="rounded-3xl"
              src={Level2.image}
            />
            <h1 className="bg-white p-8 rounded-3xl text-gray-700 text-xl text-left">
              {Level2.prompt}
            </h1>
            <div className="flex justify-between gap-4">
              <div className="w-2/4">
                <select
                  onChange={(e) => {
                    console.log(e.target.value);
                    setOptionChosen(e.target.value);
                  }}
                  className="relative w-full h-14 pt-1 text-l rounded-full text-white text-center border-primary"
                >
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
                  onClick={() => {
                    setOptionChosen(12);
                  }}
                  className="relative w-full h-14 pt-1 text-l rounded-full text-white border-primary"
                >
                  Die andere Auswahl ist über 12 Jahre
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                className="relative text-white h-16 px-7 text-2xl rounded-full"
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
  );
};

export default Quiz2;
