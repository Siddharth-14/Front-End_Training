// Primitive wrappers works even without "new" - they will create the object anyway
const greeting = 'Good morning'; // primitive
const greetingObj = new String( greeting ); // object

// startIndex, numChars
console.log( greetingObj.substr( 5, 6 ) ); // mornin

// EXERCISE: substring()

// using the primitive value - still works
// internally this creates a temporary String object
greeting.substr( 5, 6 );

// invoking without "new" operator - still works
const greetingObj2 = String( greeting );
console.log( greetingObj2.substr( 5, 6 ) ); // mornin

// EXERCISE: 
// indexOf()
// toLowerCase(), toUpperCase()
// replace()
// includes
// Q.26 in JS Lab Guide (ES5 and Earlier)