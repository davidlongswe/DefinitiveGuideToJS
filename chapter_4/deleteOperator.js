let o = { x: 1, y: 2 }; // Start with an object
delete o.x; // Delete one of its properties
"x" in o; // False: the property doesn't exist anymore

let a = [1, 2, 3]; // Start with an array
delete a[2]; // Delete the lat element of the array
2 in a; // false: array element 2 doesn't exist anymore
a.length; //3: note that array length doesn't change, though


let obj = {x: 1, y: 2}; 
delete obj.x; // Delete one of the object properties; returns true.
typeof obj.x; // Property doesn't exist, returns "undefined"
delete obj.x; // Delete a nonexistent property; return true;
delete 1; // This makes no sense, but it just returns true.
// Can't delete a variable; returns false, or SynxtaxError in strict mode.
delete o;
// Undeleteable property: returns false, or TypeError in strict mode
delete Object.prototype;