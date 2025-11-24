const add = function( a , b ) {
	return a + b;
};
// console.log('ADD FUNTION');
// console.log(add(1,2));

const subtract = function( c , d ) {
	return c - d ;
};
// console.log('SUBTRACT FUNCTION');
// console.log(subtract(5,3));


const sum = function(sumNumbers) {
let sumtTally = 0 ;
for ( let i = 0 ; i < sumNumbers.length ; i++){
  sumtTally = sumtTally + sumNumbers[i];
}
return sumtTally ;
};
//console.log('sum function');
//console.log(sum([1,2,3]))


const multiply = function(numbers) {
let tally = 1 ;
for (let i = 0 ; i < numbers.length ; i++){
  tally = tally*numbers[i];
}
return tally ;
};

// console.log('Multiply Function')
// console.log(multiply(2, 4, 6, 8, 10, 12, 14))

const power = function(x , y) {
let powerOf = 1
for (let i = 0 ; i < y ; i++){
  powerOf = powerOf*x;
}	
return powerOf;
};
// console.log(power(2,4))

const factorial = function(n) {
if (n === 0 || n === 1){return 1;}
let result = 1;
for(let i = 2  ; i <= n ; i++) {
result *= i ;
} 
return result ;
};
console.log(factorial(5));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
