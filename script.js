'use strict';
//FIX THE POP WINDOW TOGGLE BEHAVIOR

const dataOpeners = document.querySelectorAll('[data-pop]');
const dataClose = document.querySelectorAll('[data-closes]');
const navPop = document.querySelectorAll('.nav-pop');
const popWrapper = document.querySelector('.pop-wrapper');

dataOpeners.forEach((clk) => {
  clk.addEventListener('click', function (g) {
    let activePops = document.querySelectorAll('.pop-active');
    activePops.length == 0
      ? (popWrapper.classList.add('slide-in'),
        popWrapper.classList.remove('slid'))
      : (popWrapper.classList.add('slid'),
        popWrapper.classList.remove('slide-in'));
    for (let h = 0; h < navPop.length; h++) {
      const tab = navPop[h];
      if (tab.classList.contains('pop-active')) {
        tab.classList.remove('pop-active');
        tab.style.transition = 'none';
      }
    }
    let targetTab = clk.getAttribute('data-pop');
    popWrapper.classList.contains('slide-in')
      ? (document.getElementById(targetTab).style.transition = '0.3s ease')
      : '';
    document.getElementById(targetTab).classList.add('pop-active');
    g.preventDefault();
  });
});

dataClose.forEach((c) => {
  c.addEventListener('click', function (y) {
    let closer = c.getAttribute('data-closes');
    document.getElementById(closer).style.transition = '0.3s ease';
    document.getElementById(closer).classList.remove('pop-active');
    y.preventDefault();
  });
});

//FORM BUTTOM

const form = document.querySelector('.form-container');
const btnSub = document.querySelector('.btn-form-it');
const btnSubX = document.querySelector('.btn-form-it-x');
const blured = document.querySelector('.overlay');

btnSub.addEventListener('click', function () {
  btnSub.style.display = 'none';
  form.style.display = 'block';
  blured.style.display = 'block';
});

btnSubX.addEventListener('click', function () {
  btnSub.style.display = 'block';
  form.style.display = 'none';
  blured.style.display = 'none';
});
