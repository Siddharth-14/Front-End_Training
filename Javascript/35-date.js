//Date(class/constructor function)
//includes date and time
const today = new Date();
console.log(today);

const republic = new Date(2021, 0, 26)
console.log(republic);
console.log
    (republic.toLocaleDateString());
console.log(republic.toUTCString());
console.log(republic.toISOString());

const fifteen = new Date();
fifteen.setDate(15);
console.log(fifteen);
console.log(fifteen.getDay());

//which day was i born
const bday = new Date(1999, 11, 14)
console.log(bday.getDay());

const tom = new Date();
tom.setDate(tom.getDate() + 1);

const tom29 = new Date();
tom29.setDate(tom29.getDate() + 29);

const todays = new Date();
todays.toISOString();

Date.prototype.toSapientString = function () {
    this.toString().substr(0,15);
};
console.log(todays.toSapientString());