function sumArray(x,transform){
    let sum = 0, i=0;
    while(i<x.length){
        sum += transform(x[i]);
        i++;
    }
    return sum;
}

function square(num){
    return Math.pow(num,2);
}

function cube(num){
    return Math.pow(num,3);
}

console.log( sumArray( [ 1, 2, 3 ], square ) );
console.log( sumArray( [ 1, 2, 3 ], cube ) );