let [x, y] = [1, 2]; //same as let x=1, y=2
[x, y] = [x + 1, y + 1]; //same as x = x + 1, y = y + 1
[x, y] = [y, x]; //swap the value of the two variables
console.log([x, y]); // [3,2]: the incremented and swapped values

//destructuring assignment makes it easy to work with functiosn that return arrays of values:
function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

function toCartesian(r, theta) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}

let [r, theta] = toPolar(1.0, 1, 0);
let [a, b] = toCartesian(r, theta);

let o = { x: 1, y: 2 };
for (const [name, value] of Object.entries(o)) {
  console.log(name, value); //prints the name of the variable. Example) x and its value 1.
}

let [c, d] = [1]; //this gives c the value 1 and d remains undefined.
[c, d] = [1, 2, 3]; // c == 1, d == 2
[, c, , d] = [1, 2, 3, 4]; // c == 2, d == 4

//you dont even need an array to use destructuring!
let [first, ...rest] = "Hello"; // first == H, rest == ["e", "l", "l", "o"]

//you can destructure objects
let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 };
let { r, g, b } = transparent;

//you can copy global functions of the math object into variables.
const { sin, cos, tan } = Math;

const { cos: cosine, tan: tangent } = Math;
