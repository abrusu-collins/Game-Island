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