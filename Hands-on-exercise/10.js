function message(hours){
    if(5<=hours && hours<12){
        console.log("Good morning");
    }else if(12<=hours && hours<16){
        console.log("Good afternoon")
    }
    else if(16<=hours && hours<20){
        console.log("Good evening");
    }else{
        console.log("Good night");
    }
}

var hours = (new Date()).getHours();
console.log(hours);
message(hours);