var navbar = document.querySelector('.nav');
var loader =document.querySelector(".loader");

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 100 ) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

document.querySelector('.toggler').onclick = () => {
  document.querySelector('.nav').classList.toggle('open');
}


//Loader 


function loadfunction(){
  loader.style.display="none";
}