const greet = (strings, firstName, lastName) => {
  return (
    strings[0] +
    firstName.toUpperCase() +
    strings[1] +
    lastName.toUpperCase() +
    strings[2]
  );
};

const firstName = "john";
const lastName = "doe";

const textA = `Hello ${firstName} ${lastName}!`; // "Hello john doe!"
const textB = greet`Hello ${firstName} ${lastName}!`; // "Hello John Doe!"
const textC = greet(["Hello ", " ", "!"], firstName, lastName); // "Hello John Doe!"
