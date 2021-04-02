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

// let totalSpent = 1500;
// let payment = 500;
// let discount = 0;

// if(totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Вы являетесь бронзовым партнером, скидка 2%');
//   discount = 0.02;
// }
// else if(totalSpent >= 1000 && totalSpent < 5000) {
//   console.log('Вы являетесь серебряным партнером, скидка 5%');
//   discount = 0.05;
// }
// else if (totalSpent >= 5000){
//   console.log('Вы являетесь золотым партнером, скидка 10%');
//   discount = 0.1;
// }
// else {
//   console.log('К сожалению у Вас еще нет партнерской скидки');
// }

// payment -= payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} кредитов со скидкой ${discount * 100}%`);
// totalSpent += payment;

// console.log(`Общая сумма потраченая в магазине составляет ${totalSpent} кредитов`);

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

// const nav = document.querySelector(".js-nav");
// console.log(nav);

// nav.addEventListener("click", handleNavClick);

// function handleNavClick(event) {
//   event.preventDefault();

//   const target = event.target;
//   console.log("event target: ", target); // посмотрите что тут

//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName !== "A") return;

//   setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = nav.querySelector("a.active");

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove("active");
//   }

//   nextActiveLink.classList.add("active");
// }

// function makeTask({ priority: "Низкий", text: "Выбрать шампунь" }) {
//   const completed = false;
//   const category = "Общее";
//   const priority = "Обычный";
//   // Пиши код ниже этой строки
//   const newObject = { category, priority, completed, ...data };
//   return newObject;
//   // Пиши код выше этой строки
// }

// console.log(makeTask({ priority: "Низкий", text: "Выбрать шампунь" }));

const atTheOldToad = {
  potions: [
    { name: "Зелье скорости", price: 460 },
    { name: "Дыхание дракона", price: 780 },
    { name: "Каменная кожа", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1)
      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1);
      }
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (oldName === this.potions[i].name) {
        this.potions[i].name = newName;
      }
    }
  },
};
/** Решешие задачи было без нижних значений */
// atTheOldToad.getPotions();
// atTheOldToad.addPotion({ name: "Невидимка", price: 620 });
// atTheOldToad.addPotion({ name: "Зелье силы", price: 270 });
// atTheOldToad.removePotion("Дыхание дракона");
// atTheOldToad.removePotion("Зелье скорости");
// atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф");
// atTheOldToad.updatePotionName("Каменная кожа", "Зелье неуязвимости");
// console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Невидимка", price: 620 }));
console.log(atTheOldToad.removePotion("Дыхание дракона"));
console.log(atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф"));

// const bestFriends = {
//   allFriend: [
//     { name: "Alex", age: 18 },
//     { name: "Smit", age: 19 },
//     { name: "Serg", age: 36 },
//     { name: "Tom", age: 23 },
//     { name: "Vasil", age: 68 },
//   ],

//   addFriend(friend) {
//     if (this.allFriend.name === friend.name) {
//       return `Зелье ${friend.name} уже есть в инвентаре!`;
//     }
//     this.allFriend.push(friend);
//     return bestFriends.allFriend;
//   },
// };

// console.log(bestFriends.addFriend({ name: "Alex", age: 199 }));
