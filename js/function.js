// function checkForSpam(str) {
//   let arrStr = str.split(' ');

// // Вызовы функции для проверки console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false
// console.log( checkForSpam('Get best sale offers now!') ); // true
// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padStart = function (str) {
//   return (this.value = str + this.value);
// };

// StringBuilder.prototype.padEnd = function (str) {
//   return (this.value = this.value + str);
// };

// StringBuilder.prototype.padBoth = function (str) {
//   return (this.value = str + this.value + str);
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

const logger = (time) => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// console.log("До вызова setInterval");
const intervalId = setInterval(logger, 2000, 5000);
// console.log("После вызова setInterval");
const shouldCancelInterval = Math.random() > 0.3;
console.log(shouldCancelInterval);
if (shouldCancelInterval) {
  clearInterval(intervalId);
}
