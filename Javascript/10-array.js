const primes = [2, 3, 5, 7, 11, 'Twelve', false, [17, 18]];
const emptyArray = [];

console.log(primes[0]);
console.log(primes[5]);
console.log(primes[6]);
console.log(primes[7]);
console.log(primes[7][0]); //first item within the array [17,19]
console.log(primes[8]); //undefined

primes[0] = "Two";
primes[5] = 13;
primes[8] = 23;
primes[12] = 37;
//[ 'Two', 3, 5, 7, 11, 13, false, [ 17, 18 ], 23, <3 empty items>, 37 ]
console.log(primes);

primes[1] = primes[2] + primes[3];
//[ 'Two', 12, 5, 7, 11, 13, false, [ 17, 18 ], 23, <3 empty items>, 37 ]
console.log(primes);

console.log(primes.length);

const matrix=[
    [1,2,3],
    [4,5,6,7,8,9,10],
    [7,8,9]
];

console.log(matrix[1][2]);