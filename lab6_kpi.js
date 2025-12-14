const pipe = (...fns) => {

  fns.forEach((fn, index) => {
    if (typeof fn !== 'function') {
      throw new Error(`Argument at index ${index} is not a function. Received: ${typeof fn}`);
    }
  });

  const composed = (x) => {
    let result = x;
    
    try {
   
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (error) {
     
      if (composed.errorHandlers && composed.errorHandlers.length > 0) {
        composed.errorHandlers.forEach(handler => handler(error));
      }
      return undefined;
    }
  };

  composed.errorHandlers = [];

  composed.on = (event, handler) => {
    if (event === 'error' && typeof handler === 'function') {
      composed.errorHandlers.push(handler);
    }
    return composed; 
  };

  return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log("Test 1:");
const f1 = pipe(inc, twice, cube);
console.log(f1(5)); 

console.log("\nTest 2:");
const f2 = pipe(inc, inc);
console.log(f2(7)); 

console.log("\nTest 3:");
try {
  const f3 = pipe(inc, 7, cube);
} catch (error) {
  console.log("Caught error:", error.message);
}

console.log("\nTest 4:");
const riskyFunction = (x) => {
  if (x > 10) {
    throw new Error('Value is too large!');
  }
  return x * 2;
};

const f4 = pipe(inc, riskyFunction, cube);

f4.on('error', (e) => {
  console.log('Caught error in handler:', e.message);
});

console.log("f4(5):", f4(5)); 
console.log("f4(15):", f4(15)); 

console.log("\nTest 5:");
const f5 = pipe(
  (x) => {
    if (x < 0) throw new Error('Negative number');
    return x;
  },
  inc,
  (x) => {
    if (x === 10) throw new Error('Number equals 10');
    return x;
  }
);

f5.on('error', (e) => console.log('Handler 1:', e.message));
f5.on('error', (e) => console.log('Handler 2:', e.message));

console.log("f5(5):", f5(5));
console.log("f5(-5):", f5(-5)); 
console.log("f5(9):", f5(9)); 

console.log("\nTest 6:");
const f6 = pipe(inc, twice)
  .on('error', (e) => console.log('Error in f6:', e.message))
  .on('error', (e) => console.log('Another handler:', e.message));

console.log("f6(3):", f6(3)); 

console.log("\nTest 7 - Composition direction:");
const add = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;

const f7 = pipe(add(3), multiply(2));
console.log("Right-to-left: f7(4) = multiply(2, add(3, 4)) =", f7(4)); 


const pipeLeft = (...fns) => {
  fns.forEach((fn, index) => {
    if (typeof fn !== 'function') {
      throw new Error(`Argument at index ${index} is not a function. Received: ${typeof fn}`);
    }
  });

  const composed = (x) => {
    let result = x;
    try {
      for (let i = 0; i < fns.length; i++) {
        result = fns[i](result);
      }
      return result;
    } catch (error) {
      if (composed.errorHandlers && composed.errorHandlers.length > 0) {
        composed.errorHandlers.forEach(handler => handler(error));
      }
      return undefined;
    }
  };

  composed.errorHandlers = [];
  composed.on = (event, handler) => {
    if (event === 'error' && typeof handler === 'function') {
      composed.errorHandlers.push(handler);
    }
    return composed;
  };

  return composed;
};


const f8 = pipeLeft(multiply(2), add(3));
console.log("Left-to-right: f8(4) = add(3, multiply(2, 4)) =", f8(4));