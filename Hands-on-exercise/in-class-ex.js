var str = "Hello world, welcome to the universe.";
console.log(str.indexOf("welcome"));

str = "Hello World!";
console.log(str.toLowerCase());

str = "Hello World!";
console.log(str.toUpperCase());

str = "Visit Microsoft!";
var res = str.replace("Microsoft", "Schools");
console.log(res);

str = "Hello world, welcome to the universe.";
var n = str.includes("world");
console.log(n);

var quote = 'With great power comes great responsibility';
res = quote.replace("responsibility", "electricity bill");
console.log(res);
console.log(quote.indexOf("great"));
console.log(quote.substring(0,10));




var num = 5.56789;
n = num.toFixed(2);
console.log(n);

num = 13.3714;
n = num.toPrecision(2);
console.log(n);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.isSafeInteger(123));
console.log(Number.isSafeInteger(Math.pow(2, 53)));
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

var num = 15;
var n = num.valueOf();
