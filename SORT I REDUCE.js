// SORT:
// Metoda sortuje elementy przesuwając każdy z nich na podstawie funkcji zwrotnej. Funkcja zwrotna przyjmuje w argumencie dwa elementy, które są porówn

const numbers = [10, 30, 20, 50, 40];
const sortedNumbers = numbers.sort((numberA, numberB) =>
  numberA < numberB ? -1 : 1
);

// REDUCE:
// Metoda sprowadza tablicę do pojedynczej wartości.
// Wykonuje operacje na kolejnych elementach, aktualizując akumulator, który w wyniku końcowym zawiera jedną wartość, np. sumę liczb w tablicy.

const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, currValue) => acc + currValue, 0);
