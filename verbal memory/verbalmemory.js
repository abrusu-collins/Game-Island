let start = document.getElementById("start");
let life = document.getElementById("life");
let score = document.getElementById("score");
let word = document.getElementById("word");
let seenbuton = document.getElementById("seen");
let newbutton = document.getElementById("new");
let wordArray = [];
let seenwordArray = [];

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

start.addEventListener("click", fetchwords, true);

function fetchwords(e) {
  e.preventDefault();
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
    });
}

function displaywords() {
  shuffle(wordArray);
  word.innerHTML = `<h1>${wordArray[0]}</h1>`;
}
