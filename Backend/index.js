const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://mobile-shop:dcX75DlBaEfge0rB@bodim01.emepe.mongodb.net/?retryWrites=true&w=majority&appName=bodim01";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
    const phoneCollection = client.db("PhoneInventory").collection("phones");

    //insert a phone to the database:post methode
    app.post("/upload-phone", async (req, res) => {
      const data = req.body;
      const result = await phoneCollection.insertOne(data);
      res.send(result);
    });

    //get all phones from data base
    app.get("/all-phones", async (req, res) => {
      const phones = phoneCollection.find();
      const result = await phones.toArray();
      res.send(result);
    });

    //update a phone:patch or update method
    app.patch("/phone/:id", async (req, res) => {
      const id = req.params.id;
      const updatePhoneData = req.body;
      const filter = { _id: new ObjectId(id) };

      const updateDoc = {
        $set: {
          ...updatePhoneData,
        },
      };
      const options = { upsert: true };
      //update
      const result = await phoneCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    //delete a data
    app.delete("/phone/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await phoneCollection.deleteOne(filter);
      res.send(result);
    });

    //find by brand
    app.get("/all-phones", async (req, res) => {
      let query = {};
      if (req.query?.brand) {
        query = { brand: req.query.brand };
      }
      const result = await phoneCollection.find(query).toArray();
      res.send(result);
    });

    //to get single phone data
    app.get("/phone/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await phoneCollection.findOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
