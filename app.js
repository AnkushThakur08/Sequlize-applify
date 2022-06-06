const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// My Routes
const allRoutes = require("./routes/userRoutes");

// PORT
const port = 8080;

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

app.use("/api", allRoutes);

// SERVER START
app.listen(port, () => {
  console.log(`App is Running on port ${port}`);
});
