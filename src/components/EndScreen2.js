import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";


const EndScreen = () => {
  const { setScore, setGameState } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-0">
          <div className="flex justify-center">
          </div>
          <div className="w-3/4 md:w-2/4 mx-auto space-y-4">
          <div className="space-y-6">
            <div className="space-y-10"> 
              <div className="space-y-3">
                  <div className="text-white text-xl text-center">
                    <div className="text-2xl"> </div>
                  </div>
              {/*    <div className="relative text-white p-4 text-center rounded-md text-lg"> 
                    DHA normal beyin fonksiyonlarının korunmasına destek olur.
                  </div> */}
              </div>
              <div className="space-y-4">
               {/*     <div className="text-xl text-center text-white">
                    İçerisinde DHA bulunan ürünlerimiz
                  </div> */}
                  <div className="space-y-8">
                    <div className="space-y-4 bg-white p-8 rounded-3xl">
                        <div className="text-2xl text-center">
                        EasyFishoil Beta Glukan
                        </div>
                        <div>
                          <img src="easyfishoil_beta.png"></img>
                        </div>
                        <div className="text-lg text-left">
                            Easyfishoil Beta-Glucan ist unser Fischöl, welches neben EPA und DHA Beta-Glucan, A, C und 500 IU D Vitamine enthält. Die Anwendung ist einfach. Die Vitamine A, C und D unterstützen die normalen Funktionen des Immunsystems. Easyfishoil Beta-Glucan ist geeignet für die Nutzung von Kindern zwischen 3 und 10 Jahren.
                        </div>
                        <div className="space-y-4">
                          <a href="https://easyfishoil.com/urunler/easyfishoil-beta-glukan/" target="_blank">
                            <button className="relative w-full text-white h-16 pt-1 px-5 text-xl rounded-full">Der Teil, wo Sie detaillierte Informationen erhalten.</button>
                          </a>
                          <div className="text-xs text-gray-400 text-center">
                          Es ist kein Arzneimittel. Es ist ein Nahrungsergänzungsmittel. Eine ausgewogene und vielfältige Ernährung ist für ein gesundes Leben sehr wichtig. Eine Überdosierung kann abführende Wirkungen haben. Um die aufgeführten Wirkungen zu erzielen, muss ein Kind zwischen 3 und 10 Jahren täglich 1 kaubare Gelkapsel konsumieren.
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="space-y-4 bg-white p-8 rounded-3xl">
                  <div className="text-2xl text-center">EasyFishoil</div>
                  <div>
                    <img src="easyfishoil.png"></img>
                  </div>
                  <div className="text-lg text-left">
                  Easyfishoil ist das Fischöl, welches die ideale Dosis von Omega-3 und Vitamin D mit einem Mal enthält. Das Vitamin D, welches es enthält, leistet einen Beitrag für die normale Funktion des Immunsystems. Easyfishoil ist geeignet für die Verwendung von Kindern zwischen 3 und 10 Jahren.
                  </div>
                  <div className="space-y-4">
                    <a href="https://easyfishoil.com/urunler/easyfishoil-q/" target="_blank">
                      <button className="relative w-full text-white h-16 pt-1 px-5 text-xl rounded-full">Der Teil, wo Sie detaillierte Informationen erhalten.</button>
                    </a>
                    <div className="text-xs text-gray-400 text-center text-left">
                    Es ist kein Arzneimittel. Es ist ein Nahrungsergänzungsmittel. Eine ausgewogene und vielfältige Ernährung ist für ein gesundes Leben sehr wichtig. Eine Überdosierung kann abführende Wirkungen haben. Um die aufgeführten Wirkungen zu erzielen, muss ein Kind zwischen 3 und 10 Jahren täglich 1 kaubare Gelkapsel konsumieren.
                    </div>
                  </div>
              </div>
            </div>
         {/*    <div>
              <a href="https://www.google.com/maps/search/eczane/" target="_blank">
                <button className="relative w-full text-white h-16 pt-1 px-5 text-2xl rounded-full">
                  SİZE EN YAKIN ECZANE
                </button>
              </a>
            </div>
          <div> 
              <a href="https://easyfishoil.com" target="_blank">
                <div className="border-2 border-white rounded-3xl overflow-hidden">
                  <div className="text-center text-white text-3xl pt-5 pb-2">
                    <img src="kutular_4lü_3D_template_alt.png" className="-mb-16 w-5/6 mx-auto"></img>
                    <div className="bg-white rounded-t-3xl w-full py-10"></div>
                  </div>
                </div>
              </a>
            </div> */}
            <div> 
              <button 
              onClick={restartQuiz}
              className="relative w-full text-white h-14 px-7 pt-1 text-xl rounded-full">
                Zurück nach oben
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;
