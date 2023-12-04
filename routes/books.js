const express = require('express');
const router = express.Router();
const Book = require('../models/book');


// GET endpoint- for Retrieve all books
router.get('/', async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // POST endpoint - for Adding a new book
router.post('/', async (req, res) => {

    console.log("**DEBUG", req.body);


    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      country: req.body.country,
      imageLink:req.body.imageLink,
      language:req.body.language,
      link: req.body.link,
      pages: req.body.pages,
      year: req.body.year
    });
  
    try {
      const newBook = await book.save();
      console.log(newBook)
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

  // PUT endpoint- for Updating a book
router.put('/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
  
      //here i have updating the modified data
      if (req.body.title) book.title = req.body.title;
      if (req.body.author) book.author = req.body.author;
      if (req.body.country) book.country= req.body.country;
      if (req.body.imageLink) book.imageLink = req.body.imageLink;
      if (req.body.language) book.language = req.body.language;
      if (req.body.link) book.link = req.body.link;
      if (req.body.pages) book.pages = req.body.pages;
      if (req.body.year) book.year= req.body.year;

      
  
      const updatedBook = await book.save();
      res.json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

module.exports = router;


