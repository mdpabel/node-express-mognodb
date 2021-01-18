require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndRemove("5fff2978fe1d7c4348af345d")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ isCompleted: false });
  })
  .then((count) => {
    console.log(count);
  })
  .catch((err) => {
    console.log(err);
  });
