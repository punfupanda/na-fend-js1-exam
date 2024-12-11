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
    questionText: "Vilken/vilka av följande egenskaper stämmer för ankor?",
    questionAnswer: [
        "De kan flyga långa sträckor.", 
        "De kan andas under vatten.", 
        "De är däggdjur.", 
        "Deras fjädrar är vattentäta."],
    questionSolution: [true, false, false, true],
    questionSolutionText: ["A", "D"],
    questionPoints: 2,
  },
  {
    questionText: "Vad kallas en ankhane för?",
    questionAnswer: [
        "Tupp", 
        "Anko", 
        "Drake", 
        "Ankara"],
    questionSolution: [false, false, true, false],
    questionSolutionText: ["C"],
    questionPoints: 1,
  },
  {
    questionText: "Vilken/vilka av följande äter ankor i naturen?",
    questionAnswer: [
        "Alger", 
        "Choklad", 
        "Insekter", 
        "Småfisk"],
    questionSolution: [true, false, true, true],
    questionSolutionText: ["A", "C", "D"],
    questionPoints: 3,
  },
  {
    questionText: "Vilket/vilka påståenden stämmer om ankors flygförmåga?",
    questionAnswer: [
        "De kan flyga över 100 km/h.", 
        "De kan flyga tvärs över kontinenter.", 
        "De kan inte flyga alls.", 
        "De flyger bara under vintern."],
    questionSolution: [true, true, false, false],
    questionSolutionText: ["A", "B"],
    questionPoints: 2,
  },
  {
    questionText: "Vad är sant om ankors kommunikation?",
    questionAnswer: [
      "Alla ankor kvackar.",
      "De kan kommunicera med kroppsspråk.",
      "De använder kvackningar för att varna andra ankor.",
      "Ankor är stumma.",
    ],
    questionSolution: [false, true, true, false],
    questionSolutionText: ["B", "C"],
    questionPoints: 2,
  },
  {
    questionText:
      "Vilka/vilka av följande är naturliga fiender för ankor?",
    questionAnswer: [
      "Rävar",
      "Hajar",
      "Örnar",
      "Björnar",
    ],
    questionSolution: [true, false, true, false],
    questionSolutionText: ["A", "C"],
    questionPoints: 2,
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
    questionPoints: 3,
  },
  {
    questionText: "Vilken av följande är ankraser?",
    questionAnswer: [
      "Indian Runner",
      "Galaxy Duck",
      "Peking Duck",
      "Donald Duck",
    ],
    questionSolution: [true, false, true, false],
    questionSolutionText: ["A", "C"],
    questionPoints: 2,
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
    questionPoints: 3,
  },
  {
    questionText: "Vilken/vilka livsmiljöer lever ankor i?",
    questionAnswer: [
      "Sjöar",
      "Öken",
      "Våtområden",
      "Fjällen",
    ],
    questionSolution: [true, false, true, false],
    questionSolutionText: ["A", "C"],
    questionPoints: 2,
  },
];
function calculateTotalPoints() {
    return quizQuestions.reduce((sum, question) => sum + question.questionPoints, 0);
}
function startQuiz() {
    playerAnswer = [];
    playerAnswerText = [];
    playerAnswerPoint = [];
    quizStartButton.style.display = "none";
    quizNextButton.style.display = "inline-block";
    quizEndButton.style.display = "inline-block";
    document.getElementById("quizIntro").style.display = "none";
  
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
  
  function nextQuestion() {
    let playerCheckBoxAnswer = [];
    for (
      let i = 0;
      i < quizQuestions[playerAnswer.length].questionAnswer.length;
      i++
    ) {
      playerCheckBoxAnswer[i] = checkBoxSelection[i].checked;
    }
    playerAnswer.push(playerCheckBoxAnswer);
  
    document.getElementById("answer1").checked = false;
    document.getElementById("answer2").checked = false;
    document.getElementById("answer3").checked = false;
    document.getElementById("answer4").checked = false;
  
    for (let i = 0; i < 4; i++) {
      checkBoxSelection[i].style.display = "none";
      questionAnswerSelection[i].textContent = "";
    }
  
    if (playerAnswer.length >= quizQuestions.length) {
        endQuiz();
      }
    else {
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
  }
  
  function endQuiz() {
    const maxPoints = calculateTotalPoints();
    let totQuizPoint = 0;
    let playerTotPoint = 0;
    let playerPoints = [];
    quizStartButton.style.display = "none";
    document.getElementById("answer1").checked = false;
    document.getElementById("answer2").checked = false;
    document.getElementById("answer3").checked = false;
    document.getElementById("answer4").checked = false;
  
    for (let i = 0; i < 4; i++) {
      checkBoxSelection[i].style.display = "none";
      questionAnswerSelection[i].textContent = "";
    }
  
    quizNextButton.style.display = "none";
    quizEndButton.style.display = "none";
    quizTextHeading.textContent = "";
    quizText.textContent = "";
  
    let checkSolution = 0;
    let quizQuestionPoint = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
      totQuizPoint += quizQuestions[i].questionPoints;
  
      if (i < playerAnswer.length) {
        checkSolution = 0;
        quizQuestionPoint = 0;
        let playerAnswerTextTemp = "";
  
        for (let x = 0; x < quizQuestions[i].questionSolution.length; x++) {
          if (
            quizQuestions[i].questionSolution[x] !== playerAnswer[i][x] &&
            playerAnswer[i][x] === true
          ) {
            checkSolution++;
          }
          if (
            quizQuestions[i].questionSolution[x] === playerAnswer[i][x] &&
            playerAnswer[i][x] === true
          ) {
            quizQuestionPoint++;
          }
          if (playerAnswer[i][x] === true) {
            if (playerAnswerTextTemp === "") {
              playerAnswerTextTemp += quizQuestionAnswerSelection[x];
            } else {
              playerAnswerTextTemp += "," + quizQuestionAnswerSelection[x];
            }
          } else {
            playerAnswerTextTemp === "";
          }
        }
  
        if (playerAnswerTextTemp === "") {
          playerAnswerText[i] = "Inget svar";
        } else {
          playerAnswerText[i] = playerAnswerTextTemp;
        }
  
        if (checkSolution === 0 && quizQuestionPoint > 0) {
          playerTotPoint += quizQuestionPoint;
          playerAnswerPoint[i] = quizQuestionPoint;
          if (quizQuestionPoint < quizQuestions[i].questionPoints) {
            playerPoints[i] = "Delvis rätt";
          } else {
            playerPoints[i] = "Alla rätt";
          }
        } else {
          playerPoints[i] = "Fel";
          playerAnswerPoint[i] = 0;
        }
      } else {
        playerPoints[i] = "Fel";
        playerAnswerPoint[i] = 0;
      }
    }
    if (playerTotPoint / totQuizPoint > 0.75) {
        quizTextHeading.style.color = "green";
    }
    else if (playerTotPoint / totQuizPoint < 0.5) {
        quizTextHeading.style.color = "red";  
    } else {
        quizTextHeading.style.color = "yellow";
    }
  
    quizTextHeading.innerText =
      "Du har fått " + playerTotPoint + " poäng av " + totQuizPoint;
  
    for (let i = 0; i < quizQuestions.length; i++) {
      const div = document.createElement("div");
      div.innerText =
        "Fråga " +
        (i + 1) +
        ": " +
        playerPoints[i] +
        ". " +
        playerAnswerPoint[i] +
        " poäng ( Ditt svar: " +
        playerAnswerText[i] +
        " / rätt svar: " +
        quizQuestions[i].questionSolutionText +
        ")";
      quizText.append(div);
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