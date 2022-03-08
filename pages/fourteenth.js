let display = document.querySelector(".maping-data");
display.style.color = "white";

let show = document.querySelector(".show");
const geting = function (e) {
  fetch("https://swapi.dev/api/people/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let person = document.createElement("h2");
      person.textContent = " Имя Фамилия: " + data.name;
      person.style.paddingBottom = "15px";
      display.append(person);

      let birth_year = document.createElement("h2");
      birth_year.textContent = "Дата рождения: " + data.birth_year;
      birth_year.style.paddingBottom = "15px";
      display.append(birth_year);

      let gender = document.createElement("h2");
      gender.textContent = "Пол: " + data.gender;
      gender.style.paddingBottom = "15px";
      display.append(gender);

      let height = document.createElement("h2");
      height.textContent = "Рост: " + data.height;
      height.style.paddingBottom = "15px";
      display.append(height);

      let mass = document.createElement("h2");
      mass.textContent = "Вес: " + data.mass;
      mass.style.paddingBottom = "15px";
      display.append(mass);

      let hair_color = document.createElement("h2");
      hair_color.textContent = "Цвет волос: " + data.hair_color;
      hair_color.style.paddingBottom = "15px";
      display.append(hair_color);

      let eye_color = document.createElement("h2");
      eye_color.textContent = "Цвет глаз: " + data.eye_color;
      eye_color.style.paddingBottom = "15px";
      display.append(eye_color);
    });
};

show.addEventListener("click", geting);
