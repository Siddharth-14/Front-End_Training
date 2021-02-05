//An object is a bag of properties (key-value pairs)
const emptyObject = new Object();
const emptyObject2 = {

};
//key is always a string (except when it is a symbol)
//values can be numbers, boolean,string, arrays,null,undefined,objects,arrays,functions
const john = {
    name:'John',
    age:32,
    emailids:[
        'john@gmail.com',
        'jane@gmail.com'
    ],
    address:{
        city:'Banglore',
        pinCode: 560101
    }
};

console.log(john.name);
console.log(john.emailids[0]);
console.log(john.address.city);
//keys are always strings
console.log(john['name']);
const key = 'name';
console.log(john[key]);