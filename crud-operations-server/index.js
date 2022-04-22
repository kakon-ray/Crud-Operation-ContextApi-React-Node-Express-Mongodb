const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const ObjectId = require("mongodb").ObjectId;

// username: crude_operation
// password: qusch3bPNxx19Vsv

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1zds3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("crudOperation").collection("item");

    // get data to database this api call to show data clint side
    app.get("/item", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const service = await cursor.toArray();
      res.send(service);
    });

    // POST mathod : add a new services
    app.post("/item", async (req, res) => {
      const addService = req.body;
      console.log("adding new user", addService);
      const result = await userCollection.insertOne(addService);
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.dir());

app.get("/", (req, res) => {
  res.send("Running Crud server");
});

// db users
app.listen(port, () => {
  console.log(`CROUD server is Running ${port}`);
});
