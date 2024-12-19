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
    questionSolution: [true, false, false, true],
    questionSolutionText: ["A", "D"],
    questionPoints: 2,
  },
  {
    questionText: "Vilken/vilka av följande är ankraser?",
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
  // RESULTAT //
  function endQuiz() {
    const maxPoints = calculateTotalPoints();
    let totQuizPoint = 0;
    let playerTotPoint = 0;
    
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
    
    for (let i = 0; i < quizQuestions.length; i++) {
        totQuizPoint += quizQuestions[i].questionPoints;
        let questionPointsEarned = 0;
        const div = document.createElement("div");
        let resultText = `<br><strong>${i + 1}. ${quizQuestions[i].questionText}</strong><br><br>`;

        quizQuestions[i].questionAnswer.forEach((answer, index) => {
            const isCorrect = quizQuestions[i].questionSolution[index];
            const userChose = playerAnswer[i] && playerAnswer[i][index];
            let color = ""; 

            if (isCorrect && userChose) {
                color = "darkgreen"; 
                questionPointsEarned++;
            } else if (isCorrect) {
                color = "green"; 
            } else if (userChose) {
                color = "crimson"; 
            } else {
                color = "lightgray"; 
            }

            resultText += `<span style="color: ${color};">${quizQuestionAnswerSelection[index]}: ${answer}</span> `;
            if (isCorrect && userChose) {
                resultText += "✔️ (Rätt och valt)<br>";
            } else if (isCorrect) {
                resultText += "✔️ (Rätt)<br>";
            } else if (userChose) {
                resultText += "✖️ (Felaktigt valt)<br>";
            } else {
                resultText += "✖️ (Fel)<br>";
            }
        });

        playerTotPoint += questionPointsEarned;
        resultText += `<br><strong>Poäng:</strong> ${questionPointsEarned} av ${quizQuestions[i].questionPoints}<br><br><br>`;
        div.innerHTML = resultText; 
        quizText.append(div);
    }

    quizTextHeading.innerText = `Du fick ${playerTotPoint} poäng av ${totQuizPoint}`;
    
    if (playerTotPoint / totQuizPoint > 0.75) {
        quizTextHeading.style.color = "green";
    } else if (playerTotPoint / totQuizPoint < 0.5) {
        quizTextHeading.style.color = "red";
    } else {
        quizTextHeading.style.color = "orange";
    }
}

// Button Toggle //
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
