function sum(x, y, cb) {
  const promise = new Promise(function (resolve, reject) {
    if(typeof x !='number' || typeof y!='number'){
      reject(new Error('Both argumnets must be a number'));
      return;
    }

    setTimeout(function(){
      const result = x+y;
      resolve(result);
    })
  });
  return promise;
}

//Promise is a trusted 3rd party for caller of an async function to communicate with one another.

async function calculateSerialSum(){
  console.log("before");
  await sum(12,13);
  console.log("before");
  /*.then(function(result1){
    console.log(result1);
    return sum(result1,14);
  })
  .then(function(result2){
    console.log(result2);
    return sum(result2,15);
  })
  .then(function(result3){
    console.log(result3);
  })
  .catch(function(err){
    console.log(err);
  })*/
}

console.log("line before");
calculateSerialSum();
console.log("line after");

