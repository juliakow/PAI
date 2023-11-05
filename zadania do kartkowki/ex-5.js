const teamA = ["Anna", "Peter", "Charles"];
const teamB = ["Lucy", "Michael", "Eva"];

/*
  Ćwiczenie 5
  Za pomocą spread operator stwórz nową tablicę zawierającą wszystkich członków obu drużyń.
  Wyświetl nową tablicę.
  PS: Zadanie uruchom z poziomu terminala za pomocą: node ./ex-5.js
*/
const persons = [...teamA, ...teamB];
console.log(persons);