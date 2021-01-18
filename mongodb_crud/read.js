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

    // find One
    db.collection("users")
      .findOne({ age: 23 })
      .then((res) => {
        console.log("FIND ONE", res);
      })
      .catch((err) => {
        console.log(err);
      });

    // FIND ALL
    db.collection("users")
      .find({}) // return cursor
      .toArray() // covert cursor to array
      .then((res) => console.log("FIND ALL", res))
      .catch((err) => console.log(err));

    // Find Some
    db.collection("users")
      .find({ name: "Peter" })
      .toArray()
      .then((res) => console.log("FIND SOME", res))
      .catch((err) => console.log(err));
  }
);
