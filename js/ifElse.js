// Напиши скрипт выбора стоимости отеля по количеству звезд.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$

const stars = 6;
let price;

if (stars === 1) {
  price = 20;
} else if (stars === 2) {
  price = 30;
} else if (stars === 3) {
  price = 50;
} else if (stars === 4) {
  price = 70;
} else if (stars === 5) {
  price = 120;
} else {
  console.log('Такого количества звезд нет')
};

console.log(price);

// Напиши скрипт выбора стоимости отеля по количеству звезд.
// 1,2 - 20$, 3,4 - 30$, 5 - 120$
const stars = 6;
let price;

if (stars === 1 || stars === 2) {
  price = 20;
} else if (stars === 3 || stars === 4) {
  price = 30;
} else if (stars === 5) {
  price = 120;
} else {
  console.log('Такого количества звезд нет')
}; 

console.log(price);