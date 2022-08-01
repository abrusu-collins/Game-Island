
//variables
let play = document.getElementById("play");
let space= document.getElementById("space");
let num= document.getElementById("num");
let game= document.getElementById("game");
let placeholder = document.getElementById("placeholder");
let inp=document.getElementById("inp");
let numtodisplay;
let numcount;
let elementtodisplay;
let interval;
let restart;
let numArray =["4","5","6"];
let score = 0;
let time=0;


// function numchange
function numchange(){
  shuffle(numArray)
   numtodisplay= parseInt(numArray[1]);
   numcount=parseInt(numArray[0]);
   elementtodisplay='';
  
  
  console.log(`numtodisplay: ${numtodisplay}`);
  console.log(`numcount: ${numcount}`);
  
  for(let i=0; i<numcount;i++){
    elementtodisplay+= numtodisplay;
  }
  
  space.innerHTML= `<h1 id="num">${elementtodisplay.trim()}</h1> `;
  console.log(elementtodisplay.trim());
  
  }
  
  //shuffle function
function shuffle(array) {
  for (i = 0; i <= array.length - 1; i++) {
    let randonNumber = Math.floor(Math.random() * (i+1));
    let valueAtRandomIndex = array[randonNumber];
    array[randonNumber] = array[i];
    array[i] = valueAtRandomIndex;
  }
  return array;
};

//remover function 
function remover(){
  console.log("event removed");
}
//play eventListener
play.addEventListener("click",(e)=>{
  e.preventDefault();
  inp.focus();
  space.innerHTML=`<h3>Get Ready!</h3>`;
  setTimeout(()=>{
    numchange();
    window.addEventListener("keydown",(e)=>{
      e.preventDefault();

   setInterval(()=>{
    if(time===3){
      document.body.innerHTML += `<div class="modal" id="modal">
       <div class="modalinner">
           <h2>GAME OVER!</h2>
       <h3>Score : ${score}</h3>
       <a href="" id="restart">Restart</a>
       </div>
   </div>`;
   window.scrollTo(0,0);
   document.body.classList.add("scrolldisable");
   restart= document.getElementById("restart");
   time++;
   clearInterval(interval);
    }
   },1001);
   

      if(parseInt(String.fromCharCode(e.keyCode))===numcount){
        score++;
        numchange();
        console.log("working")
        console.log(score);
        time=0;
        clearInterval(interval);
        interval=setInterval(()=>{time++ ;console.log(time)},1000);
      }
      else{
        clearInterval(interval);
       document.body.innerHTML += `<div class="modal" id="modal">
       <div class="modalinner">
           <h2>GAME OVER!</h2>
       <h3>Score : ${score}</h3>
       <a href="" id= "restart">Restart</a>
       </div>
   </div>`;
   window.scrollTo(0,0);
   document.body.classList.add("scrolldisable");
   restart= document.getElementById("restart");


      }
    });
  
  },3000);
  
  });


   