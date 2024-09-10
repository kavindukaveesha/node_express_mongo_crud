Node.js + Express CRUD Application
This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, and MongoDB. The application allows users to create, view, update, and delete product information in a MongoDB database.

Table of Contents
About
Features
Installation
Usage
Endpoints
Screenshots
License
About
This project demonstrates a basic implementation of a RESTful API using Node.js, Express, and MongoDB. The API manages a collection of products, each containing information like name, quantity, price, and an image URL.

The CRUD operations include:

Creating a new product
Reading (retrieving) product information
Updating product information
Deleting a product
Features
Create, Read, Update, and Delete (CRUD) operations for products.
RESTful API architecture.
MongoDB database integration using Mongoose.
Input validation for products (e.g., required fields like name and price).
Installation
Prerequisites
Ensure you have the following installed:

Node.js (v12+)
MongoDB (You can use MongoDB Atlas or local MongoDB instance)
Clone the repository
bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies
bash
Copy code
npm install
Set up environment variables
Create a .env file in the root directory and add the following variables:

makefile
Copy code
MONGO_URI = <Your MongoDB Connection String>
PORT = 3000
Run the application
bash
Copy code
npm start
The application will run on http://localhost:3000.

Usage
Once the server is running, you can interact with the API using tools like Postman or curl. The available API routes allow you to create, read, update, and delete product records.

Endpoints
Method Endpoint Description
GET /api/products Get a list of all products
GET /api/products/:id Get details of a specific product
POST /api/products Create a new product
PUT /api/products/:id Update details of a specific product
DELETE /api/products/:id Delete a specific product
Example Requests
Create a New Product (POST /api/products)
json
Copy code
{
"name": "Sample Product",
"quantity": 100,
"price": 29.99,
"image": "http://example.com/image.png"
}
Update an Existing Product (PUT /api/products/:id)
json
Copy code
{
"name": "Updated Product",
"quantity": 50,
"price": 24.99
}
Delete a Product (DELETE /api/products/:id)
Simply send a DELETE request to /api/products/:id.

Screenshots

1. List of Products

2. Create Product Form

3. Product Details

To add screenshots:

Take screenshots of different functionalities (listing products, creating, updating, and deleting).
Upload these images to your GitHub repository's images folder or use an external service like Imgur.
Update the image URLs in the README.md file under the Screenshots section.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Additional Notes
Replace your-username/your-repo-name with your actual GitHub repository link.
Make sure your MongoDB URI in the .env file is securely stored, and consider using .gitignore to exclude the .env file from being committed to your repository.
Sample MongoDB Model
Here is the MongoDB model for the product:

javascript
Copy code
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
{
name: {
type: String,
required: [true, "Please enter product name"],
},

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },

},
{
timestamps: true,
}
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
Sample Express Server Code
Here's the server.js for the API:

javascript
Copy code
const express = require("express");
const mongoose = require("mongoose");
const product = require("./Models/Products.models.js");
const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/api/products", async (req, res) => {
try {
const productData = await product.create(req.body);
res.status(200).json(productData);
} catch (error) {
res.status(500).json({ message: error.message });
}
});

// Connect to MongoDB
mongoose
.connect(
"mongodb+srv://username:password@cluster0.mongodb.net/Node-Api?retryWrites=true&w=majority"
)
.then(() => {
console.log("Connected to the database");
app.listen(port, () =>
console.log(`Server running on http://localhost:${port}`)
);
})
.catch((error) => {
console.log("Database connection failed:", error.message);
});
Now you can place this content in your README.md file to provide comprehensive documentation for your project. Let me know if you need further customizations or additional sections.
