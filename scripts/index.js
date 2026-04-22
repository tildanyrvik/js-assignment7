// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;


// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");



function addWordToDOM() {
    randomWord = Math.floor(Math.random() * words.length);
    word.innerHTML = words[randomWord];
}

addWordToDOM()

function updateScore () {
    score++
    scoreEl.innerHTML = score;
}

text.addEventListener("input", function (e){
    if (text.value === word.innerHTML) {
        updateScore();
        addWordToDOM();
        time += 5;
        text.value = "";
    }
});

function updateTime(){
    time--;
    timeEl.innerHTML = time;
    if(time === 0) {
        clearInterval(timer)
        endGame();
    }
}
const timer = setInterval(updateTime, 1000);

function endGame(){
    endgameEl.style.display = "flex";
}


