const sayHello = name => `Hello ${name}`;

const printHello = (name) => {
  console.log(name);
};

printHello();

const getSibilings = n => ({ previous: n - 1, next: n + 1 });

console.log(sayHello);
console.log(sayHello('Adriano'));
console.log(getSibilings(10));

