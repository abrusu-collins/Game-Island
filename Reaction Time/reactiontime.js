let start = document.getElementById("start");
let score=0;
let scoreinterval
let greenclick;
let red=`<div class="red">
<p>Wait for green</p>
<img src="../styles/img/Spinner.svg" alt="">
</div>`;

let green =`<div class="green" id="green">
<h1>Click!</h1>
</div>`;






start.addEventListener("click",initiate,true);

function initiate(e){
    e.preventDefault();
    document.body.innerHTML=red;
    setTimeout(()=>{
        document.body.innerHTML=green;
         scoreinterval=setInterval(()=>{score++},1);
         greenclick=document.getElementById("green");
        greenclick.addEventListener("click",displayscore,true);
    },3000)
};

function displayscore(e){
    e.preventDefault();
    clearInterval(scoreinterval);
    let restart =` <div class="restart">
<h1>${score} ms</h1>
<a href="">Restart</a>
</div>`;
    document.body.innerHTML=restart;
    console.log(score);
}