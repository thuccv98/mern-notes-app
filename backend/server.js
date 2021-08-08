const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');

const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const path = require('path');

const app = express();

//config env
dotenv.config();

// connect db
connectDB();
app.use(express.json());

// use routes
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);

// ------------Deployment-------------

__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running..');
  });
}

// ------------Deployment-------------

//middleware handle error
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
