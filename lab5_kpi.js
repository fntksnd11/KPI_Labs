function seq(firstFn) {
  const functions = [firstFn];
  
  function chain(nextFn) {
    if (typeof nextFn === 'function') {
      functions.push(nextFn);
      return chain;
    } else if (typeof nextFn === 'number') {
      return functions.reduce((acc, fn) => fn(acc), nextFn);
    }
  }
  
  return chain;
}


console.log('Testing seq function:');
console.log(seq(x => x + 7)(x => x * 2)(5)); 
console.log(seq(x => x * 2)(x => x + 7)(5)); 
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)); 

function array() {
  const arr = [];
  
  function func(index) {
    return arr[index];
  }
  
  func.push = function(value) {
    arr.push(value);
  };
  
  func.pop = function() {
    return arr.pop();
  };
  
  return func;
}


console.log('Testing array function:');
const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 
console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop()); 