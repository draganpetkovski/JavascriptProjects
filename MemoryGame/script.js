const container = document.querySelector(".cards-container");

function randomizeArray(x) {
  let niza = [];
  let broj = Math.floor(Math.random() * x.length);
  let i = 0;
  while (i < x.length) {
    if (!niza.includes(x[broj])) {
      niza.push(x[broj]);
      i++;
    } else {
      broj = Math.floor(Math.random() * x.length);
    }
  }
  return niza;
}

let cards = document.querySelectorAll(".card");
let tempArray = [];
cards.forEach(function (curr) {
  tempArray.push(curr.getAttribute("src"));
});

console.log(cards);

let niza = randomizeArray(cards);
console.log(niza);

niza.forEach(function (curr) {
  document.querySelector(".cards-container").appendChild(curr);
});

let counter = 0;
let previous;
let current;

container.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".card");
  if (!clicked) return;

  clicked.firstElementChild.style.opacity = 1;

  const child = clicked.firstElementChild;
  // console.log(child);

  // clicked.firstElementChild.style.opacity = 1;

  if (!clicked.classList.contains("hint")) {
    if (counter == 0) {
      counter++;
      previous = clicked;
      previous.firstElementChild.style.opacity = 1;

      console.log("Vleze vo prvio");
    } else if (counter == 1) {
      clicked.firstElementChild.style.opacity = 1;
      console.log(clicked.firstElementChild);
      clicked.firstElementChild.classList.remove("unActive");
      console.log(clicked.firstElementChild);

      function timer() {
        if (clicked !== previous) {
          current = clicked;
          clicked.firstElementChild.opacity = 1;
          if (
            current.firstElementChild.dataset.id ==
            previous.firstElementChild.dataset.id
          ) {
            console.log("hint");
            current.classList.add("hint");
            previous.classList.add("hint");
          } else {
            current.firstElementChild.style.opacity = 0;
            previous.firstElementChild.style.opacity = 0;
          }
          counter = 0;
        }
      }

      setTimeout(timer, 700);
    }
  }
});
