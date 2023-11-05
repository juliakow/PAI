/*
  Ćwiczenie 8
  Napisz funkcję countAvg, która w argumencie może przyjmować nieskończoną ilość argumentów, gdzie każdy argument to liczba. Użyj do tego rest operatora.
  Następnie za pomocą .map() przekształć tablicę studentów na tablicę studentów z dodatkowym polem avg, wyliczonym za pomocą funkcji countAvg. Przy przekazaniu argumentów do funkcji countAvg użyj spread operatora.
  Przy zwracaniu nowego obiektu z dodatkowym polem "avg" użyj spread operatora.

  PS: Zadanie uruchom z poziomu terminala za pomocą: node ./ex-8.js
*/

const students = [
    { name: "John", email: "john@gmail.com", grades: [1, 2, 2, 4] },
    { name: "Kate", email: "kate@gmail.com", grades: [3, 2, 1] },
    { name: "Peter", email: "peter@gmail.com", grades: [5, 5, 2, 1, 1, 4, 3] },
];
const countAvg = (...args) => {
    const sum = args.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / args.length;
    return avg;
};
const studentwithAvg = students.map((student) => ({
    ...student,
    avg: countAvg(...student.grades),
}));