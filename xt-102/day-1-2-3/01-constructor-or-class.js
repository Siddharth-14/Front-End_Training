// old way to define a class
function Person( name, age ) {
    this['first name'] = name;
    this.age = age;

    // return this;
}

const salman = new Person( 'Salman', 21 ); // this -> { __proto__ : { } }
console.log( salman );