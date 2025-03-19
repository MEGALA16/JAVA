const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:3009/libraryDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

// Create a schema and model for books
const bookSchema = new mongoose.Schema({
    title: String,
    author: String
});
const Book = mongoose.model("Book", bookSchema);

// API Endpoints
app.get("/books", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.post("/books", async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
});

app.delete("/books/:id", async (req, res) => {
    const result = await Book.findByIdAndDelete(req.params.id);
    res.json(result);
});

// Start the server
const PORT = 3009;
app.listen(PORT, () => {
    console.log('Server running on http://localhost:3009');
});
