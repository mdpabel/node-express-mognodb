const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const databaseURL = "mongodb://localhost:27017/";
const databaseName = "task-manager";

MongoClient.connect(
  databaseURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect with database!");
    }
    const db = client.db(databaseName);

    db.createCollection("users", (err, res) => {
      if (err) {
        return console.log("Unable to create collection!");
      }
    });

    // Delete ONE
    db.collection("users")
      .deleteOne({ name: "TEST" })
      .then((res) => console.log(res.deletedCount))
      .catch((err) => console.log(err));

    // Delete MANY

    db.collection("users")
      .deleteMany({ address: /^O/ })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
);
