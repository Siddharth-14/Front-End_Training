//Function declaration
const result = sum1(12, 13)
console.log('result = ', result);

function sum1(x, y) {
    let result;
    result = x + y;
    return result;
}


//Function expression syntax
//function expression can be 1)named 2)anonymous
let sum2 = function (x, y) {
    return x + y;
};

console.log('result = ', sum2(12, 15));

//arrow function syntax
let sum3 = (x, y) => {
    return x + y;
};

console.log('result = ', sum3(12, 15));