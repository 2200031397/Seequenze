const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Router = require('./route/router');

const dburl = 'mongodb+srv://charanchowdarynunnam:KzULXYPA8UqWl4R4@seequenze.ngp9l.mongodb.net/?retryWrites=true&w=majority&appName=Seequenze';

// Connect to MongoDB
mongoose.connect(dburl, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to DB Successfully!'))
.catch((err) => console.log('DB Connection Error:', err.message));

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', Router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
