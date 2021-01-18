const bcrypt = require("bcryptjs");

const hashPassword = async () => {
  const password = "123";
  const hashedPassword = await bcrypt.hash(password, 8);
  console.log(password);
  console.log(hashedPassword);
  const isMatched = await bcrypt.compare(password, hashedPassword);
  console.log(isMatched);
};
hashPassword();
