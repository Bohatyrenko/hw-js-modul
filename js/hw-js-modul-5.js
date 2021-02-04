/** 1/19 */
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);

// child.name = "Jason";
// child.age = 27;

/** 2/19 */
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

/** 3/19 */
// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// new Car("Audi", "Q3", 36000);
// new Car("BMW", "X5", 58900);
// new Car("Nissan", "Murano", 31700);

/** 4/19 */
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// new Car("Audi", "Q3", 36000);
// new Car("BMW", "X5", 58900);
// new Car("Nissan", "Murano", 31700);

/** 5/19 */
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

/** 6/19 */
// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//   return this.items.splice(this.items.indexOf(item), 1);
// };
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

/** 7/19 */
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };
// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.value = str + this.value + str;
// };

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

/** 8/19 */
// class Car { };

/** 9/19 */
// class Car {
//   brand;
//   model;
//   price;

//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

/** 10/19 */
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

/** 11/19 */
