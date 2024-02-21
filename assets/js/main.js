// Create variable and assign them HTML element

const rowElement = document.querySelector(".row");


// Create variables for special oputputs

const fizz = "Fizz";
const buzz = "Buzz";
const fizzbuzz = "FizzBuzz";


// Create for loop to generate numbers from 1 to 100

for (let i = 1; i <= 100; i++) {

  const square = `<div class="mc_square rounded text-center fw-bold">${i}</div>`;
  const fizzSquare = `<div class="mc_square mc_fizz rounded text-center fw-bold">${fizz}</div>`;
  const buzzSquare = `<div class="mc_square mc_buzz rounded text-center fw-bold">${buzz}</div>`;
  const fizzBuzzSquare = `<div class="mc_square mc_fizzbuzz rounded text-center fw-bold">${fizzbuzz}</div>`;

  // Verify if generated numbers are multiple of 3, 5 or both and show ooutputs on screen
  if (i % 3 == 0 && i % 5 == 0) {

    rowElement.insertAdjacentHTML("beforeend", fizzBuzzSquare);

  } else if (i % 3 == 0) {

    rowElement.insertAdjacentHTML("beforeend", fizzSquare);

  } else if (i % 5 == 0) {

    rowElement.insertAdjacentHTML("beforeend", buzzSquare);

  } else {

    rowElement.insertAdjacentHTML("beforeend", square);

  };

};


