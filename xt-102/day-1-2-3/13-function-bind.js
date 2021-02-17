function foo() {
    console.log( this );
}

// Functions ARE objects
// Who creates functions? It is a constructor called "Function"
const foo2 = new Function( 'x', 'y', 'console.log( "foo2 ", this );' );
foo2();

console.log( foo instanceof Function ); // true

foo