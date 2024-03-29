let start = document.getElementById("start");
let life = document.getElementById("life");
let scorediv = document.getElementById("score");
let word = document.getElementById("word");
let seenbutton = document.getElementById("seen");
let newbutton = document.getElementById("new");
let wordArray = [];
let seenwordArray = [];
let score = 0;
let lives = 3;

lifereducer();

start.addEventListener("click", fetchwords, true);
seenbutton.addEventListener("click", checkseen, true);
newbutton.addEventListener("click", checknew, true);

//shuffle function
function shuffle(array) {
  for (i = 0; i <= array.length - 1; i++) {
    let randonNumber = Math.floor(Math.random() * (i + 1));
    let valueAtRandomIndex = array[randonNumber];
    array[randonNumber] = array[i];
    array[i] = valueAtRandomIndex;
  }
  return array;
}

function fetchwords(e) {
  e.preventDefault();

  wordArray = [];
  seenwordArray = [];
  score = 0;
  lives = 3;
  lifereducer();
  scorediv.innerHTML = `<p>Score : ${score}</p>`;

  word.innerHTML = `<h1> <i class="fa fa-spinner fa-pulse"></i> </h1>`;
  fetch("https://random-word-api.herokuapp.com/word?number=100")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      wordArray = data;
      console.log(wordArray);
      displaywords();
    })
    .catch((error) => {
      alert(error);
      word.innerHTML = `<h1>Word appears here</h1>`;
    });
}

function displaywords() {
  shuffle(wordArray);
  word.innerHTML = `<h1>${wordArray[0]}</h1>`;
}

function checkseen(e) {
  e.preventDefault();

  if (
    word.innerText == "Word appears here" ||
    word.textContent == "Click Start "
  ) {
    word.innerHTML = `<h2>Click Start <i class="fa fa-circle-arrow-up"></i></h2>`;
  } else {
    if (seenwordArray.includes(word.textContent)) {
      score++;
      scorediv.innerHTML = `<p>Score : ${score}</p>`;
      displaywords();
    } else {
      lives--;
      lifereducer();
      seenwordArray.push(word.textContent);
      console.log(seenwordArray);
      displaywords();
    }
  }
}

function checknew(e) {
  e.preventDefault();
  if (
    word.innerText == "Word appears here" ||
    word.textContent == "Click Start "
  ) {
    word.innerHTML = `<h2>Click Start <i class="fa fa-circle-arrow-up"></i></h2>`;
  } else {
    if (!seenwordArray.includes(word.textContent)) {
      score++;
      scorediv.innerHTML = `<p>Score : ${score}</p>`;
      seenwordArray.push(word.textContent);
      console.log(seenwordArray);
      displaywords();
    } else {
      lives--;
      lifereducer();
      displaywords();
    }
  }
}

function lifereducer() {
  if (lives === 3) {
    life.innerHTML = `<p id="full">Life <i class="fa fa-battery-full"></i> </p>`;
  } else if (lives === 2) {
    life.innerHTML = `<p id="half">Life <i class="fa fa-battery-half"></i>`;
  } else if (lives === 1) {
    life.innerHTML = `<p id="quarter">Life <i class="fa fa-battery-quarter"></i> </p>`;
  } else {
    life.innerHTML = `<p id="empty">Life <i class="fa fa-battery-empty"></i> </p>`;
    document.body.innerHTML += `<div class="modal">
    <div class="modalinner">
    <h1>GAME OVER</h1>
    <p class="score">Score : <b> ${score}</b></p>
       <a href="">Restart</a>
    </div>
</div>`;
window.scrollTo(0,0);

document.body.classList.add("scrolldisable");

  }
}
