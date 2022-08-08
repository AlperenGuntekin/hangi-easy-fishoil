import axios from "axios";
import React from "react";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  const { gameManager, setGameState, setData } = useContext(GameStateContext);

  const createPost = async (e) => {
    e.preventDefault();

    let result = await gameManager.start();
    setData(result);
    setGameState(gameManager.states.level1);
  };

  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-0">
          <div className="flex justify-center"></div>
          <div className="w-4/4 md:w-2/4 mx-auto space-y-4">
            <div>
              <img src="./01-giris_ekran.jpg" className="rounded-3xl"></img>
            </div>
            <div className="bg-white p-8 rounded-3xl text-gray-700 text-lg text-left">
              <div className="space-y-4">
                <p>
                  Wollen Sie wissen welches EasyFishoil für Ihr Kind geeignet
                  ist, indem Sie einige Fragen beantworten?{" "}
                </p>
                <p>Los fangen wir an!</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary"
                onClick={createPost}
              >
                ANFANG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
