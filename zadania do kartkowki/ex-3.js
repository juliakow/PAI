const names = ["Ala", "John"];

/* 
  Ćwiczenie 3
  Dokonaj destrukturyzacji, aby uzyskać pierwszy, drugi i trzeci element z tablicy. Ustal wartość domyślną na "Anonim", aby zabezpieczyć się przed niezdefiniowanymi wartościami.
  Następnie wyświetl te zmienne.
  PS: Zadanie uruchom z poziomu terminala za pomocą: node ./ex-3.js
*/
const [nameA = "anonim", nameB = "anonim", nameC = "anonim"] = names;
console.log(nameA, nameB, nameC);
