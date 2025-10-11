// 1
let myName = "Anton"; 

// 2
const birthYear = 2007; 

// 3 
function greet(name) {
    console.log("Hello, " + name + "!");
}

// 4
function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// 5
function rangeOdd(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}

// 6

function average(a, b) {
    return (a + b) / 2;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

function calculate() {
    let results = [];
    for (let i = 0; i <= 9; i++) {
        let sq = square(i);
        let cu = cube(i);
        results.push(average(sq, cu));
    }
    return results;
}

// 7

function fn() {
    const constObj = { name: "A" };
    let letObj = { name: "B" };

    constObj.name = "C"; 
    letObj.name = "D";

    
    letObjObj = { name: "F" }; 

    return { constObj, letObj };
}

// 8

function createUser(name, city) {
    return { name, city };
}

// 9

let contacts = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Mao Zedong", phone: "+380501112233" },
  { name: "Rene Descartes", phone: "+380931234567" }
];

function findPhoneByName(name) {
    for (let i = 0; i <= contacts.length; i++) {
        if (contacts[i].name === name) {
            return contacts[i].phone;
        }
    }
    return undefined;
}

// 10

let phoneHash = {};
contacts.forEach(contact => {
    phoneHash[contact.name] = contact.phone;
});

function findPhoneByNameHash(name) {
    return phoneHash[name];
}


greet(myName);

console.log(" Range");
console.log(range(1, 10));

console.log("Odd Range");
console.log(rangeOdd(1, 10));

console.log("Calculations");
console.log(calculate());

console.log("Objects Example");
console.log(fn());

console.log("Create User");
console.log(createUser("Marcus Aurelius", "Roma"));

console.log("=== Find Phone ===");
console.log(findPhoneByName("Mao Zedong"));
console.log(findPhoneByNameHash("Rene Descartes"));
