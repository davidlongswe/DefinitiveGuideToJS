let s = "Hello, world";

s.substring(1, 4); //"ell"
s.slice(1, 4); //"ell"
s.slice(-3); //rld
s.split(", "); //["Hello", "World"]

s.indexOf("l"); //2, position of first letter l
s.indexOf("l", 3); // 3, position of first "l" at or after 3
s.indexOf("zz"); // -1: s does not include the substring "zz"
s.lastIndexOf("l"); //10: position of last letter l

s.startsWith("Hell"); //true: the string starts with these
s.endsWith("!"); //false, the string s does not end with !
s.includes("or"); //true, the string s includes the substring "or"

s.replace("llo", "ya"); //"Heya, World"
s.toLowerCase(); //"hello, world"
s.toUpperCase(); //"HELLO, WORLD"
s.normalize(); //"Unicode NFC normalization: ES6"
s.normalize("NFD"); //NFD Normalization. Also "NFKC, "NFKD"

s.charAt(0); //"H"
s.charAt(s.length - 1); //"d"
s.charCodeAt(0); //"72: 16 it number att he specified position"
s.codePointAt(0); //"72: ES6, works with codepoints > 16 bits"

"x".padStart(3); //"   x"
"x".padEnd(3); //"x   "
"x".padStart(3, "*"); //"***x"
"x".padEnd(3, "-"); //"x---"

" test ".trim(); //"test"
" test ".trimStart(); //"test "
" test ".trimEnd(); //" test"

s.concat("!");
("Hello, World!");
"<>".repeat(5);
("<><><><><>");

console.log(s[0]); // Strings can be treated as read-only arrays, here we pull out the first letter "h"
console.log(s[s.length - 1]); //Strings can be treated as read-only arrays, here we pull out the last letter "d"
