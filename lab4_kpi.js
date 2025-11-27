// 1
function sum1(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

// 2
function sum2(...args) {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
}

// 3e
function sum3(...args) {
  let result = 0;
  let i = 0;
  while (i < args.length) {
    result += args[i];
    i++;
  }
  return result;
}

// 4
function sum4(...args) {
  let result = 0;
  let i = 0;
  
  if (args.length === 0) {
    return result;
  }
  
  do {
    result += args[i];
    i++;
  } while (i < args.length);
  
  return result;
}

// 5
function sum5(...args) {
  return args.reduce((acc, current) => acc + current, 0);
}


console.log('Testing sum functions:');
console.log(sum1(1, 2, 3));
console.log(sum2(0));
console.log(sum3());
console.log(sum4(1, -1, 1)); 
console.log(sum5(10, -1, -1, -1)); 

// 6
function max(matrix) {
  let maxValue = -Infinity;
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxValue) {
        maxValue = matrix[i][j];
      }
    }
  }
  
  return maxValue;
}


const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log('Testing max function:');
console.log(m); 

// 7
function ages(persons) {
  const result = {};
  
  for (const person in persons) {
    if (persons.hasOwnProperty(person)) {
      const { born, died } = persons[person];
      result[person] = died - born;
    }
  }
  
  return result;
}


const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log('Testing ages function:');
console.log(ages(persons));
