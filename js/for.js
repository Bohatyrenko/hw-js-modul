// Цикл - конструкция, которая позволяет повторять один и тот же кусочек кода

// Цикол for 

// for (инициализация; условие; пост - выражение) {
// ... тело цикла
// } 

// i - итерация (обьявляется один раз за цикл) начальное значение
// i < 5; условие прекращение цикла (i=false - цикл прекращается)
// i += 1 (i = i + 1) 

// for (let i = 1; i < 50; i += 1) {
//   console.log(i)
// } 

// console.log('Finish')

// for (let i = 50; i > 0; i -= 5) {
//   console.log(i)
// } 

// console.log('Finish')


  
// Pre-increment и post-increment ++ --

// Напиши скрипт который подсчитывает общую сумму зарплат работников.
// Количество работников хранится в переменной employees.
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль.

// Алгоритм 

// 1. создать переменные totalSalary, employees, staffSalary
// 2. выщитать зарплату одного сотрудника
// 3. выщитать сумму зарплат сотрудников
// 4. вывести на лог.
// 
// 

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(`ЗП работника номер ${i} - ${salary}`);
//   totalSalary += salary;
// } 

// console.log(`ЗП всех работников - ${totalSalary}`);


// Напиши скрипт который подсчитывает сумму всех чётных чисел
// которые входят в диапазон чисел в переменных от min до max.
// Например, если min = 0 и max = 5 то диапазон 0-5, и в нём два чётных числа - 2 и 4 их сумма 6

const min = 0;
const max = 5;
let total = 0;

// for (let i = min; i <= max; i += 1) {

//   if(i % 2 === 0){
//     total += i;
//   }
// }

// console.log(total);


// Еще один вариант "От обратного"

for (let i = min; i <= max; i += 1) {
  if(i % 2 !== 0){
    continue;
  }
  console.log(i);
  total += i;
}

console.log(total);