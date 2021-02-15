function sum( x, y, cb ) {
    setTimeout(function() {
        cb( x + y );
    }, 3000);
}

sum( 12, 13, function( result ) {
    console.log( 'result = ', result );
});

// EXERCISE: Use the same sum() function to add 14 once the previous result is obtained. Then use the same sum() function to add 15 to the new result once the new result is obtained.