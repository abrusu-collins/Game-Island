let greenclick;
let firstDate;
let count=0;
let start = document.getElementById("start");
let red=`<div class="red" id="red">
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
    document.getElementById("red").addEventListener("click",toosoon,true);
 
    setTimeout(()=>{
        if(count===0){
        document.body.innerHTML=green;
         greenclick=document.getElementById("green");
        greenclick.addEventListener("click",displayscore,true);
        firstDate= +Date.now();
    }
    else{}
    },3000)
   
};

function displayscore(e){
    e.preventDefault();
    let restart =` <div class="restart">
<h1>${Math.abs((+Date.now() - firstDate)-250)}ms</h1>
<a href="">Restart</a>
</div>`;
    document.body.innerHTML=restart;
    console.log(Math.abs((+Date.now() - firstDate)));
    
}

function toosoon(e){
    e.preventDefault();
    count=count+1;
    let toosoondiv=` <div class="restart">
    <h1>Too Soon</h1>
    <a href="">Restart</a>
    </div>`;
    document.body.innerHTML=toosoondiv;

}