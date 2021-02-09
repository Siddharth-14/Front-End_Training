function sum(x,y){
    return x+y;
}
var sum = function(x,y){
    return x*x+y*y;
}

function sum2(x,y){
    sum2 = function(x,y){
        return x*x+y*y;
    }
    return x+y;
}

console.log(sum2(2,3));
console.log(sum2(2,3));