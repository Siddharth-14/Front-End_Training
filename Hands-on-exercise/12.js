function sumSquares(x){
    let i=0;
    var sum = 0;
    while(i<x.length){
        sum += (x[i]*x[i]);
        i++;
    }
    return sum;
}

var result = sumSquares([1,2,3,4]);
console.log(result);