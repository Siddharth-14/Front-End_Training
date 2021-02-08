function exponentFactory(x) {
    if (x === 2) {
        return square;
    } else if(x ===3){
        return cube;
    }else{
        return self;
    }
    function self(num){
        return num;
    }
    function square(num) {
        return Math.pow(num, 2);
    }
    function cube(num) {
        return Math.pow(num, 3);
    }
}

fn = exponentFactory(2);
console.log(fn(5)); // prints 25;
fn = exponentFactory(3);
console.log(fn(5)); // prints 125;
fn = exponentFactory(4);
console.log(fn(5)); // prints 5;