import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";


function Menu() {
  const { gameState, setGameState} = useContext(
    GameStateContext
  );
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
              <p>Her çocuk özeldir ve farklı ihtiyaçları vardır. EasyFishoil, geliştirdiği dört farklı ürünle çocuğunuza balık yağı ve ihtiyacına yönelik vitaminleri bir arada sunuyor.</p>
              <p>Birkaç soruya cevap vererek hangi EasyFishoil'in çocuğunuza uygun olduğunu öğrenmek ister misiniz? </p>
              <p>Haydi başlayalım!</p>
            </div>
          </div>
          <div className="flex justify-center">
              <button className="relative flex items-center justify-center h-14 px-5 pt-1 text-xl cursor-pointer rounded-full text-white"
              onClick={() => {
              setGameState("playing");
              }}
              >
              <span className="relative leading-relaxed">
              BAŞLA
              </span>
              </button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
