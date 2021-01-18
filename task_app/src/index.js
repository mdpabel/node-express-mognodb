const express = require("express");

require("./db/mongoose.js");
const userRouter = require("./routes/user_routes");
const taskRouter = require("./routes/task_routes");
const multer = require("../play-ground/multer");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);
app.use(multer);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
