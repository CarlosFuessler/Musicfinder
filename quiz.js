//Zähl variablen für die Musikrichtungen
let popmusic = 0;
let rockmusic = 0;
let hipHop = 0;
let rap = 0;
let techno = 0;
let house = 0;
let rnB = 0;
let jazz = 0;
let classic = 0;
//Fragen und Antworten
let questions = [
    {
        question: "How do you feel?",
        answers: [
            { text: "Full of energy!", click: ()=>{rockmusic++; techno++;hipHop++}, correct: true },
            { text: "Happy and chill.", click: ()=>{popmusic++;house++;rnB++} , correct: true},
            { text: "Calm and relaxed.", click: ()=>{rap++; jazz++;rnB++}  , correct: true},
            { text: "Quiet and serene.", click: ()=>{classic++; jazz++}  , correct: true},
        ]
    },
    {
        question: "How fast are you today?",
        answers: [
            { text: "Full power – everything on turbo!", click: ()=>{rockmusic++; techno++;hipHop++} , correct: true},
            { text: "In the flow, everything in rhythm.", click: ()=>{popmusic++;house++;rnB++} , correct: true},
            { text: "Sometimes fast, sometimes slow – depending on the moment.", click: ()=>{rap++; jazz++;rockmusic++} , correct: true },
            { text: "Very relaxed, no stress.", click: ()=>{classic++; jazz++;house++} , correct: true },
        ]
    },
    {
        question: "Where do you feel the most comfortable?",
        answers: [
            { text: "In the crowd, with many people.", click: ()=>{rockmusic++; techno++;hipHop++}, correct: true },
            { text: "With friends, relaxed and easy-going.", click: ()=>{popmusic++;jazz++;rnB++}, correct: true },
            { text: "Alone with my thoughts.", click: ()=>{rap++; jazz++;classic++}  , correct: true},
            { text: "In a quiet, peaceful place.", click: ()=>{classic++;house++} , correct: true },
        ]
    },
    {
        question: "How much energy do you have?",
        answers: [
            { text: "100% – I want to experience something!", click: ()=>{rockmusic++; techno++;hipHop++}, correct: true },
            { text: "Medium – I am relaxed but active.", click: ()=>{popmusic++;house++;rnB++} , correct: true},
            { text: "Little – rather cozy today.", click: ()=>{jazz++;house++}, correct: true},
            { text: "Hardly any – I just want to chill.", click: ()=>{classic++;jazz++} , correct: true },
        ]
    },
    {
        question: "What do you need?",
        answers: [
            { text: "Fun and joy.", click: ()=>{popmusic++; techno++;hipHop++} , correct: true},
            { text: "Depth and emotions.", click: ()=>{rap++;jazz++;rnB++} , correct: true},
            { text: "Focus and clarity.", click: ()=>{jazz++;classic++}, correct: true},
            { text: "Freedom and lightness.", click: ()=>{rnB++;jazz++} , correct: true },
        ]
    }
];
//Herkunft der Elemente aus HTMl
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");
//Fragen Zähler
let questionIndex = 0;
//Funktion die das Quiz startet
function startQuiz() {
    questionIndex = 0;
    nextButton.innerHTML = "Next";
    nextButton.removeEventListener("click", handleNextButton); // Remove existing listener
    nextButton.addEventListener("click", handleNextButton); // Add new listener
    showQuestion();
}
//Funktion die die Fragen anzeigt
function showQuestion() {
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
//Lässt die Fragen und Antworten, verschwinden die in dem Html gesetzt wurden verschwinden
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
//Funktion die die Antworten auswählt
function selectAnswer(e) {
    const selectedButton = e.target;
    const answerText = selectedButton.innerHTML;
    const currentQuestion = questions[questionIndex];

    //Findet die Antwort die ausgewählt wurde
    const selectedAnswer = currentQuestion.answers.find(answer => answer.text === answerText);

    // Führt die Funktion aus, die die Punkte für die Musikrichtungen zählt
    if (selectedAnswer && typeof selectedAnswer.click === 'function') {
        selectedAnswer.click();
    }

   //Der ausgewählte Button wird grün
    selectedButton.classList.add("correct");

    // Deaktiviert dei anderen Buttons
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    // Der Next Button wird angezeigt
    nextButton.style.display = "block";

    // Die Auswahl wird ausgewählt
    return selectedAnswer;
}
//Funktion die das Ergebnis anzeigt
function showResult() {
    //Setzt die Fragen und Antworten zurück
    resetState(); // Clear the previous questions and answers
    //Array mit den Musikrichtungen und deren Punkten
    const result = {
        popmusic,
        rockmusic,
        hipHop,
        rap,
        techno,
        house,
        rnB,
        jazz,
        classic
    };
   // Array wird sortiert
    let resultArray = Object.entries(result);
    resultArray.sort((a, b) => b[1] - a[1]);

    let maxGenre = resultArray[0][0];
    let resultText = `Your favorite music genre is ${maxGenre}.`;
    //Formatierung
    questionElement.innerHTML = resultText;

    questionElement.style.textAlign = "center";

    const playlistButton = document.createElement("button");
    playlistButton.classList.add("btn");
    playlistButton.innerHTML = "Here is your playlist!";
    playlistButton.style.display = "block";
    playlistButton.style.marginTop = "20px";
    playlistButton.style.width = "60%";
    playlistButton.style.marginLeft = "20%";
    playlistButton.style.fontSize = "25px";
    playlistButton.style.textAlign = "center";

    //Switch case für die Musikrichtungen
    let playlistUrl = "";
    switch (maxGenre) {
        case "popmusic":
            playlistUrl = "popmusic.html";
            break;
        case "rockmusic":
            playlistUrl = "rockmusic.html";
            break;
        case "hipHop":
            playlistUrl = "hip-hop.html";
            break;
        case "rap":
            playlistUrl = "rap.html";
            break;
        case "techno":
            playlistUrl = "techno.html";
            break;
        case "house":
            playlistUrl = "house.html";
            break;
        case "rnB":
            playlistUrl = "rnB.html";
            break;
        case "jazz":
            playlistUrl = "jazz.html";
            break;
        case "classic":
            playlistUrl = "classic.html";
            break;
    }

    playlistButton.addEventListener("click", () => {
        window.location.href = playlistUrl;
    });

    questionElement.appendChild(playlistButton);
//Der Next Button wird ausgeblendet
}
function handleNextButton() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}
//Event Listener für den Next Button
nextButton.addEventListener("click", handleNextButton);
//Quiz wird gestartet
startQuiz();