let quizStartButton = document.getElementById("quizStartButton");
let checkBoxSelection = [4];
checkBoxSelection[0] = document.getElementById("answer1");
checkBoxSelection[1] = document.getElementById("answer2");
checkBoxSelection[2] = document.getElementById("answer3");
checkBoxSelection[3] = document.getElementById("answer4");
checkBoxSelection[0].style.display = "none";
checkBoxSelection[1].style.display = "none";
checkBoxSelection[2].style.display = "none";
checkBoxSelection[3].style.display = "none";
let quizNextButton = document.getElementById("quizNextButton");
quizNextButton.style.display = "none";
let quizEndButton = document.getElementById("quizEndButton");
quizEndButton.style.display = "none";
let quizTextHeading = document.querySelector("#quizTextHeading");
let quizText = document.querySelector("#quizText");
let questionAnswer;
const quizQuestionAnswerSelection = ["A", "B", "C", "D"];
let questionAnswerSelection = [4];
questionAnswerSelection[0] = document.querySelector(
  "#questionAnswerSelection1"
);
questionAnswerSelection[1] = document.querySelector(
  "#questionAnswerSelection2"
);
questionAnswerSelection[2] = document.querySelector(
  "#questionAnswerSelection3"
);
questionAnswerSelection[3] = document.querySelector(
  "#questionAnswerSelection4"
);
let playerAnswer = [];
let playerAnswerText = [];
let playerAnswerPoint = [];
// QUESTIONS //
const quizQuestions = [
  {
    questionText: "Vilken av följande egenskaper stämmer för ankor?",
    questionAnswer: [
        "De kan flyga långa sträckor.", 
        "De kan andas under vatten.", 
        "De är däggdjur.", 
        "Deras fjädrar är vattentäta."],
    questionSolution: [true, false, false, true],
    questionSolutionText: ["A", "D"],
    questionPoints: 1,
  },
  {
    questionText: "Vad kallas en ankhane för?",
    questionAnswer: [
        "Tupp", 
        "Anko", 
        "Drake", 
        "And"],
    questionSolution: [false, false, true, false],
    questionSolutionText: ["C"],
    questionPoints: 1,
  },
  {
    questionText: "Vilken av följande mat äter ankor i naturen?",
    questionAnswer: [
        "Alger", 
        "Choklad", 
        "Insekter", 
        "Småfisk"],
    questionSolution: [true, false, true, true],
    questionSolutionText: ["A", "C", "D"],
    questionPoints: 1,
  },
  {
    questionText: "Vilket/vilka påståenden stämmer om ankors flygförmåga?",
    questionAnswer: [
        "De kan flyga upp till 100 km/h.", 
        "De kan flyga över kontinenter.", 
        "De kan inte flyga alls.", 
        "De flyger bara under vintern."],
    questionSolution: [true, true, false, false],
    questionSolutionText: ["A", "B"],
    questionPoints: 1,
  },
  {
    questionText: "Vad är sant om ankors kommunikation?",
    questionAnswer: [
      "Alla ankor kvackar.",
      "De kan kommunicera med kroppsspråk.",
      "De använder kvackningar för att varna andra ankor.",
      "Ankor är stumma",
    ],
    questionSolution: [false, true, true, false],
    questionSolutionText: ["B", "C"],
    questionPoints: 1,
  },
  {
    questionText:
      "Vilka av följande är naturliga fiender för ankor?",
    questionAnswer: [
      "Rävar",
      "Hajar",
      "Örnar",
      "Björnar",
    ],
    questionSolution: [true, false, true, false],
    questionSolutionText: ["A", "C"],
    questionPoints: 1,
  },
  {
    questionText: "Vilken/vilka egenskaper utmärker hos ankor?",
    questionAnswer: [
      "Deras fjädrar stöter bort vatten.",
      "De har tänder för att tugga mat.",
      "Deras vingar är för små för att flyga.",
      "Deras fötter har simhudar.",
    ],
    questionSolution: [true, false, true, true],
    questionSolutionText: ["A", "C", "D"],
    questionPoints: 1,
  },
  {
    questionText: "Vilken av följande ankraser finns verkligen?",
    questionAnswer: [
      "Indian Runner",
      "Galaxy Duck",
      "Peking Duck",
      "Kalle Anka",
    ],
    questionSolution: [true, false, true, false],
    questionSolutionText: ["A", "C"],
    questionPoints: 1,
  },
  {
    questionText: "Vad är sant om ankors migration?",
    questionAnswer: [
      "De flyger söderut på vintern.",
      "De följer samma rutt varje år.",
      "De flyger alltid ensamma.",
      "De migrerar bara om det är nödvändigt.",
    ],
    questionSolution: [true, true, false, true],
    questionSolutionText: ["A", "B", "D"],
    questionPoints: 1,
  },
  {
    questionText: "Vad är en typisk livsmiljö för ankor?",
    questionAnswer: [
      "Sjöar",
      "Öken",
      "Våtområden",
      "Fjällen",
    ],
    questionSolution: [true, false, true, false],
    questionSolutionText: ["A", "C"],
    questionPoints: 1,
  },
];
//
function startQuiz() {
    playerAnswer = [];
    playerAnswerText = [];
    playerAnswerPoint = [];
    quizStartButton.style.display = "none";
    quizNextButton.style.display = "inline-block";
    quizEndButton.style.display = "inline-block";
    quizTextHeading.style.color = "black";
  
    quizTextHeading.textContent = "Fråga " + (playerAnswer.length + 1);
    quizText.textContent = quizQuestions[playerAnswer.length].questionText;
  
    for (
      let i = 0;
      i < quizQuestions[playerAnswer.length].questionAnswer.length;
      i++
    ) {
      checkBoxSelection[i].style.display = "inline-block";
      questionAnswerSelection[i].textContent =
        checkBoxSelection[i].value +
        quizQuestions[playerAnswer.length].questionAnswer[i];
    }
  }
  

// Button Toggle
  let toggle = document.getElementById("toggle");
toggle.textContent = "Mörkt läge";

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (toggle.textContent === "Mörkt läge") {
      toggle.textContent = "Ljust läge";
    } else {
      toggle.textContent = "Mörkt läge";
    }
  }
//