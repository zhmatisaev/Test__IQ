let ten__content_1 = document.querySelector(".ten-1");
let ten__content_2 = document.querySelector(".ten-2");
let ten__content_3 = document.querySelector(".ten-3");

document.getElementById("ten__content-1").onclick = function () {
  ten__content_1.style.background = "#2950C2";
  ten__content_2.style.background = "none";
  ten__content_3.style.background = "none";
};

document.getElementById("ten__content-2").onclick = function () {
  ten__content_1.style.background = "none";
  ten__content_2.style.background = "#2950C2";
  ten__content_3.style.background = "none";
};

document.getElementById("ten__content-3").onclick = function () {
  ten__content_1.style.background = "none";
  ten__content_2.style.background = "none";
  ten__content_3.style.background = "#2950C2";
};
