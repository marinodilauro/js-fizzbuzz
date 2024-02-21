// Creo delle variabili e assegno loro l'elemento HTML in cui voglio creare altri elementi HTML tramite JS

const rowElement = document.querySelector(".row");
//console.log(listElement);

// Creo variabili per gli output speciali

const fizz = "Fizz";
const buzz = "Buzz";
const fizzbuzz = "FizzBuzz";


// Creo un ciclo for per stampare in console i numeri da 1 a 100.

for (let i = 1; i <= 100; i++) {

  //Verifico se i numeri generati sono multipli di 3, di 5, o di entrambi e stampo il corrispettivo output
  if (i % 3 == 0 && i % 5 == 0) {

    //console.log(fizzbuzz);
    rowElement.insertAdjacentHTML("beforeend", `<div class="mc_square mc_fizzbuzz rounded text-center fw-bold">${fizzbuzz}</div>`);

  } else if (i % 3 == 0) {

    //console.log(fizz);
    rowElement.insertAdjacentHTML("beforeend", `<div class="mc_square mc_fizz rounded text-center fw-bold">${fizz}</div>`);

  } else if (i % 5 == 0) {

    //console.log(buzz);
    rowElement.insertAdjacentHTML("beforeend", `<div class="mc_square mc_buzz rounded text-center fw-bold">${buzz}</div>`);

  } else {

    // console.log(i)
    rowElement.insertAdjacentHTML("beforeend", `<div class="mc_square rounded text-center fw-bold">${i}</div>`);

  };

};


