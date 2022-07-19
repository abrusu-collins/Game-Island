let start = document.getElementById("start");

let red=`<div class="red">
<p>Wait for green</p>
<img src="../styles/img/Spinner.svg" alt="">
</div>`;





start.addEventListener("click",initiate,true);

function initiate(e){
    e.preventDefault();
    document.body.innerHTML=red;
}