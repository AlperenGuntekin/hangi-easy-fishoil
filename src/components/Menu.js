import axios from "axios";
import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";

const baseURL = "https://api.beeshopify.com/easyfishoil-quizs";

export default function App() {
  const [post, setPost] = React.useState(null);

  const {setGameState} = useContext(
    GameStateContext);

    
    React.useEffect(() => {
      axios.post(`${baseURL}/start`).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    function createPost() {
      axios
        .post(baseURL, {
          sessionId: "c3076708-416c-415d-bf24-f0d34347cc37",
        })
        .then((response) => {
          setPost(response.data);
        });
    }
  
    if (!post) return "Loading..." 

  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-0">
          <div className="flex justify-center">
          </div>
          <div className="w-4/4 md:w-2/4 mx-auto space-y-4">
          <div>
            <img src="./01-giris_ekran.jpg" className="rounded-3xl"></img>
          </div>
          <div className="bg-white p-8 rounded-3xl text-gray-700 text-lg text-left">
            <div className="space-y-4">
              <p>Wollen Sie wissen welches EasyFishoil für Ihr Kind geeignet ist, indem Sie einige Fragen beantworten? </p>
              <p>Los fangen wir an!</p>
            </div>
          </div>
          <div 
          onClick={createPost}
          className="flex justify-center">
              <button 
              className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white border-primary"
              onClick={() => {
                setGameState("playing");
                }}
                >
              <span className="relative leading-relaxed">
              ANFANG
              </span>
              </button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}