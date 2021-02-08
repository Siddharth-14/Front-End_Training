function sumSquares(x){
    let i=0;
    var sum = 0;
    while(i<x.length){
        sum += Math.pow(x[i],2);
        i++;
    }
    return sum;
}

var result = sumSquares([1,2,3,4]);
console.log(result);