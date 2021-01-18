const jwt = require("jsonwebtoken");

function func() {
  const token = jwt.sign({ _id: "123" }, "hello_secrete", {
    expiresIn: "7 days",
  });
  console.log(token);

  const data = jwt.verify(token, "hello_secrete");
  console.log(data);
}
func();
