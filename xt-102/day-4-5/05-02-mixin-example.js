function Stack() {
    this.arr = [];
}

Stack.prototype.push = function( data ) {
    this.arr.push( data );
};

Stack.prototype.pop = function() {
    return this.arr.pop();
};

Stack.prototype.show = function() {
    console.log( this.arr );
};

const stack = new Stack();
stack.push( 1 );
stack.push( 2 );
stack.push( 3 );
stack.pop();
stack.show();

// EXERCISE: Please implement Queue class using array - refer shift(), unshift()