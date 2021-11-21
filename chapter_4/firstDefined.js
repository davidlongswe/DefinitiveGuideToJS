//?? is a useful alternative to || when you want to select the first defined operand
//rather than the first truthy operand.

let max = maxWidth ?? preferences.maxWidth ?? 500;

let options = { timeout: 0, title: "", verbose: false, n: null };
options.timeout ?? 1000;
options.title ?? "Untitled";
options.verbose ?? true;
options.quiet ?? false;
options.n ?? 10;

//the ?? operator is similar to && and || but it doesnt have higher precedence
// or lower precedence than they do

(a ?? b) || c; // ?? first, then || 
a ?? (b || c); // || first, then ?? 
a ?? b || c;// SyntaxError: parenthese are required. 
