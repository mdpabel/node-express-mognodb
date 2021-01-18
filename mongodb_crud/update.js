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

    // Update One
    db.collection("users")
      .updateOne({ name: "Peter" }, { $set: { name: "TEST" } })
      .then((res) => console.log(res.matchedCount))
      .catch((err) => console.log(err));

    // Update Many
    db.collection("users")
      .updateMany({ name: /^B/ }, { $set: { name: "UPDATED" } })
      .then((res) => console.log(res.matchedCount))
      .catch((err) => console.log(err));
  }
);
