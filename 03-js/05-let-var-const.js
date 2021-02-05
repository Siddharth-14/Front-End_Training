// upto ES5
var x = 1; // x is a number
console.log( x );

x = 'Two'; // ok - x is a string
console.log( x );

// ES2015 / ES6 (v6 of JS)
let y = 1;
console.log( y );

y = 'Two';
console.log( y );

const z = 1;
console.log( z );

// error
// z = 2; // reassignment is not allowed for const variables
// console.log( z );

const a;
console.log( a );