
let start = document.getElementById("start");
let life = document.getElementById("life");
let score = document.getElementById("score");
let word = document.getElementById("word");
let seenword = document.getElementById("seen");
let newword = document.getElementById("new");
let wordArray=[];


start.addEventListener("click",fetchwords,true);

function fetchwords(e){
    e.preventDefault();
    fetch("https://random-word-api.herokuapp.com/word?number=100")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        wordArray=data;
        console.log(wordArray);
    })
}