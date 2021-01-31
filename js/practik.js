const a = function (name) {
  console.log(name);
};

const b = function (newName) {
  const c = "Jon";
  newName(c);
};

b(a);
