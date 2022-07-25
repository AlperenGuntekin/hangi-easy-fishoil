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
                  <div className="relative text-white p-4 text-center rounded-md text-lg"> 
                    DHA normal beyin fonksiyonlarının korunmasına destek olur.
                  </div>
              </div>
              <div className="space-y-4">
                  <div className="text-xl text-center text-white">
                    İçerisinde DHA bulunan ürünlerimiz
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-4 bg-white p-8 rounded-3xl">
                        <div className="text-2xl text-center">
                        EasyFishoil Q
                        </div>
                        <div>
                          <img src="easyfishoil_Q.png"></img>
                        </div>
                        <div className="text-lg text-left">
                        EasyFishoil Q, DHA ve EPA yağ asitlerine ek olarak kolin, B6, B12 ve folik asit içeren, kullanımı kolay balık yağımız. DHA, normal beyin fonksiyonlarının ve normal görme yetisinin korunmasına katkı sağlar. B6 ve B12 vitamini normal enerji oluşum metabolizmasını destekler, yorgunluk ve bitkinliğin azalmasına katkıda bulunur. EasyFishoil Q 4-10 yaş aralığındaki çocukların kullanımına uygundur.
                        </div>
                        <div className="space-y-4">
                          <a href="https://easyfishoil.com/urunler/easyfishoil-q/" target="_blank">
                            <button className="relative w-full text-white h-16 pt-1 px-5 text-xl rounded-full">DAHA FAZLA BİLGİ ALIN</button>
                          </a>
                          <div className="text-xs text-gray-400 text-center">
                            İlaç değildir. Takviye edici gıdadır. Dengeli ve çeşitli beslenme sağlıklı yaşam için önemlidir. Faydalı etki günde 250 mg DHA alındığında sağlanacaktır. Beyan edilen faydalı etkinin sağlanabilmesi için 4-10 yaş çocukların günde 1 çiğnenebilir jel form tüketmesi önerilir. 
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
                    EasyFishoil tek bir seferde ideal doza sahip omega-3 ve D vitamini içeren kullanımı kolay balık yağımız. İçerisindeki D vitamini bağışıklık sisteminin normal fonksiyonuna katkıda bulunur. EasyFishoil 3-10 yaş aralığındaki çocukların kullanımına uygundur.
                  </div>
                  <div className="space-y-4">
                    <a href="https://easyfishoil.com/urunler/easyfishoil-q/" target="_blank">
                      <button className="relative w-full text-white h-16 pt-1 px-5 text-xl rounded-full">DAHA FAZLA BİLGİ ALIN</button>
                    </a>
                    <div className="text-xs text-gray-400 text-center text-left">
                      İlaç değildir. Takviye edici gıdadır. Dengeli ve çeşitli beslenme sağlıklı yaşam için önemlidir. Faydalı etki günde 250 mg DHA alındığında sağlanacaktır. Beyan edilen faydalı etkinin sağlanabilmesi için 4-10 yaş çocukların günde 1 çiğnenebilir jel form tüketmesi önerilir. 
                    </div>
                  </div>
              </div>
            </div>
            <div>
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
            </div>
            <div>
              <button 
              onClick={restartQuiz}
              className="relative w-full text-white h-14 px-7 pt-1 text-xl rounded-full">
                BAŞA DÖN
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
