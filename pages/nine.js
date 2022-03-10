let nine__content_1 = document.querySelector(".nine__page-choice-1");
let nine__content_2 = document.querySelector(".nine__page-choice-2");
let nine__content_3 = document.querySelector(".nine__page-choice-3");

document.getElementById("nine__content-1").onclick = function () {
  nine__content_1.style.background = "#2950C2";
  nine__content_2.style.background = "none";
  nine__content_3.style.background = "none";
};

document.getElementById("nine__content-2").onclick = function () {
  nine__content_1.style.background = "none";
  nine__content_2.style.background = "#2950C2";
  nine__content_3.style.background = "none";
};

document.getElementById("nine__content-3").onclick = function () {
  nine__content_1.style.background = "none";
  nine__content_2.style.background = "none";
  nine__content_3.style.background = "#2950C2";
};
