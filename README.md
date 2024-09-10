# **Node.js + Express CRUD Application**  
This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, and MongoDB. The application allows users to create, view, update, and delete product information in a MongoDB database.

## Table of Contents
* About 
* Features
* Installation
* Usage
* Endpoints
* Screenshots
* License
* About
This project demonstrates a basic implementation of a RESTful API using Node.js, Express, and MongoDB. The API manages a collection of products, each containing information like name, quantity, price, and an image URL.

## The CRUD operations include:

* Creating a new product
* Reading (retrieving) product information
* Updating product information
* Deleting a product
* Features
* Create, Read, Update, and Delete (CRUD) operations for products.
* RESTful API architecture.
* MongoDB database integration using Mongoose.
* Input validation for products (e.g., required fields like name and price).
* Installation
* Prerequisites

## Ensure you have the following installed:

* Node.js (v12+)
* MongoDB (You can use MongoDB Atlas or local MongoDB instance)
* Clone the repository
* bash
* Copy code
* git clone https://github.com/kavindukaveesha/node_express_mongo_crud.git
* cd your-repo-name
* Install dependencies
* bash
* Copy code
* npm install
* Set up environment variables
* Create a .env file in the root directory and add the following variables:

* makefile
* Copy code
* MONGO_URI = <Your MongoDB Connection String>
* PORT = 3000
* Run the application
* bash
* Copy code
* npm start
* The application will run on http://localhost:3000.

## Usage
Once the server is running, you can interact with the API using tools like Postman or curl. The available API routes allow you to create, read, update, and delete product records.

## Endpoints
* Method Endpoint Description
* GET /api/products Get a list of all products
* GET /api/products/:id Get details of a specific product
* POST /api/products Create a new product
* PUT /api/products/:id Update details of a specific product
* DELETE /api/products/:id Delete a specific product
* Example Requests
* Create a New Product (POST /api/products)
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
* Delete a Product (DELETE /api/products/:id)
Simply send a DELETE request to /api/products/:id.

## Postman Test Endpoint Screenshots

1. Get All Products
![get all products](https://github.com/kavindukaveesha/node_express_mongo_crud/blob/main/ScreenShots/get_all_products.png)

2. Add New Product
![add_new_product](https://github.com/kavindukaveesha/node_express_mongo_crud/blob/main/ScreenShots/add_new_product.png)

3. Get product by id
![get_product_by_id](https://github.com/kavindukaveesha/node_express_mongo_crud/blob/main/ScreenShots/get_product_by_id.png)

4. Update Product
![update_product](https://github.com/kavindukaveesha/node_express_mongo_crud/blob/main/ScreenShots/update_product.png)

5. Delete Product
![delete_product](https://github.com/kavindukaveesha/node_express_mongo_crud/blob/main/ScreenShots/delete_product.png)


* This project provides a simple yet effective demonstration of how to build a RESTful CRUD API using Node.js, Express, and MongoDB. By following the instructions in this guide, you can easily set up and run the application, as well as extend it to suit your specific use cases. Whether you're just getting started with backend development or looking for a reference implementation, this project offers a solid foundation for managing product data. As always, feel free to enhance the application with additional features such as user authentication, product categories, or advanced search capabilities to further strengthen your skills and meet real-world requirements.





