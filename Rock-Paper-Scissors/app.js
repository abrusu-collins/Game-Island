let yourscorevaluediv = document.getElementById("yscorevalue");
let computerscorevaluediv = document.getElementById("cscorevalue");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let restart = document.getElementById("restart");

//shuffle function
function shuffle(array) {
  for (i = 0; i <= array.length - 1; i++) {
    let randonNumber = Math.floor(Math.random() * (i+1));
    let valueAtRandomIndex = array[randonNumber];
    array[randonNumber] = array[i];
    array[i] = valueAtRandomIndex;
  }
  return array;
}

//computer array
let computerArray = ["rock", "paper", "scissors"];

//score values
let yourscorevalue = 0;
let computerscorevalue = 0;

//user chooses rock
let rockdraw = document.getElementById("rockdraw");
let rockwin = document.getElementById("rockwin");
let rocklose = document.getElementById("rocklose");

//rock modal removal click events
rockdraw.onclick = function (e) {
  rockdraw.classList.toggle("yesdisplay");
};

rockwin.onclick = function (e) {
  rockwin.classList.toggle("yesdisplay");
};

rocklose.onclick = function (e) {
  rocklose.classList.toggle("yesdisplay");
};

//rock click
rock.addEventListener("click", rockcheck, true);
function rockcheck(e) {
  let shuffledArray = shuffle(computerArray);
  let computerChoice = shuffledArray[0];
  if (computerChoice === "rock") {
    rockdraw.classList.toggle("yesdisplay");
  } else if (computerChoice === "scissors") {
    rockwin.classList.toggle("yesdisplay");
    yourscorevalue++;
    yourscorevaluediv.textContent = `${yourscorevalue}`;
  } else {
    rocklose.classList.toggle("yesdisplay");
    computerscorevalue++;
    computerscorevaluediv.textContent = `${computerscorevalue}`;
  }
}

//user chooses paper

let paperdraw = document.getElementById("paperdraw");
let paperwin = document.getElementById("paperwin");
let paperlose = document.getElementById("paperlose");

//paper modal removal click events
paperdraw.onclick = function (e) {
  paperdraw.classList.toggle("yesdisplay");
};

paperwin.onclick = function (e) {
  paperwin.classList.toggle("yesdisplay");
};

paperlose.onclick = function (e) {
  paperlose.classList.toggle("yesdisplay");
};

//paper click
paper.addEventListener("click", papercheck, true);

function papercheck(e) {
  let shuffledArray = shuffle(computerArray);
  let computerChoice = shuffledArray[0];

  if (computerChoice === "paper") {
    paperdraw.classList.toggle("yesdisplay");
  } else if (computerChoice === "scissors") {
    paperlose.classList.toggle("yesdisplay");
    computerscorevalue++;
    computerscorevaluediv.textContent = `${computerscorevalue}`;
  } else {
    paperwin.classList.toggle("yesdisplay");
    yourscorevalue++;
    yourscorevaluediv.textContent = `${yourscorevalue}`;
  }
}

//user chooses scissors

let scissorsdraw = document.getElementById("scissorsdraw");
let scissorswin = document.getElementById("scissorswin");
let scissorslose = document.getElementById("scissorslose");

//scissors modal removal click events
scissorsdraw.onclick = function (e) {
  scissorsdraw.classList.toggle("yesdisplay");
};

scissorswin.onclick = function (e) {
  scissorswin.classList.toggle("yesdisplay");
};

scissorslose.onclick = function (e) {
  scissorslose.classList.toggle("yesdisplay");
};

//scissors click
scissors.addEventListener("click", scissorscheck, true);

function scissorscheck(e) {
  let shuffledArray = shuffle(computerArray);
  let computerChoice = shuffledArray[0];

  if (computerChoice === "scissors") {
    scissorsdraw.classList.toggle("yesdisplay");
  } else if (computerChoice === "rock") {
    scissorslose.classList.toggle("yesdisplay");
    computerscorevalue++;
    computerscorevaluediv.textContent = `${computerscorevalue}`;
  } else {
    scissorswin.classList.toggle("yesdisplay");
    yourscorevalue++;
    yourscorevaluediv.textContent = `${yourscorevalue}`;
  }
}
