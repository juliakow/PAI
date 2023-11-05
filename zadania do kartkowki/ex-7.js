const countSumFromArray = (array) => {
    return array[0] + array[1] + array[2];
};

const countSum = (a, b, c) => {
    return a + b + c;
};

/*
    Ćwiczenie 7
    Wywołaj countSumFromArray przekazując data jako argument. Wynik zapisz do zmiennej sumA.
    Wywołaj countSum przekazując pojedyncze elementy z data jako argumenty. Uzyj do tego spread operatora. Wynik zapisz do zmiennej sumB.
    Wyświelt te zmienne.
  
    PS: Zadanie uruchom z poziomu terminala za pomocą: node ./ex-7.js
  */

const data = [5, 10, 5];

const sumA = countSumFromArray(data);
const sumB = countSum(...data);

console.log(sumA, sumB);