require('dotenv').config();


const bookRoutes = require('./routes/books');
const express = require('express');



const app = express();
app.use(express.json());
app.use('/api/books', bookRoutes);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  



