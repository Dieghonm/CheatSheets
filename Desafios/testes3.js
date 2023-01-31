function test(...a) {
  console.log(typeof a);
}

test(12)

let a = 3
let b = new Number(3)
let c = 3

console.log(a == b );
console.log(a === b );
console.log(b === c );

const o1 = {a:1, b:'c'}
const o2 = {a:1, b:'c'}
print(o1 === o2)



console.log(5%2);

console.log(Math.min());


const set = new Set()
set.add(5)
set.add('H')
set.add({sad: 's'})
for (let item of set) {
  console.log(item + 6);
}

const arr = [7,5,9,1]
const value = Math.max.apply(null, arr)
console.log(value);
