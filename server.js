const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();


// Middleware
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Require Routes
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', ()=>{
  console.log('Connected to Mongoose');
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});