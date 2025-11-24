  
  const convertToCelsius = function (x) {
  let farToCel = (x - 32) / (9 / 5);
  // return farToCel.toFixed(1);   //<<<original version
  return (Math.round(farToCel * 10) / 10);
};

const convertToFahrenheit = function (y) {
  let celToFar = y * (9 / 5) + 32;
  // return celToFar.toFixed(1);  //<<< original version
  return(Math.round(celToFar*10)/10);
};


// console.log(convertToCelsius(32)); 
// console.log(convertToFahrenheit(20)); 




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};