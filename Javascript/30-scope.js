let x = 1;

console.log('x (global space) = ', x);

function outer() {
    let y = 2;
    console.log('x (outer function space) = ', x);
    console.log('y (outer function space) = ', y);
    if (true) {
        let z = 3;
        console.log('z (outer function space) = ', z);
        console.log('y (outer function space) = ', y);
        console.log('x(block space) = ', x);
    }
    //not possible
    console.log('z (outer function space) = ', z);

    function inner() {
        //z wont work
        console.log('z (outer function space) = ', z);

        console.log('y (outer function space) = ', y);
        console.log('x(block space) = ', x);
    }
}

outer();
//not possible
console.log('y (outer function space) = ', y);

