// ES2015 introduced class keyword for defining classes
class Person {
    constructor( name, emailids, address ) {
        this.name = name;
        this.emailids = emailids;
        this.address = address;
    }

    // methods are shared among all objects of the class
    addEmailid( emailid ) {
        this.emailids.push( emailid );
    }
}

const john = new Person( 
    'John',
    [ 
        'john@example.com',
        'john@gmail.com'
    ],
    {
        city: 'Bangalore',
        pinCode: 560101
    }
);

const jane = new Person( 
    'Jane',
    [ 
        'jane@example.com',
        'jane@gmail.com'
    ],
    {
        city: 'Chennai',
        pinCode: 600101
    } 
);

john.addEmailid( 'john@yahoo.com' );
jane.addEmailid( 'jane@yahoo.com' );

console.log( john );
console.log( jane );