const mongoose = require('mongoose');
//here i have define schema , by referencing the book library of 100books , link-https://github.com/benoitvallon/100-best-books/blob/master/books.json 
const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    author: {
        type: String,
        required: true
      },
    country: {
        type: String
      },
    imageLink:{
        type: String
      },
    language:{
        type: String
      },
    link: {
        type: String
      },
    pages: {
        type: Number
      },
    year: {
        type: Number
      }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;


