
let start = document.getElementById("start");
let placeholder = document.getElementById("placeholder");
let play;
let num;
let space;
let game;
let numtodisplay;
let numcount;
let elementtodisplay;
let r;
let restart;
let numArray =["4","5","6"];
let score = 0;
let time=0;


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
    </div>
  <a href="" id="play">Play</a>
  </div>`
   play = document.getElementById("play");
   space= document.getElementById("space");
    num= document.getElementById("num");
    game= document.getElementById("game");

//play eventListener
  play.addEventListener("click",(e)=>{
    e.preventDefault();
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
     </div>`
     time++;
     clearInterval(r);
    
      }
      if(time>=3){
        restart= document.getElementById("restart");
        restart.addEventListener("click",(e)=>{
         e.preventDefault();
         console.log("Restarted")
         document.getElementById("space").innerHTML=`<h3>Click play to start</h3>`;
         document.getElementById("modal").style.display="none";
        })
      }
     },1001);
        if(parseInt(String.fromCharCode(e.keyCode))===numcount){
          score++;
          numchange();
          console.log("working")
          console.log(score);
          time=0;
          clearInterval(r);
          r=setInterval(()=>{time++ ;console.log(time)},1000);
        }
        else{
          clearInterval(r);
         document.body.innerHTML += `<div class="modal" id="modal">
         <div class="modalinner">
             <h2>GAME OVER!</h2>
         <h3>Score : ${score}</h3>
         <a href="">Restart</a>
         </div>
     </div>`;
     restart= document.getElementById("restart");
     restart.addEventListener("click",(e)=>{
      e.preventDefault();
      space.innerHTML=`  <h3>Click play to start</h3>`
     })
        }
      });
    
    },3000);
    
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
   numtodisplay= parseInt(numArray[1]);
   numcount=parseInt(numArray[0]);
   elementtodisplay='';
  

  console.log(`numtodisplay: ${numtodisplay}`);
  console.log(`numcount: ${numcount}`);

  for(let i=0; i<numcount;i++){
    elementtodisplay+= numtodisplay;
  }


  // num.textContent=`${elementtodisplay.trim()}`;
  space.innerHTML= `<h1 id="num">${elementtodisplay.trim()}</h1> `;
  console.log(elementtodisplay.trim());

}





