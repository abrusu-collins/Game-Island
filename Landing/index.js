var navbar = document.querySelector('.nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 600 ) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

document.querySelector('.toggler').onclick = () => {
  document.querySelector('.nav').classList.toggle('open');
}