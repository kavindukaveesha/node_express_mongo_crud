const express = require("express");
const mongoose = require("mongoose");
const product = require("./Models/Products.models.js");
const app = express();
app.use(express.json);
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/api/products", async (req, res) => {
  try {
    const product = await product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//conect db connection
mongoose
  .connect(
    "mongodb+srv://kavindukaveesha16:oknpJP0gTNMsoS1J@cluster0.rvsdf.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to databse");
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch(() => {
    console.log("Not Connected");
  });
