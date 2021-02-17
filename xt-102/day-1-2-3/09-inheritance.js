function Person( name, age ) {
    this.name = name;
    this.age = age;
}

Person.prototype.celebrateBirthday = function() {
    ++this.age;
};

Person.prototype.setName = function( name ) {
    this.name = name;
};

function Employee( name, age, role, dept ) {
    // Like super( name, age ) in Java
    // By default this -> window (in browser), this -> global (in Node.js)
    // We need to make sure this -> current object - Hence we use function.call() to call a function
    Person.call( this, name, age );
    
    this.role = role;
    this.dept = dept;
}

// Employee.prototype = { constructor: Employee, __proto__: Object.prototype } -> { constructor: Employee, __proto__: Person.prototype } 
Object.setPrototypeOf( Employee.prototype, Person.prototype );

Employee.prototype.promote = function() {
    this.role = `Senior ${this.role}`;
};

// john.__proto__ -> { constructor: Employee, __proto__: Person.prototype } 
const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
const jane = new Employee( 'Jane', 28, 'Web Developer', 'IT' );

john.celebrateBirthday(); // this -> john
jane.celebrateBirthday(); // this -> jane

john.promote();
jane.promote();

console.log( john.age );
console.log( jane.age );

console.log( john.celebrateBirthday === jane.celebrateBirthday ); // false -> they are 2 different function

john.setName( 'Jonathan' );
console.log( john );