let s = "hello";
s.toUpperCase(); //Here "HELLO" is allocated, but s remains unchanged because it's immutable.

let o = { x: 1 };
o.x = 2; //x can be changed because o is an object and is mutable.
o.y = 3; //o can be mutated by adding another property, in this case y.

let a = [1, 2, 3];
a[0] = 0; //change the value of an array element
a[3] = 4; //Add a new array element

p = { x: 1 };
console.log(o === p);
(a = []), (b = []); //two distinct, empty arrays
console.log(a === b); //distinct arrays are never equal

b = a; //now b refers to the same array
b[0] = 1; //mutate the array referred to by variable b
console.log(a[0]); //1: the change is also visible through, variable a
console.log(a === b); //true: a and b refer to the same object, so they are equal

let c = ["a", "b", "c"]; //An array we want to copy
let d = []; //A distinct array we'll copy into
for (let i = 0; i < a.length; i++) {
  b[i] = a[i];
}
let e = Array.from(b); //ES6, copy arrays with Array.from();
console.log(e);

//Function to compare two arrays
function equalArrays(a, b) {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
}
