// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету...`);

// if(payment <= balance) {
//   console.log('Ok, сейчас проведем операцию');
//   balance -= payment;
//   console.log(`На счету осталось ${balance} кредитов.`)
// } else {
//     console.log('На счету недостаточно средств для проведения операции!')
// }
// console.log('Операция завершена');

let totalSpent = 1500;
let payment = 500;
let discount = 0; 

if(totalSpent >= 100 && totalSpent < 1000) {
  console.log('Вы являетесь бронзовым партнером, скидка 2%');
  discount = 0.02;
} 
else if(totalSpent >= 1000 && totalSpent < 5000) {
  console.log('Вы являетесь серебряным партнером, скидка 5%');
  discount = 0.05;
} 
else if (totalSpent >= 5000){
  console.log('Вы являетесь золотым партнером, скидка 10%');
  discount = 0.1;
} 
else {
  console.log('К сожалению у Вас еще нет партнерской скидки');
} 

payment -= payment * discount;

console.log(`Оформляем заказ на сумму ${payment} кредитов со скидкой ${discount * 100}%`);
totalSpent += payment;

console.log(`Общая сумма потраченая в магазине составляет ${totalSpent} кредитов`);




// (totalSpent < 100) {
//   console.log('К сожалению у Вас еще нет партнерской скидки')
//   console.log(`Оформляем заказ на сумму ${payment} кредитов`);
// } else 

//   payment -  = discount
//   console.log(`Оформляем заказ на сумму ${payment} кредитов со скидкой ${discount1}%`);
// } else if(totalSpent => 1000 && totalSpent < 5000) {
//     payment -= discount2;
//     console.log(`Оформляем заказ на сумму ${payment} кредитов со скидкой ${discount2}%`);
// } else if(totalSpent => 5000) {
//     payment -= discount3
//     console.log(`Оформляем заказ на сумму ${payment} кредитов со скидкой ${discount3}%`);
// } else {
//     con
// }
