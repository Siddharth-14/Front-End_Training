//callback function/callback

//setTimeout() accepts - 1.a funcion 2.time in milliseconds and requests the enviorment to call funtion after a given time.
setTimeout(function () {
    console.log('I am a function x')
}, 3000);

setTimeout(function () {
    console.log('I am a function y')
}, 3000);

for (let i = 0; i < 10000000; i++) {
    if (i % 10000000 === 0) {
        console.log(i * 10 / 10000000 + "%")
    }
    for (let j = 0; j < 100; j++) {

    }
}

function sum(x, y) {
    setTimeout(function () {
        return x + y;
    }, 3000);
}

let result = sum(12, 13);
console.log(result);

function cb1(result1){
    console.log(result1);
}

let rei;t1 = sum(12,13,cb1);
