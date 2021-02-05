let x = 13, y = 24;
console.log(1 + 2);
console.log(12 / 24);//0.5....
console.log(13 % 7);//6
console.log(3 ** 4);
console.log(3.5** 4.5);

console.clear()

console.log(1<2);
console.log(1==2);
console.log(2==1+1);
console.log(2=='2')//true or false
console.log(2 === '2');//false (not equal too)

console.clear()

const isRaining = true, doLikeToGetWet = false;
const shouldLiTakeUmbrella = isRaining && !doLikeToGetWet;

console.log(shouldLiTakeUmbrella);

console.clear();

x=x+10;
x+=10;
console.log(x);

console.log(++x);
console.log(x++);

console.log(--x);
console.log(x--);

console.log(x>20 ? 'More than 30':'Less than or equal to 30');

const result = 1+(2*3)/4
console.log(result);
const result2 = true || false && !true || true;
console.log(result2)