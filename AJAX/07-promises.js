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

const promise1 = sum(12, 13);

promise1.then(function(result){
  console.log(result);
});

promise1.catch(function(err){
  console.log(err);
});


