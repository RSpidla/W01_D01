// 'Math.PI' property
console.log("\nThe Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159\n");
var pi = Math.PI;
console.log(pi);
console.log("________________________");

console.log("\nThe Math.E property represents the base of natural logarithms, e, approximately 2.718.\n");
var e = Math.E;
console.log(e);
console.log("________________________");

console.log("\nThe Math.abs() function returns the absolute value of a number, that is\n")
var a = -3;
console.log(Math.abs(a));
console.log("________________________");

console.log("\nThe Math.round() function returns the value of a number rounded to the nearest integer.\n");
var a = 1.27;
console.log(Math.round(a));
console.log("________________________");

console.log("\nThe Math.ceil() function returns the smallest integer greater than or equal to a given number.\n");
var a = 1.27;
console.log(Math.ceil(a));
console.log("________________________");

console.log("\nThe Math.floor() function returns the largest integer less than or equal to a given number.\n");
var a = 1.99;
console.log(Math.floor(a));
console.log("________________________");

console.log("\nThe Math.exp() function returns ex, where x is the argument, and e is Euler's number (also known as Napier's constant), the base of the natural logarithms.\n");
var a = 2;
console.log(Math.exp(a));
console.log("________________________");

console.log("\nThe Math.E property represents the base of natural logarithms, e, approximately 2.718.\n");
var e = Math.E;
console.log(Math.log(e));
console.log("________________________");

console.log("\nThe Math.max() function returns the largest of zero or more numbers.\nThe static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.\n");
console.log(Math.max(1, 100, 1000));
console.log(Math.min(1, 100, 1000));
console.log("________________________");

console.log("\nThe Math.random() function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.\n");
console.log(Math.random());

var rnd = Math.random() * 100;
console.log(rnd);

var rnd = Math.floor(Math.random() * 100) + 1;
console.log(rnd);
console.log("________________________");

