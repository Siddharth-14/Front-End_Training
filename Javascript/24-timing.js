let sum = 0;

console.time('sumloop');
for(let i=0;i<100000;i++){
    sum += i;
}

console.log('sum = ',sum);
console.timeEnd('sumloop')

