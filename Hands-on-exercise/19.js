const john = {
    name: 'John',
    age: 32,
    celebrateBirthday: celebrateBirthday,
    };

const jane = {
    name: 'Jane',
    age: 32,
    celebrateBirthday: celebrateBirthday,
    };

function celebrateBirthday(){
    this.age++;
}

function celebrateBirthdays(x){
    x.age = x.age+1;
}

console.log(john.age);
jane.age = jane.age + 1;
console.log(jane);
const add = {
    'first line': "90 feet road",
    'city': 'Mumbai'
};
john['address'] = add;
console.log(john.address.city);

john['spouse'] = jane;
jane['spouse'] = john;
jane['emailid'] = ["jane@gmail.com",
    'jane@hotmail.com'
];
console.log(jane.emailid[1]);
jane.emailid[2]="jane@sapient.com"
console.log(jane);
john.celebrateBirthday();
jane.celebrateBirthday();
celebrateBirthdays(john);
celebrateBirthdays(jane);
console.log(john);
console.log(jane);
