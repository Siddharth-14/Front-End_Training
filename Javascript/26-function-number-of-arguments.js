function foo(x, y) {
    console.log('x = ', x);
    console.log('y = ', y);

    console.log('arguments = ');
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments.length);
}


foo();//x =  undefined, y =  undefined
foo(12); //x =  12, y =  undefined
foo(12, 13, 14);//x =  12, y =  13