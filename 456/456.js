let num= document.getElementById("num");

let numArray =["4","5","6"];


function shuffle(array) {
    for (i = 0; i <= array.length - 1; i++) {
      let randonNumber = Math.floor(Math.random() * (i+1));
      let valueAtRandomIndex = array[randonNumber];
      array[randonNumber] = array[i];
      array[i] = valueAtRandomIndex;
    }
    return array;
  }



  function numchange(){
   let newArray= shuffle(numArray);
   let numtodisplay= parseInt(newArray[0]);
   let numcount= parseInt(newArray[1]);
  }