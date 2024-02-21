// Creo delle variabili e assegno loro l'elemento HTML in cui voglio creare altri elementi HTML tramite JS

const listElement = document.querySelector(".list");
//console.log(listElement);

// Creo un ciclo for per stampare in console i numeri da 1 a 100.

for (let i = 1; i <= 100; i++) {

  //Verifico se i numeri generati sono multipli di 3, di 5, o di entrambi e stampo il corrispettivo output
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i)
  };

};


