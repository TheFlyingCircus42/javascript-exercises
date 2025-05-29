const sumAll = function( a , b ) {
let start = 0
let end = 0
let newSum = 0;

//  ERROR FOR NEGATIVE NUMBERS  //
if ( a < 0) return "ERROR"; 
if ( b < 0) return "ERROR";

// ERROR FOR NON-INTEGER //
if (!Number.isInteger(a)) return "ERROR"; 
if (!Number.isInteger(b)) return "ERROR"; 

// ERROR FOR NON-NUMBER PARAMETERS //


if ( a < b ){
    start = a ; end = b ;
} else {
    start = b ; end = a ;
}

for (let i = start; i <= end; i++){
    newSum += i;  }
    return newSum
};


// Do not edit below this line
module.exports = sumAll;
