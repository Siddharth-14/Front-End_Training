function contains(x,num){
    let i = 0;
    let found=false;
    while(i<x.length){
        if(x[i] === num){
            found = true;
            break;
        }
        i++;
    }
    return found;
}

console.log(contains([1,2,3,4],3));
console.log(contains([1,2,3,4],5));