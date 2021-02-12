/** 1/44 */
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   // Пиши код выше этой строки
//   return totalPrice;
// }

/** 2/44 */
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);

/** 3/44 */
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });
//   return commonElements;
// }
// getCommonElements([1, 2, 3], [2, 4]);

/** 4/44 */
// const calculateTotalPrice = (quantity, pricePerItem) =>{
//   return quantity * pricePerItem;
// }

/** 5/44 */
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

/** 6/44 */
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

/** 7/44 */
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };

/** 8/44 */
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Пиши код выше этой строки
//   return commonElements;
// };
/** 9/44 */
// function changeEven(numbers, value) {
//   const newArry = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArry.push(number + value);
//     } else {
//       newArry.push(number);
//     }
//   });
//   return newArry;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([44, 13, 81, 92, 36, 54], 100);

/** 10/44 */
// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// const planetsLengths = planets.map((planet) => planet.length);

/** 11/44 */
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// const titles = books.map((book) => book.title);

/** 12/44 */
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);

/** 13/44 */

// const getUserNames = (users) => users.map((user) => user.name);

/** 14/44 */
// const getUserEmails = (users) => users.map((user) => user.email);

/** 15/44 */
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

/** 16/44 */
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter((genres, index, allGenres) => allGenres.indexOf(genres) === index)

/** 17/44 */
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

/** 18/44 */
// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);

// /** 19/44 */
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];
// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter((user) => user.age > minAge && user.age < maxAge);
/** 20/44 */
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };
// console.log(getUsersWithFriend(users, "Goldie Gentry"));

/** 21/44 */
const c = (users) => {
  const b = users.flatMap((user) => user.friends);
  const a = (friend, index, users) => {
    users.indexOf(friend) === index;
  };
};
console.log(c(user));
/** 22/44 */
/** 23/44 */
/** 24/44 */
/** 25/44 */
/** 26/44 */
/** 27/44 */
/** 28/44 */
/** 29/44 */
/** 30/44 */
/** 31/44 */
/** 32/44 */
/** 33/44 */
/** 34/44 */
/** 35/44 */
/** 36/44 */
/** 37/44 */
/** 38/44 */
/** 39/44 */
/** 40/44 */
/** 41/44 */
/** 42/44 */
/** 43/44 */
/** 44/44 */
