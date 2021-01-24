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
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday, 
       today, 
       tomorrow, 
       icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'highTemperatures.yesterday} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;