let num= document.getElementById("num");

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


// numchange function
  function numchange(){
   let newArray= shuffle(numArray);
   let numtodisplay= newArray[0];
   let numcount= parseInt(newArray[1]);
   let elementtodisplay= "";
   for(let i=1; i<=numcount; i++){
    elementtodisplay += numtodisplay;
   }
   window.addEventListener("keydown",(e)=>{
    if (parseInt(String.fromCharCode(e.keyCode)) === numcount){
console.log(typeof(parseInt(String.fromCharCode(e.keyCode))))       
        numchange();
        score=score +1;

    }
    else{
       console.log(" window.removeEventListener(keydown);")
    };
   })
   console.log(numtodisplay);
   console.log(numcount);
   console.log(elementtodisplay)
   console.log(score)
  };

  numchange();