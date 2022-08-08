import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "bootstrap/dist/css/bootstrap.min.css";
import { LevelData } from "../helpers/LevelData";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  function Answers(props) {
    if (score === 1) {
      return <EndScreen1 />;
    }
    if (score === 2) {
      return <EndScreen2 />;
    }
    if (score === 3) {
      return <EndScreen3 />;
    }
    if (score === 4) {
      return <EndScreen4 />;
    }
  }

  function EndScreen1(props) {
    return (
      <div className="space-y-4 bg-white p-8 rounded-3xl">
        <div className="text-2xl text-center">EasyFishoil</div>
        <div>
          <img src="easyfishoil.png"></img>
        </div>
        <div className="text-lg text-left">
          Easyfishoil ist das Fischöl, welches die ideale Dosis von Omega-3 und
          Vitamin D mit einem Mal enthält. Das Vitamin D, welches es enthält,
          leistet einen Beitrag für die normale Funktion des Immunsystems.
          Easyfishoil ist geeignet für die Verwendung von Kindern zwischen 3 und
          10 Jahren.
        </div>
        <div className="space-y-4">
          <a
            href="https://easyfishoil.com/urunler/easyfishoil-q/"
            target="_blank"
          >
            <button className="relative w-full text-white h-16 pt-1 px-5 text-xl rounded-full border-primary">
              Der Teil, wo Sie detaillierte Informationen erhalten.
            </button>
          </a>
          <div className="text-xs text-gray-400 text-center">
            Es ist kein Arzneimittel. Es ist ein Nahrungsergänzungsmittel. Eine
            ausgewogene und vielfältige Ernährung ist für ein gesundes Leben
            sehr wichtig. Eine Überdosierung kann abführende Wirkungen haben. Um
            die aufgeführten Wirkungen zu erzielen, muss ein Kind zwischen 3 und
            10 Jahren täglich 1 kaubare Gelkapsel konsumieren.
          </div>
        </div>
      </div>
    );
  }

  function EndScreen2(props) {
    return (
      <div className="space-y-4 bg-white p-8 rounded-3xl">
        <div className="text-2xl text-center">EasyFishoil Beta Glukan</div>
        <div>
          <img src="easyfishoil_beta.png"></img>
        </div>
        <div className="text-lg text-left">
          Easyfishoil Beta-Glucan ist unser Fischöl, welches neben EPA und DHA
          Beta-Glucan, A, C und 500 IU D Vitamine enthält. Die Anwendung ist
          einfach. Die Vitamine A, C und D unterstützen die normalen Funktionen
          des Immunsystems. Easyfishoil Beta-Glucan ist geeignet für die Nutzung
          von Kindern zwischen 3 und 10 Jahren.
        </div>
        <div className="space-y-4">
          <a
            href="https://easyfishoil.com/urunler/easyfishoil-beta-glukan/"
            target="_blank"
          >
            <button className="relative w-full text-white h-16 pt-1 px-5 text-xl rounded-full border-primary">
              Der Teil, wo Sie detaillierte Informationen erhalten.
            </button>
          </a>
          <div className="text-xs text-gray-400 text-center">
            Es ist kein Arzneimittel. Es ist ein Nahrungsergänzungsmittel. Eine
            ausgewogene und vielfältige Ernährung ist für ein gesundes Leben
            sehr wichtig. Eine Überdosierung kann abführende Wirkungen haben. Um
            die aufgeführten Wirkungen zu erzielen, muss ein Kind zwischen 3 und
            10 Jahren täglich 1 kaubare Gelkapsel konsumieren.
          </div>
        </div>
      </div>
    );
  }

  function EndScreen3(props) {
    return (
      <div className="space-y-4 bg-white p-8 rounded-3xl">
        <div className="text-2xl text-center">EasyFishoil Multi</div>
        <div>
          <img src="easyfishoil_multi.png"></img>
        </div>
        <div className="text-lg text-left">
          Easyfishoil Multi ist unser Fischöl, welches leicht in der Anwendung
          ist und welches neben den Fettölen EPA und DHA Multivitamine enthält.
          Es ist ein Nahrungsergänzungsmittel, welches Sie bevorzugen können,
          wenn Sie die tägliche Nahrungszufuhr der Kinder unterstützen möchten.
          Easyfishoil Multi ist geeignet für die Nutzung von Kindern zwischen 3
          und 10 Jahren.
        </div>
        <div className="space-y-4">
          <a
            href="https://easyfishoil.com/urunler/easyfishoil-multi/"
            target="_blank"
          >
            <button className="relative w-full text-white h-16 pt-1 px-5 text-xl rounded-full border-primary">
              Der Teil, wo Sie detaillierte Informationen erhalten.
            </button>
          </a>
          <div className="text-xs text-gray-400 text-center">
            Es ist kein Arzneimittel. Es ist ein Nahrungsergänzungsmittel. Eine
            ausgewogene und vielfältige Ernährung ist für ein gesundes Leben
            sehr wichtig. Eine Überdosierung kann abführende Wirkungen haben. Um
            die aufgeführten Wirkungen zu erzielen, muss ein Kind zwischen 3 und
            10 Jahren täglich 1 kaubare Gelkapsel konsumieren.
          </div>
        </div>
      </div>
    );
  }

  function EndScreen4(props) {
    return (
      <div className="space-y-4 bg-white p-8 rounded-3xl">
        <div className="text-2xl text-center">EasyFishoil Q</div>
        <div>
          <img src="easyfishoil_Q.png"></img>
        </div>
        <div className="text-lg text-left">
          EasyFishoil Q ist unser Fischöl mit leichter Anwendung und welches
          zusätzlich zu den Fettsäuren EPA und DHA, Cholin, B6, B12 und Folsäure
          enthält. DHA unterstützt die normalen Gehirnfunktionen und schützt die
          normale Sehkraft. B6 und B12 unterstützen den normalen Stoffwechsel
          der Energieproduktion und unterstützt die Verringerung von Müdigkeit
          und Mattigkeit. Easyfishoil Q ist geeignet für die Nutzung von Kindern
          zwischen 4 und 10 Jahren.
        </div>
        <div className="space-y-4">
          <a
            href="https://easyfishoil.com/urunler/easyfishoil-q/"
            target="_blank"
          >
            <button className="relative w-full text-white h-16 pt-1 px-5 text-xl rounded-full border-primary">
              Der Teil, wo Sie detaillierte Informationen erhalten.
            </button>
          </a>
          <div className="text-xs text-gray-400 text-center">
            Es ist kein Arzneimittel. Es ist ein Nahrungsergänzungsmittel. Eine
            ausgewogene und vielfältige Ernährung ist für ein gesundes Leben
            sehr wichtig. Eine Überdosierung kann abführende Wirkungen haben. Um
            die aufgeführten Wirkungen zu erzielen, muss ein Kind zwischen 3 und
            10 Jahren täglich 1 kaubare Gelkapsel konsumieren.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div></div>
      <div className="container px-4 md:px-0 mx-auto">
        <div className="space-y-0">
          <div className="flex justify-center"></div>
          <div className="w-3/4 md:w-2/4 mx-auto space-y-4">
            <div className="space-y-6">
              <div className="space-y-10">
                <div className="space-y-3">
                  <div className="text-white text-xl text-center">
                    <div className="text-2xl"> </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-8">
                    <div className="space-y-4 bg-white p-8 rounded-3xl">
                      <Answers />
                    </div>
                  </div>
                </div>
                <div className="space-y-4 bg-white p-8 rounded-3xl">
                  <div className="text-2xl text-center">EasyFishoil</div>
                  <div>
                    <img src="easyfishoil.png"></img>
                  </div>
                  <div className="text-lg text-left">
                    Easyfishoil ist das Fischöl, welches die ideale Dosis von
                    Omega-3 und Vitamin D mit einem Mal enthält. Das Vitamin D,
                    welches es enthält, leistet einen Beitrag für die normale
                    Funktion des Immunsystems. Easyfishoil ist geeignet für die
                    Verwendung von Kindern zwischen 3 und 10 Jahren.
                  </div>
                  <div className="space-y-4">
                    <a
                      href="https://easyfishoil.com/urunler/easyfishoil/"
                      target="_blank"
                    >
                      <button className="relative w-full text-white h-16 pt-1 px-5 text-xl rounded-full border-primary">
                        Der Teil, wo Sie detaillierte Informationen erhalten.
                      </button>
                    </a>
                    <div className="text-xs text-gray-400 text-center text-left">
                      Es ist kein Arzneimittel. Es ist ein
                      Nahrungsergänzungsmittel. Eine ausgewogene und vielfältige
                      Ernährung ist für ein gesundes Leben sehr wichtig. Eine
                      Überdosierung kann abführende Wirkungen haben. Um die
                      aufgeführten Wirkungen zu erzielen, muss ein Kind zwischen
                      3 und 10 Jahren täglich 1 kaubare Gelkapsel konsumieren.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={restartQuiz}
                  className="relative w-full text-white h-14 px-7 pt-1 text-xl rounded-full border-primary"
                >
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
