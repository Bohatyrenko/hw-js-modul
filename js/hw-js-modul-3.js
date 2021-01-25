/** 1/41 */
// const apartment = {
// 	imgUrl: 'https://via.placeholder.com/640x480',
//   	descr: 'Просторная квартира в центре',
//   	rating: 4,
//   	price: 2153,
//   	tags: ['premium', 'promoted', 'top'],
// };

/** 2/41 */
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//   },
// };

/** 3/41 */
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

/** 4/41 */
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

/** 5/41 */
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

/** 6/41 */
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');

// console.log(apartment);

/** 7/41 */
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: 'Ямайка', city: 'Кингстон'};

/** 8/41 */
// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
//   name,
//   price,
//   image,
//   tags

//   // Пиши код выше этой строки
// };

/** 9/41 */
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {

//  	[emailInputName]: 'henry.carter@aptmail.com',
// 	[passwordInputName]: 'jqueryismyjam'

// };

/** 10/41 */
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

/** 11/41 */
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {

//  if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
//  }
// }

/** 12/41 */
// function countProps(object) {
//   let propCount = [];
//   // Пиши код ниже этой строки
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount.push(key);
//     }
//   }
//   propCount = propCount.length;
//   // Пиши код выше этой строки
//   return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

/** 13/41 */
// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(apartment[key]);
// }

/** 14/41 */
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   let keys = Object.keys(object);
//   for (let key of keys) {
//     propCount += 1;
//   }
//   return propCount;
//   // Пиши код выше этой строки
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

/** 15/41 */
// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

/** 16/41 */
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salary = Object.values(salaries);

//   for (const oneSalary of salary) {
//     totalSalary += oneSalary;
//   }
//   console.log(totalSalary);

//   return totalSalary;
// }

// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

/** 18/41 */
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

/** 19/41 */
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//   for (const product of products) {
//     if (productName === product.name) {
//       console.log(product.price);
//       return product.price;
//     }
//   }
//   return null;
// }

// getProductPrice("Радар");
// getProductPrice("Захват");
// getProductPrice("Сканер");
// getProductPrice("Дроид");
// getProductPrice("Двигатель");

/** 19/41 */
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let propArry = [];

//   for (let product of products) {
//     for (let key in product) {
//       if (propName === key) {
//         propArry.push(product[key]);
//       }
//     }
//   }
//   console.log(propArry);
//   return propArry;
// }

// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

/** 20/41 */
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//   let totalPrice = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice += product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }

// calculateTotalPrice("Бластер");
// calculateTotalPrice("Радар");
// calculateTotalPrice("Дроид");
// calculateTotalPrice("Захват");
// calculateTotalPrice("Сканер");

/** 21/41 */
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday, today, tomorrow } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

/** 22/41 */
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

/** 23/41 */
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

/** 24/41 */
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

/**Другое решение задачи */
// for (const color of colors) {
//   const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

/** Пример к заданию № 24*/
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

/** 25/41 */
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
//
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

/** 26/41 */
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   });
// calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   });

/** 27/41 */
// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

/** Пример с распылением ...(spread) */
// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

/** 28/41 */
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

/**Пример к задаче № 28 */
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

/** 29/41 */
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };

/** Пример к задаче № 29 */
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

/** 30/41 */
// function makeTask(data) {
//   const completed = false;
//   const category = "Общее";
//   const priority = "Обычный";

//   const newData = { completed, category, priority, ...data };
//   console.log(newData);
//   return newData;

// }

// makeTask({});
// makeTask({ category: "Домашнее", priority: "Низкий", text: "Вынести мусор" });
// makeTask({ category: "Финансы", text: "Забрать проценты" });
// makeTask({ priority: "Низкий", text: "Выбрать шампунь" });
// makeTask({ text: "Купить хлеб" });

/** 31/41 */
// Пиши код ниже этой строки
// function add(...args) {
//   let totalArgs = 0;
//   for (const arg of args) {
//     totalArgs += arg;
//   }
//   return totalArgs;

//   // Пиши код выше этой строки
// }

// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

/** Пример к задаче № 31*/
// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

/** 32/41 */
// Пиши код ниже этой строки
// function addOverNum(firstArg, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstArg) {
//       total += arg;
//     }
//   }
//   return total;
//   // Пиши код выше этой строки
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

/** Пример к задаче № 32*/
// Операция ... (rest) также позволяет собрать в массив только ту часть аргументов, которая необходима, объявив параметры до «сбора».
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

/** 33/41 */
// function findMatches(firstArry, ...args) {
//   const matches = []; // Не изменяй эту строку
//   for (const number of args) {
//     if (firstArry.includes(number)) {
//       matches.push(number);
//     }
//   }
//   console.log(matches);

//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

/** 34/41 */
// const bookShelf = {
//   books: ["Последнее королевство", "Страж снов"],
//   getBooks() {
//     return "Возвращаем все книги";
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },

// };

// bookShelf.getBooks();
// bookShelf.addBook("Мгла");
// bookShelf.removeBook("Красный закат");
// bookShelf.updateBook("Пески Дюны", "Дюна");

/** Пример к задаче № 34*/
// // ✅ Логиески и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ["Последнее королевство", "Страж снов"],
//   addBook(bookName) {
//     this.books.push(bookName);
//     console.log(bookShelf.books);
//   },
// };
// console.log(bookShelf.books);
// // Вызовы методов
// bookShelf.addBook("Мгла");

/** 35/41 */
// const bookShelf = {
//   books: ["Последнее королевство", "Мгла", "Страж снов"],
//   updateBook(oldName, newName) {
//     const findBook = this.books.indexOf(oldName);
//     this.books.splice(findBook, 1, newName);
//   },
// };

// /** Решешие задачи было без нижних значений */
// bookShelf.updateBook("Мгла", "Хроники подземелий");
// bookShelf.updateBook("Последнее королевство", "Дюна");

/** 36/41 */
// const atTheOldToad = {
//   potions: [],
// };

/** 37/41 */
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   getPotions() {
//     return this.potions;
//   },
// };

/** 38/41 */
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

/** 39/41 */
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potionName === potion) {
//         const deletePotion = this.potions.indexOf(potionName);
//         this.potions.splice(deletePotion, 1);
//         console.log(this.potions);
//       }
//     }
//   },
// };
/** Решешие задачи было без нижних значений */
// atTheOldToad.removePotion("Дыхание дракона");
// atTheOldToad.removePotion("Зелье скорости");

/** 40/41 */
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   updatePotionName(oldName, newName) {

//     const findpotion = this.potions.indexOf(oldName);
//     this.potions.splice(findpotion, 1, newName);
//   },
// };
/** Решешие задачи было без нижних значений */
// atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф");
// atTheOldToad.updatePotionName("Каменная кожа", "Невидимка");

/** 41/41 */
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
//atTheOldToad.getPotions();
//atTheOldToad.addPotion({ name: "Невидимка", price: 620 });
//atTheOldToad.addPotion({ name: "Зелье силы", price: 270 });
//atTheOldToad.removePotion("Дыхание дракона");
//atTheOldToad.removePotion("Зелье скорости");
//atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф");
//atTheOldToad.updatePotionName("Каменная кожа", "Зелье неуязвимости");
