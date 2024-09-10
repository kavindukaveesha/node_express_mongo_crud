const express = require("express");
const mongoose = require("mongoose");
const Product = require("./Models/Products.models.js");
const productRoute = require("./Routes/product.route.js");
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://kavindukaveesha16:oknpJP0gTNMsoS1J@cluster0.rvsdf.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    });
  })
  .catch((error) => {
    // Log the error message for better debugging
    console.error("Database connection failed:", error.message);
  });
