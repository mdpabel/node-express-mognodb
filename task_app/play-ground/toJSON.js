const obj = {
  name: "MD",
  age: 22,
};

obj.toJSON = function () {
  console.log(this);
  delete obj.age;
  return this;
};

console.log(JSON.stringify(obj));
