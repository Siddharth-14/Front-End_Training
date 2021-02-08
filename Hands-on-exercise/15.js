function sum(x,y,transform){
    return transform(x)+transform(y);
}

function square(num){
    return Math.pow(num,2);
}

function cube(num){
    return Math.pow(num,3);
}

console.log(sum(2,3,square));
console.log(sum(2,3,cube));