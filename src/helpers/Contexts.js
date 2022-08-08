import { createContext } from "react";
import { GameManager } from "./GameManager";

export const GameStateContext = createContext({
  gameManager: new GameManager(),
  gameState: "",
  setGameState: {},
  score: "0",
  setScore: {},
  data: {},
  setData: {},
});
