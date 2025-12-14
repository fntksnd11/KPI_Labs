function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

function removeElements(array, ...items) {
  const itemsToRemove = new Set(items);
  
  for (let i = array.length - 1; i >= 0; i--) {
    if (itemsToRemove.has(array[i])) {
      array.splice(i, 1);
    }
  }
  
  return array;
}

function unique(array) {
  return [...new Set(array)];
}

function difference(array1, array2) {
  const set2 = new Set(array2);
  return array1.filter(item => !set2.has(item));
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log(array1);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');
console.log(array2);

const array3 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array3, 5, 1, 6);
console.log(array3);

const array4 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array4, 'Lima', 'Berlin', 'Kiev');
console.log(array4);

const result1 = unique([2, 1, 1, 3, 2]);
console.log(result1);

const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2);

const array5 = [7, -2, 10, 5, 0];
const array6 = [0, 10];
const result3 = difference(array5, array6);
console.log(result3);

const array7 = ['Beijing', 'Kiev'];
const array8 = ['Kiev', 'London', 'Baghdad'];
const result4 = difference(array7, array8);
console.log(result4);