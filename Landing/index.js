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
  document.querySelector('.nav').classList.toggle('background');

}


$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 1000;
  function hidePreloader() {
  var preloader = $('.loader');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });