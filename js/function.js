function checkForSpam(str) { 
  let arrStr = str.split(' ');



// Вызовы функции для проверки console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false
console.log( checkForSpam('Get best sale offers now!') ); // true
console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true
