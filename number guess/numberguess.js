let input =  document.getElementById("numberinput");
let check = document.getElementById("check");
let scorediv = document.getElementById("score");
let guide = document.getElementById("guides");

let num;
let numArray=[];

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



  window.addEventListener("load", (e)=>{
    e.preventDefault();
    for(let i=1;i<=20;i++){
        numArray.push(i);
    }
    shuffle(numArray);
    num= numArray[0];
    console.log(numArray);
    console.log(num);
  })