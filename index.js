const numbers = [1, 2, 3, 5, 6, 7, 8];

console.log(numbers.filter(n => n > 4));

console.log(numbers.reduce((acum, current) => acum + current, 50));

console.log(numbers.find(n => n === 3));

let [a, b, ...c] = numbers;
console.log(a, b, c);

[a, b] = [b, a];
console.log(a, b);

const othersNumbers = [10, 20, 30, ...numbers];
console.log(othersNumbers);
