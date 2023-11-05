const colors = ["red", "green", "blue", "yellow"];

/* 
  Ćwiczenie 2
  Dokonaj destrukturyzacji, aby uzyskać pierwszy, drugi, czwarty z tablicy. 
  Trzeci element należy pominąć. 
  Zapisz te wartości do zmiennych colorA, colorB i colorC.
  Następnie wyświetl te zmienne.
  PS: Zadanie uruchom z poziomu terminala za pomocą: node ./ex-2.js
*/

const [colorA, colorB, colorC] = colors;
console.log(colorA, colorB, colorC);
