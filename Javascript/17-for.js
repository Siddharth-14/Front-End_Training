//'let' scope of i is the block in which it is decaled 
for(let i=1;i<10;i++){
    console.log(i);
}

console.log('After loop exit i = ',i);

//scope of j is the function in which it is declared/global
for(let i=1;i<10;i++){
    console.log(i);
}

console.log('After loop exit i = ',i);
