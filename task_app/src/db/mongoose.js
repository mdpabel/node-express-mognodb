const mongoose = require("mongoose");

const databaseURL = "mongodb://localhost:27017/task-app-api";

mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
