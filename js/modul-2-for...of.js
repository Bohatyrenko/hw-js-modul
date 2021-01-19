// // Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

const number = [32, 34, 23, 42, 654, 23, 124, 53];
let total = 0;

// for(let i = 0; i < number.length; i += 1) {
//   console.log(number[i]);
//   total += number[i];
// }  
//   console.log('Total: ', total);

for(const num of number){
  console.log(num);
  total += num;
}
console.log('Total: ', total);