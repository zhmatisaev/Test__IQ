let third__content_1 = document.querySelector(".third__page-choice-1");
let third__content_2 = document.querySelector(".third__page-choice-2");
let third__content_3 = document.querySelector(".third__page-choice-3");
let third__content_4 = document.querySelector(".third__page-choice-4");
let third__content_5 = document.querySelector(".third__page-choice-5");

document.getElementById("third__content1").onclick = function () {
  third__content_1.style.background = "#2950C2";
  third__content_2.style.background = "none";
  third__content_3.style.background = "none";
  third__content_4.style.background = "none";
  third__content_5.style.background = "none";
};

document.getElementById("third__content2").onclick = function () {
  third__content_1.style.background = "none";
  third__content_2.style.background = "#2950C2";
  third__content_3.style.background = "none";
  third__content_4.style.background = "none";
  third__content_5.style.background = "none";
};

document.getElementById("third__content3").onclick = function () {
  third__content_1.style.background = "none";
  third__content_2.style.background = "none";
  third__content_3.style.background = "#2950C2";
  third__content_4.style.background = "none";
  third__content_5.style.background = "none";
};
document.getElementById("third__content4").onclick = function () {
  third__content_1.style.background = "none";
  third__content_2.style.background = "none";
  third__content_3.style.background = "none";
  third__content_4.style.background = "#2950C2";
  third__content_5.style.background = "none";
};
document.getElementById("third__content5").onclick = function () {
  third__content_1.style.background = "none";
  third__content_2.style.background = "none";
  third__content_3.style.background = "none";
  third__content_4.style.background = "none";
  third__content_5.style.background = "#2950C2";
};
