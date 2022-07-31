let start = document.querySelector(".start");
let idstart = document.getElementById("start");
let word = document.getElementById("word");
let timeleft = document.getElementById("timeleft");
let input = document.getElementById("input");
let scorediv = document.getElementById("score");
let body = document.querySelector("body");

let score = 0;
scorediv.innerText = `Score:${score}`;
let time = 5;
timeleft.innerText = `Time Left: ${time}`;
start.addEventListener("click", initiate, true);
var i = 0;
var j = 0;

function initiate(e) {
  word.innerHTML=`<i class="fa fa-spinner fa-pulse"></i>`;
  fetch("https://random-word-api.herokuapp.com/word?number=5",{
    mode: 'cors'
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let arr = data;
      input.focus();

      if (i <= arr.length - 1) {
        word.textContent = `${arr[i]}`;
        console.log(arr[i]);
        let time = 5;

        let ras = setInterval(() => {
          time--;
          timeleft.innerText = `Time Left: ${time}`;
        }, 1000);
        i++;
        setTimeout(() => {
          initiate();
        }, 5000);
        setTimeout(() => {
          clearInterval(ras);
          timeleft.innerText = `Time Left: 0`;
          scorediv.innerText = `Score:${score}/5`;
        }, 5000);
      }

      if (i == arr.length) {
        idstart.classList.remove("start");
        idstart.innerText = `RESTART`;

        setTimeout(() => {
          word.textContent = `Done!`;

          if (score <= 2) {
            if (j == 0) {
              let div = document.createElement("div");
              div.classList.add("card");
              div.classList.add("bg-primary");

              div.classList.add("text-white");

              div.setAttribute("style", "max-width: 20rem;");
              div.innerHTML = `<div class="card-header">Hmmmm😪😪</div>
           <div class="card-body">
             <p class="card-text">${score}/5 is a poor score , UP YOUR GAME MATE!</p>
           </div>`;
              body.appendChild(div);
              j++;
            }
          }

          if (score == 3) {
            if (j == 0) {
              let div = document.createElement("div");
              div.classList.add("card");
              div.classList.add("bg-primary");

              div.classList.add("text-white");

              div.setAttribute("style", "max-width: 20rem;");
              div.innerHTML = `<div class="card-header">Ow Snap🤨🤨</div>
           <div class="card-body">
             <p class="card-text">${score}/5 is an average score , MORE ROOM FOR IMPROVEMENT!</p>
           </div>`;
              body.appendChild(div);
              j++;
            }
          }

          if (score > 3) {
            if (j == 0) {
              let div = document.createElement("div");
              div.classList.add("card");
              div.classList.add("bg-primary");

              div.classList.add("text-white");

              div.setAttribute("style", "max-width: 20rem;");
              div.innerHTML = `<div class="card-header">Congratulations🎉🎉</div>
       <div class="card-body">
         <p class="card-text">${score}/5 is a great score , KEEP IT UP!</p>
       </div>`;
              body.appendChild(div);
              j++;
            }
          }
        }, 5000);
        idstart.addEventListener("click", (e) => {
          location.reload();
        });
      }
    }).catch((error)=>{
        if(idstart.innerText!="RESTART"){
    word.textContent="Failed to fetch word, check your internet connection.";
  }})
}

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    if (input.value === word.textContent) {
      score++;
      scorediv.innerText = `Score:${score}/5`;
      word.innerHTML=`<i class="fa fa-spinner fa-pulse"></i>`;
      input.value = "";
    } else {
      input.value = "";
    }
  }
});
