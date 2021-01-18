require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("5fff250237f10e134897b75b", { age: 23 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 23 });
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(res);
  });
