// 1
function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("random(1, 10) →", random(1, 10));
console.log("random(10) →", random(10));

// 2
function generateKey(length, characters) {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = random(0, characters.length - 1);
    key += characters[index];
  }
  return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log("Generated key:", key);

// 3
function ipToNumber(ip = '127.0.0.1') {
  const parts = ip.split('.').map(Number);
  let num = 0;

  for (let i = 0; i < 4; i++) {
    num = num * 256 + parts[i]; 
  }

  return num;
}

console.log(ipToNumber('192.168.1.10'));


console.log("127.0.0.1 →", ipToNumber('127.0.0.1'));
console.log("0.0.0.0 →", ipToNumber('0.0.0.0'));
console.log("8.8.8.8 →", ipToNumber('8.8.8.8'));

// 4
function introspect(iface) {
  return Object.keys(iface)
    .filter(key => typeof iface[key] === 'function')  
    .map(key => [key, iface[key].length]);           
}

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

console.log("Introspection result:", introspect(iface));
