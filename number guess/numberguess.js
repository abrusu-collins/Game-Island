let input =  document.getElementById("numberinput");
let check = document.getElementById("check");
let scorediv = document.getElementById("score");
let guide = document.getElementById("guides");

let num;
let clickcount=0;
let score=20;
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
    // console.log(numArray);
    // console.log(num);
  });


 check.addEventListener("click",(e)=>{
    e.preventDefault();
    let inputvalue = input.value;
    if(!inputvalue){
        alert("Input must not be empty")
    }else{
        clickcount++;
        if(inputvalue > num){
            score--;
            scorediv.innerHTML=` <p>Score: ${score}</p>`;
            guide.innerHTML=`<h1>Too High <i class="fa fa-circle-arrow-up"></i></h1>`;
           

        }
        else if(inputvalue <num){
            score--;
            scorediv.innerHTML=` <p>Score: ${score}</p>`;
            guide.innerHTML=`<h1>Too Low <i class="fa fa-circle-arrow-down"></i></h1>`;
            guide.style.animation="";
       


        }
        else{
            guide.innerHTML=`<h1>Correct <i class="fa fa-check-circle"></i> </h1>`;

            document.body.innerHTML+=`<div class="modal">
            <div class="modalinner">
                <i class="fa fa- fa-trophy fa-3x"></i>
               <p>You got it after ${clickcount} tries</p>
               <p class="score">Score : <b> ${score}</b></p>
               <a href="">Restart</a>
            </div>
        </div>`;
        window.scrollTo(0,0);
        document.body.classList.add("scrolldisable");
  


        }
    }

 })

 