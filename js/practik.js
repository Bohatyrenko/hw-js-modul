function abbrevName(name) {
  let newName = name
    .split(" ")
    .map(function (item) {
      return item[0];
    })
    .join(".");
  console.log(newName);

  return newName.toUpperCase();
}

console.log(abbrevName("Jon Abram"));
