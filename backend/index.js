const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Router = require('./route/router');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://charanchowdarynunnam:KzULXYPA8UqWl4R4@seequenze.ngp9l.mongodb.net/?retryWrites=true&w=majority&appName=Seequenze";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Router = require('./route/router');

// MongoDB connection URI
const uri = "mongodb+srv://charanchowdarynunnam:KzULXYPA8UqWl4R4@seequenze.ngp9l.mongodb.net/seequenze?retryWrites=true&w=majority";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1, 
  strict: true, 
  deprecationErrors: true 
})
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', Router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', Router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
