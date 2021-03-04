type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type NumberOrString = number | string;

// creating an array of string
const days : string[] = [];
const weekdays : Array<Weekday> = [];
const numbers : NumberOrString[] = [];

days.push( 'Sun' );
days.push( 'Mon' );
days.push( 1 );
days.push( true );
days.push( { x: 1 } );

weekdays.push( 'Mon' );
weekdays.push( 'Tue' );
weekdays.push( 'Sat' );
weekdays.push( 'Sun' );

numbers.push( 1 );
numbers.push( 'Two' );
numbers.push( 3 );
numbers.push( 'Four' );