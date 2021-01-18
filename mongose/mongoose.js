const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/task-app-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    trim: true,
    minlength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can't contains password");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
});

const User = mongoose.model("User", userSchema);

const joe = new User({
  name: "      Joe        ",
  age: 22,
  email: "     test@test.com",
  password: "         joe32d4&",
});

// joe
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const taskSchema = new Schema({
  description: {
    type: String,
    trim: true,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

const task_1 = new Task({
  description: "Lorem text",
});

// task_1
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
