$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    // $("body").toggleClass("lock");
  });
});

let change = (document.querySelector(".firs__page-man").onclick = function () {
  document.getElementById("change__color1").style.background = "#2950C2";
  document.getElementById("change__color2").style.background = "none";
  return false;
});

let change1 = (document.querySelector(".firs__page-woman").onclick =
  function () {
    document.getElementById("change__color1").style.background = "none";
    document.getElementById("change__color2").style.background = "#2950C2";
    return false;
  });
