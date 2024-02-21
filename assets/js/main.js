// Creo delle variabili e assegno loro l'elemento HTML in cui voglio creare altri elementi HTML tramite JS

const listElement = document.querySelector(".list");
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
    listElement.insertAdjacentHTML("beforeend", `<li>${fizzbuzz}</li>`);

  } else if (i % 3 == 0) {

    //console.log(fizz);
    listElement.insertAdjacentHTML("beforeend", `<li>${fizz}</li>`);

  } else if (i % 5 == 0) {

    //console.log(buzz);
    listElement.insertAdjacentHTML("beforeend", `<li>${buzz}</li>`);

  } else {

    // console.log(i)
    listElement.insertAdjacentHTML("beforeend", `<li>${i}</li>`);

  };

};


