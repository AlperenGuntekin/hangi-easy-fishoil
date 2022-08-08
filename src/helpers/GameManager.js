import axios from "axios";

export class GameManager {
  states = {
    menu: "menu",
    level1: "level1",
    level2: "level2",
    level3: "level3",
    level4: "level4",
    level5: "level5",
    finished: "finished",
  };

  async start() {
    try {
      let url = "https://api.beeshopify.com/easyfishoil-quizs";
      let result = await axios.post(`${url}/start`);

      return result.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async next(data) {
    try {
      let url = "https://api.beeshopify.com/easyfishoil-quizs";
      let result = await axios.post(`${url}/add`, data);

      return result.data;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
