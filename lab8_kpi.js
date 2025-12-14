function iterate(object, callback) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      callback(key, object[key], object);
    }
  }
}

function store(value) {
  return function() {
    return value;
  };
}

function contract(fn, ...types) {
  return function(...args) {
    const argTypes = types.slice(0, -1);
    const returnType = types[types.length - 1];
    
    for (let i = 0; i < argTypes.length; i++) {
      if (typeof args[i] !== argTypes[i].name.toLowerCase()) {
        throw new TypeError(`Argument ${i} must be of type ${argTypes[i].name}`);
      }
    }
    
    const result = fn(...args);
    
    if (typeof result !== returnType.name.toLowerCase()) {
      throw new TypeError(`Return value must be of type ${returnType.name}`);
    }
    
    return result;
  };
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});

const read = store(5);
const value = read();
console.log(value);

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.log(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.log(res2);