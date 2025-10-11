//Підготуйте дві реалізації функції inc:
console.log("Вправа 1");

//Скалярна версія 

function inc(n) {
  return n + 1;
}

const a = 5;
const b = inc(a);
console.dir({ a, b }); 

//Посилальна версія

function incObj(num) {
  num.n = num.n + 1;
}

const obj = { n: 5 };
incObj(obj);
console.dir(obj); 

//Підрахунок елементів різних типів у масиві.

console.log("Вправа 2");
const arr = [
  true, false, false,
 "hello","word",
  5, 12, -200,
  null, 
  undefined,
  { a: 1 },            
  [1, 2, 3],         
  () => {},             
  Symbol("id"),         
];

//ВЕРСІЯ 1

const staticCounts = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
  function: 0,
  symbol: 0,
};

for (const item of arr) {
  const typeName = typeof item; 
  staticCounts[typeName] += 1;  
}

console.log("версія 1");
console.log(staticCounts);

// ВЕРСІЯ 2 

const dynamicCounts = {};

for (const item of arr) {
  const typeName = typeof item;
  if (!dynamicCounts[typeName]) {
    dynamicCounts[typeName] = 0;
  }
  dynamicCounts[typeName] += 1;
}

console.log("версія 2");
console.log(dynamicCounts);

