
/** 2/32 */
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//  if (password === ADMIN_PASSWORD) {
//   return 'Добро пожаловать!';
//   }
//   return 'Доступ запрещен, неверный пароль!';
// }
// checkPassword('mangohackzor');
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');



/** 3/32 */ 
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   } 
//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   } 
//   return 'Заказ оформлен, с вами свяжется менеджер';
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);


/** 4/32 */
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];


/** 5/32 */
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];


/** 6/32 */
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// fruits[1] = 'персик';
// fruits[3] = 'банан';


/** 7/32 */
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// const fruitsArrayLength = fruits.length;



/** 8/32 */
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


/** 9/32 */
// function getExtremeElements(array) {
// return [array[0], array[array.length - 1]];
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Земля', 'Марс', 'Венера']);
// getExtremeElements(['яблоко', 'персик', 'груша', 'банан']);


/** 10/32 */
// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);  
//   return words;
// }
// splitMessage('Манго спешит на поезд', ' ');
// splitMessage('Манго', '');
// splitMessage('лучшее_за_неделю', '_');


// /** 11/32 */
// function calculateEngravingPrice(message, pricePerWord) {

// let word = message.split(' ');
// console.log(word);
// let total = word.length * pricePerWord;
// console.log(total);
// return total;

// }

// calculateEngravingPrice('JavaScript у меня в крови', 10);
// calculateEngravingPrice('JavaScript у меня в крови', 20);
// calculateEngravingPrice('Веб-разработка это творческая работа', 40);
// calculateEngravingPrice('Веб-разработка это творческая работа', 20);


/** 12/32 */
// function makeStringFromArray(array, delimeter) {
//   let string;

//  string = array.join(delimeter);
//  console.log(string);

//   return string;
// }

// makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ');
// makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '');
// makeStringFromArray(['лучшее', 'за', 'неделю'], '_');

/** 13/32 */
// function slugify(title) {
//   let string = title.toLowerCase();
//   let newString = string.split(' ');
//   let slug = newString.join('-');

//   return slug;
// }

// slugify('Массивы для новичков');
// slugify('Английский для разработчика');
// slugify('Десять секретов JavaScript');
// slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ');


/** 14/32 */
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];

// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,-1);
// const lastThreeEls = fruits.slice(-3);


// /** 15/32 */
// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients);


/** 16/32 */
// function makeArray(firstArray, secondArray, maxLength) {

// let newArray = firstArray.concat(secondArray);
// return newArray.slice(0, maxLength);

// }

// makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3);
// makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4);
// makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3);
// makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2);
// makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4);
// makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0);


/** 17/32 */
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Дополни эту строку
//   console.log(i);
// }


/** 18/32 */
// function calculateTotal(number) {

//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//       total += i; 
//   }
  
//   return total;

// }

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);


/** 19/32 */
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

/** 20/32 */
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//     for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//     }
//     console.log(total);
//   // Пиши код выше этой строки
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

/** 21/32 */
// function findLongestWord(string) {

//   let word = string.split(' ');
//   let longestWord = 0;
//   let bigWord;

//   for (let i = 0; i < word.length; i += 1) {
//     longestWord = word[1].length;

//       if (word[i].length > longestWord) {
//         bigWord = word[i];

//         return bigWord;
//       }
//   }  

// }

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');


/** 22/32 */
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1)
//   numbers.push(i);

//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);


/** 23/32 */
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let newArr = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArr.push(numbers[i]);
//     }
//   }
//   console.log(newArr);
//   return newArr;
//   // Пиши код выше этой строки
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


/** 24/32 */
// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
// }

// checkFruit('слива');
// checkFruit('мандарин');
// checkFruit('груша');
// checkFruit('Груша');
// checkFruit('яблоко');


/** 25/32 */
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let newArr = [];
  
//     for (let number of array1) 
//         if (array2.includes(number)) {
//           newArr.push(number);
//         }

//     console.log(newArr);
//   return newArr;
  
//   // Пиши код выше этой строки
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);


/** 26/32 */
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let element of order) {
//     total += element;
//   }

//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

/** 27/32 */
// function filterArray(numbers, value) {

//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);


/** 28/32 */
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;


/** 29/32 */
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   const numbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
  
//   return numbers;
//   // Пиши код выше этой строки
// }

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);


/** 30/32 */
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }


/** 31/32 */
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
      
//     }
//   }

//   // Пиши код выше этой строки
// }

// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);


/** 32/32 */
function includes(array, value) {
  // Пиши код ниже этой строки
  for (let i = 0; i <array.length; i += 1) {
    if (array[i] === value) {
    return true;
    }
  }
   return false;
    // Пиши код выше этой строки
}
