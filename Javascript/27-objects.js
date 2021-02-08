
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
    },
    "color":'crimson',
    changecolor:function(newcolor){
        john['color'] = newcolor;
    }
};

//adding or edititng properties
john.birthday = "2000-12-25";//john['birthday'] is also fine

//removing properties
delete john['age']; //delete john.age also works

//edditing/adding/deleteing keys which have special characters, MUST use [] notation
john['color'] = 'olive'

console.log(john.xyz);//undefined
console.log(john.xyz,abc);//gives an error as undefined is not an object

john.childer = [
    'mark',
    'mary'
];

console.log(john);