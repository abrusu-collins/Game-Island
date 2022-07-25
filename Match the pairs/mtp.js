let emojiArray=["😀","🤣","😅","😊","😍","😗","🤩","😐","🙄","😥","😯","😪","😮","😏","😑","🤔","🙂","😙","😘","😋","😆","😃","😁","😂","😄","😉","😎","🥰","😚","🤗","🤨","😶","😣","🤐","😫","👩","👨","🧑","🧒","👦","👧","👶","👵","👴","👨‍🦰","👩‍🦰","🧓","👩‍🦱","👨‍🦱","👩‍🦲","👨‍🦳","👩‍🦳","👨‍🦲","👱‍♀️","👱‍♂️","👸","👳‍♂️","👳‍♀️","🤴","👲","🧔","👼","👮‍♀️","🎅","🤶","👮‍♂️","🕵️‍♀️","🕵️‍♂️","👷‍♀️","💂‍♂️","💂‍♀️","🎈","🎆","🎇","🎉","✨","🧨","🎊","🎃","🎄","🎎","🎍","🎋","🎏","🎐","🎑","🎁","🎀","🧧","🎡","🎠","🎫","🎢","🎪","🎭","🧵","🎨","🧶","👓","🥽","🦺","🍕","🍔","🍟","🧂","🍿","🌭","🥓","🥚","🍳","🧈","🥞","🧇","🍞","🥐","🥨","🧀","🥖","🥯","🥗","🥙","🥪","🥫","🌯","🌮","🍖","🍗","🥩","🥠","🥟","🍠","🥡","🍱","🍘","🍛","🍚","🍙","🚗","🚓","🚕","🚌","🚙","🛺","🚐","🚎","🚑","🚛","🚚","🚒","🚜","🚘","🚔","🦽","🚍","🚖","🦼","🛹","🚲","🛵","🛴","🏎","🚄","🚅","🚞","🚝","🚈","🚃","🚋","🚆","🚇","🚊","🚉","🧡","💛","💜","💙","💚","🤎","🖤","💕","💔","💞","💓","💗","💝","💖","💟","💌","💢","💦","💤","💥","💫"];
let start =document.getElementById("start");

let square1= document.getElementById("square1");
let square2= document.getElementById("square2");
let square3= document.getElementById("square3");
let square4= document.getElementById("square4");
let square5= document.getElementById("square5");
let square6= document.getElementById("square6");
let square7= document.getElementById("square7");
let square8= document.getElementById("square8");
let square9= document.getElementById("square9");
let square10= document.getElementById("square10");
let square11= document.getElementById("square11");
let square12= document.getElementById("square12");
let square13= document.getElementById("square13");
let square14= document.getElementById("square14");
let square15= document.getElementById("square15");
let square16= document.getElementById("square16");

start.addEventListener("click",emojiFetch,true);

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

//start eventListener
function emojiFetch(e){
    e.preventDefault();
    shuffle(emojiArray);
    let newArray= emojiArray.splice(0,8);
    let finalArray=newArray.concat(newArray);
    console.log(finalArray);
}
