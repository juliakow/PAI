const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    engine: {
        type: "petrol",
        capacity: 1.8,
    },
};

/* 
    Ćwiczenie 1
    Dokonaj destrukturyzacji, aby uzyskać zmienne brand, model oraz type silnika.
    Następnie wyświetl te trzy zmienne.
    PS: Zadanie uruchom z poziomu terminala za pomocą: node ./ex-1.js
  */

const {
    brand,
    model,
    engine: { type },
} = car;
console.log(brand, model, type);