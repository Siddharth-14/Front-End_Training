const movie = {
    name:"Life of Pie",
    cast:[
        "John",
        "Jane",
    ],
    yearOfRelease:2007,
    boxOfficeCollection:1000000,
    addToCast:function(newMember){
        this.cast[this.cast.length] = newMember;
    },
    addToCollection:function( amount){
        this.boxOfficeCollection+=amount;
    }
};