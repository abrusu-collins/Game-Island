let num= document.getElementById("num");
let start = document.getElementById("start");
let placeholder = document.getElementById("placeholder");


//start click event
start.addEventListener("click",(e)=>{
e.preventDefault();
placeholder.innerHTML =`<div class="load">
<h3> Wait for game to load...</h3>
 <img src="./img/load.svg" alt="load-animation">
</div>`;
setTimeout(()=>{
  placeholder.innerHTML=`<div class="play">
  <div class="space">
  <h3>Click play to start</h3>
  </div>
  <a href="">Play</a>
  
  </div>`
},3000)

});

let numArray =["4","5","6"];
let score = 0;

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
  console.log(elementtodisplay.trim());

}
numchange();