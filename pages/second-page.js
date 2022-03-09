$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

let second__change1 = document.querySelector(".second__page-choice-1");
let second__change2 = document.querySelector(".second__page-choice-2");
let second__change3 = document.querySelector(".second__page-choice-3");
let second__change4 = document.querySelector(".second__page-choice-4");

document.getElementById("second__content").onclick = function () {
  second__change1.style.background = "#2950C2";
  second__change2.style.background = "none";
  second__change3.style.background = "none";
  second__change4.style.background = "none";
};

document.getElementById("second__content1").onclick = function () {
  second__change1.style.background = "none";
  second__change2.style.background = "#2950C2";
  second__change3.style.background = "none";
  second__change4.style.background = "none";
};

document.getElementById("second__content2").onclick = function () {
  second__change1.style.background = "none";
  second__change2.style.background = "none";
  second__change3.style.background = "#2950C2";
  second__change4.style.background = "none";
};
document.getElementById("second__content3").onclick = function () {
  second__change1.style.background = "none";
  second__change2.style.background = "none";
  second__change3.style.background = "none";
  second__change4.style.background = "#2950C2";
};
