(function init(){
    'use strict';
    let x=1;
    function f(){
        console.log(x);
    }
    function g(){
        console.log(x);
    }
    f();
    g();
})