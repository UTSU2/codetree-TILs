let [a,b,c] = [5,6,7];

let tmp = a;
a = c;
c = b;
b = tmp;

console.log(`${a}`);
console.log(`${b}`);
console.log(`${c}`);