'use strict';
//FIX THE POP WINDOW TOGGLE BEHAVIOR

const dataOpeners = document.querySelectorAll('[data-pop]');
const dataClose = document.querySelectorAll('[data-closes]');
const navPop = document.querySelectorAll('.nav-pop');
// const closeBtn = document.querySelector('.icon-close');

dataOpeners.forEach((clk) => {
  clk.addEventListener('click', function (g) {
    for (let h = 0; h < navPop.length; h++) {
      const tab = navPop[h];
      tab.classList.remove('pop-active');
    }
    document.querySelector('.pop-wrapper').classList.add('pop-w');
    // show it/if statament if it is open, close it, if the closebtn is clicked--remove the class to close it
    // remove transdition nav-pop and hide it disp none. none

    let targetTab = clk.getAttribute('data-pop');
    document.getElementById(targetTab).classList.add('pop-active');
    g.preventDefault();
  });
});

dataClose.forEach((c) => {
  c.addEventListener('click', function (y) {
    let closer = c.getAttribute('data-closes');
    document.getElementById(closer).classList.remove('pop-active');
    y.preventDefault();
  });
});

//FORM BUTTOM

const form = document.querySelector('.form-container');
const btnSub = document.querySelector('.btn-form-it');
const btnSubX = document.querySelector('.btn-form-it-x');
const blured = document.querySelector('.nav-woman');

btnSub.addEventListener('click', function () {
  form.style.transform = 'translateY(0px)';
  btnSub.style.display = 'none';
  blured.style.filter = 'blur(4px)';
});

btnSubX.addEventListener('click', function () {
  form.style.transform = 'translateY(-500px)';
  btnSub.style.display = 'block';
  blured.style.filter = 'blur(0px)';
});


//new