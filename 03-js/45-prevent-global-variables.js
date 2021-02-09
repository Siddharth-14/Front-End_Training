// we want to share x everywhere in this script
// Immediately Invoked Function Expression (IIFE - "iffy") / Self-invoking functions
(function() {
    'use strict';
    
    let x = 1;

    function f() {
        console.log( x );
    }

    function g() {
        console.log( x );
    }

    f();
    g();
})();