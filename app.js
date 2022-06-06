const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// My Routes
const allRoutes = require("./routes/userRoutes");

// COMMENt
// ANKUSH

// PORT
const port = 8000;

// MIDDLEWARE
app.use(bodyParser.json());

// SERVER START
app.listen(port, () => {
  console.log(`App is Running on port ${port}`);
});
