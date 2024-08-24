const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Router = require('./route/router');

// MongoDB connection URI
const uri = "mongodb+srv://charanchowdarynunnam:KzULXYPA8UqWl4R4@seequenze.ngp9l.mongodb.net/seequenze?retryWrites=true&w=majority";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { 
  // Options have been removed since they are deprecated in Mongoose 4.0.0+
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
