function Movie(name, cast_names, year, collection) {
    this.addToCast = function (newMember) {
        this.cast[this.cast.length] = newMember;
    },
        this.addToCollection = function (amount) {
            this.boxOfficeCollection += amount;
        }
    this.name = name
    this.cast = cast_names;
    this.yearOfRelease = year;
    this.boxOfficeCollection = collection;
}

var myFather = new Movie("John", ["Doe","Ray"], 1950, 1000000);
var myMother = new Movie("Sally", ["Rally","John"], 2013, 5000000);
console.log(myFather);
console.log(myMother);

myFather.addToCast("Jane");
myMother.addToCollection(5000);
console.log(myFather);
console.log(myMother);