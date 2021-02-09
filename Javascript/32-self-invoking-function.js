//when we enclose function within () ot is treated as a function expression
let result = (function sum(x,y){
    return x+y;
})(2,3);
console.log(result);