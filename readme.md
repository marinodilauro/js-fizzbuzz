# Readme
## Fizzbuzz

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

***

### Steps

- Creo delle variabili e assegno loro l'elemento HTML in cui voglio creare altri elementi HTML tramite JS
- Creo un ciclo for per stampare in console i numeri da 1 a 100.
- Verifico se i numeri generati sono multipli di 3, di 5, o di entrambi.
  - SE il numero è multiplo di 3:
    - Stampa "Fizz" al posto del numero
  - ALTRIMENTI SE il numero è multiplo di 5:
    - Stampa "Buzz" al posto del numero
  - ALTRIMENTI SE il numero è multiplo di 3 e 5:
      - Stampa "FizzBuzz" al posto del numero
  - ALTRIMENTI:
    - Stampa il normalmente il numero generato
   

***

### Tools

- Variabili e costanti
- console.log() per stampare dati in console
- For loop
- Istruzioni condizionali (if/else if/else)
- element.insertAdjacentHTML() to create tag in HTML via JS
- document.getElementBy....innerHTML per stampare il risultato all'interno dell'HTML 