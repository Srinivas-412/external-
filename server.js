const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use("/api/students", studentRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/studentdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
