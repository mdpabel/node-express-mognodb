const User = require("./models/user_model");

const main = async () => {
  //   const task = await Task.findById("6003dd5b0a7d431d10d3d2f7");
  //   await task.populate("owner").execPopulate();
  //   console.log(task.owner);
  const user = await User.findById("6003dd2f0a7d431d10d3d2f3");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};
main();
