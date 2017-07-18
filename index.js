if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;
const DB = require('./config')[process.env.NODE_ENV].DB;

mongoose.connect(DB, (err) => {
    if (err) console.log(`Could not connect to ${DB}`);
    else console.log(`Connected to ${DB}`);
});

app.use(cors());

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

module.exports = app;