/*
  Napisz funkcję countSum, która w argumencie może przyjmować nieskończoną 
  ilość produktów, gdzie każdy produkt to obiekt składający się z nazwy i ceny. 
  Użyj do tego rest operatora.
  Następnie za pomocą .map() przekształć tablicę klientów na tablicę klientów
  z dodatkowym polem totalCost, wyliczonym za pomocą funkcji countSum. 
  Przy przekazaniu argumentów do funkcji countSum użyj spread operatora.
  Przy zwracaniu nowego obiektu z dodatkowym polem "totalCost" 
  użyj spread operatora.
*/

const customers = [
  {
    name: "John",
    email: "john@gmail.com",
    products: [
      { name: "Pizza", cost: 13 },
      { name: "Spaghetti", cost: 7 },
    ],
  },
  {
    name: "Kate",
    email: "kate@gmail.com",
    products: [
      { name: "Pizza", cost: 13 },
      { name: "Spaghetti", cost: 7 },
      { name: "Pad-Thai", cost: 8 },
      { name: "Sushi", cost: 42 },
    ],
  },
  {
    name: "Peter",
    email: "peter@gmail.com",
    products: [
      { name: "Pad-Thai", cost: 8 },
      { name: "Sushi", cost: 42 },
      { name: "Ramen", cost: 10 },
    ],
  },
];

const countSum = (...products) => {
  return products.reduce((total, product) => total + product.cost, 0);
};

const customersWithTotalCost = customers.map((customer) => {
  const totalCost = countSum(...customer.products);
  return {
    ...customer,
    totalCost,
  };
});

console.log(customersWithTotalCost);
