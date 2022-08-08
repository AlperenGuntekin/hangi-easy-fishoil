export const LevelData = {
  Level1: {
    image: "./02-soru1_mevsimler.jpg",
    prompt:
      "Zu welchen Jahreszeiten möchten Sie EasyFishoil für Ihr Kind nutzen? (Sie können mehr als eine Auswahl treffen)",

    options: [
      { key: "option1", value: "Winter" },
      { key: "option2", value: "Frühling" },
      { key: "option3", value: "Sommer" },
      { key: "option4", value: "Herbst" },
      { key: "option5", value: "Alle Jahreszeiten" },
    ],
  },
  Level2: {
    image: "./03-soru2_yas.jpg",
    prompt: "Wie alt ist das Kind, welches Fischöl einnehmen soll?",
    options: [
      { key: "option1", value: "Erlaubt die Auswahl zwischen 3 und 11 Jahren" },
      { key: "option2", value: "Die andere Auswahl ist über 12 Jahre" },
    ],
  },
  Level3: {
    image: "./04-soru3_cinsiyet.jpg",
    prompt: "Welches Geschlecht hat das Kind, welches Fischöl nutzen soll?",
    options: [
      { key: "option1", value: "Mädchen" },
      { key: "option2", value: "Junge" },
    ],
  },
  Level4: {
    image: "./05-soru4_ilk_sira.jpg",
    prompt: "Welche würde an erster Stelle stehen, wenn Sie Fischöl nutzen?",
    options: [
      { key: "option1", value: "Leichte Nutzung" },
      { key: "option2", value: "Geschmack und Geruch" },
      { key: "option3", value: "Störung der Oxidationswerte" },
      { key: "option4", value: "Preis" },
      { key: "option5", value: "Sicherheit" },
    ],
  },
  Level5: {
    image: "./06-soru5_onceliginiz.jpg",
    prompt: "Was ist Ihre Priorität?",
    options: [
      { answerA: "option1", key: "option1", value: "Ich möchte, dass mein Kind die ideale Dosis von Omega-3 und Vitamin D mit einem Mal erhält." },
      { answerB: "option2", key: "option2", value: "Ich suche ein Nahrungsergänzungsmittel mit besonderer Formulierung für mein Kind, welches das Immunsystem unterstützt." },
      { answerC: "option3", key: "option3", value: "Ich finde es wichtig, dass mein Kind Vitamine einnimmt, damit sie die tägliche Ernährung unterstützt." },
      { answerD: "option4", key: "option4", value: "Ich suche ein Nahrungsergänzungsmittel für mein Kind, welches die Gehirnfunktionen mit seiner besonderen Formulierung unterstützt." },
    ],
  },
  
};


// export const Question5 = [
//   {
//     images: "./06-soru5_onceliginiz.jpg",
//     prompt: "Was ist Ihre Priorität?",
//     optionA:
//       "Ich möchte, dass mein Kind die ideale Dosis von Omega-3 und Vitamin D mit einem Mal erhält.",
//     optionB:
//       "Ich suche ein Nahrungsergänzungsmittel mit besonderer Formulierung für mein Kind, welches das Immunsystem unterstützt.",
//     optionC:
//       "Ich finde es wichtig, dass mein Kind Vitamine einnimmt, damit sie die tägliche Ernährung unterstützt.",
//     optionD:
//       "Ich suche ein Nahrungsergänzungsmittel für mein Kind, welches die Gehirnfunktionen mit seiner besonderen Formulierung unterstützt.",
//     answerA: "optionA",
//     answerB: "optionB",
//     answerC: "optionC",
//     answerD: "optionD",
//   },
// ];
