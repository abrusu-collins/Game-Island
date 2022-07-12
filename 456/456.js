
let start = document.getElementById("start");
let placeholder = document.getElementById("placeholder");
let play;
let num;
let space;
let game;
let numArray =["4","5","6"];
let score = 0;

//start click event
start.addEventListener("click",(e)=>{
e.preventDefault();
placeholder.innerHTML =`<div class="load">
<h3> Wait for game to load...</h3>
 <img src="./img/load.svg" alt="load-animation">
</div>`;

setTimeout(()=>{
  placeholder.innerHTML=`<div class="play">
  <div class="space" id="space">
  <h3>Click play to start</h3>
  <!-- <h1>Get Ready</h1> -->
  <!-- <h1 id="num">44444</h1> -->
  </div>
  <a href="" id="play">Play</a>
  
  </div>`
   play = document.getElementById("play");
   space= document.getElementById("space");
    num= document.getElementById("num");
    game= document.getElementById("game");


  play.addEventListener("click",(e)=>{
    e.preventDefault();
    setTimeout(()=>{numchange()},3000);
    space.innerHTML=`<h3>Get Ready!</h3>`;
    });

},3000);

});



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

// function numchange
function numchange(){
  shuffle(numArray)
  let numtodisplay= parseInt(numArray[1]);
  let numcount=parseInt(numArray[0]);
  let elementtodisplay= '';

  console.log(`numtodisplay: ${numtodisplay}`);
  console.log(`numcount: ${numcount}`);

  for(let i=0; i<numcount;i++){
    elementtodisplay+= numtodisplay;
  }


  // num.textContent=`${elementtodisplay.trim()}`;
  space.innerHTML= `   <h1 id="num">${elementtodisplay.trim()}</h1> `;
  console.log(elementtodisplay.trim());

}



//play eventListener

