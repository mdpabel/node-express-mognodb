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

    db.collection("users")
      .insertOne({
        name: "MD Pabel",
        age: 23,
      })
      .then((res) => {
        console.log(res.ops);
      })
      .catch((err) => {
        console.log(err);
      });

    const listOfUsers = [
      { name: "John", address: "Highway 71" },
      { name: "Peter", address: "Lowstreet 4" },
      { name: "Amy", address: "Apple st 652" },
      { name: "Hannah", address: "Mountain 21" },
      { name: "Michael", address: "Valley 345" },
      { name: "Sandy", address: "Ocean blvd 2" },
      { name: "Betty", address: "Green Grass 1" },
      { name: "Richard", address: "Sky st 331" },
      { name: "Susan", address: "One way 98" },
      { name: "Vicky", address: "Yellow Garden 2" },
      { name: "Ben", address: "Park Lane 38" },
      { name: "William", address: "Central st 954" },
      { name: "Chuck", address: "Main Road 989" },
      { name: "Viola", address: "Sideway 1633" },
    ];

    db.collection("users")
      .insertMany(listOfUsers)
      .then((res) => console.log(res.ops))
      .catch((err) => console.log(err));
  }
);
