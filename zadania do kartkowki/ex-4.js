const person = {
    name: "John",
    email: "john@doe.com",
    age: 45,
};

/* 
    Ćwiczenie 4
    Dokonaj destrukturyzacji, aby uzyskać wiek osoby zapisując wiek do zmiennej o nazwie "personAge".
    PS: Zadanie uruchom z poziomu terminala za pomocą: node ./ex-4.js
  */
const { age: personAge } = person;
console.log(personAge);