
# Library Database Endpoint API Documentation

## Introduction

This document provides detailed information about the Library Database Endpoint API. starting from installing to operations on api 

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas 

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Nikhil0075/Library_Restful_Api
   ```

2. Install NPM packages:
   ```sh
   npm install
   ```

3. Set up the environment variables in a `.env` file:
   ```
   DB_CONNECTION_STRING=your_mongodb_connection_string
   ```

### For Running the Application

1. Start the server:
   ```sh
   node server.js
   ```

2. The API will be available at `http://localhost:3000/`

## API Endpoints

### 1. Retrieve All Books

- **GET** `/api/books`
- Retrieves a list of all books in the library.
- **Response Format**: JSON array of books.
- **Example Response**:
  ```json
  [
    {
    "id": "id of the stored book",
    "title": "title name",
    "author": "author name",
    "country": "name of country",
    "imageLink": "book image link",
    "language": "writtened language name",
    "link": "link about info of book",
    "pages": "no  of page in Number format",
    "year": "year in Number format"
    },
    ...
    
  ]
  ```

### 2. Add a New Book

- **POST** `/api/books`
- Adds a new book to the library.
- **Request Format**: JSON object.
- **Example Request**:
  ```json
  {
    "title": "title name",
    "author": "author name",
    "country": "name of country",
    "imageLink": "book image link",
    "language": "writtened language name",
    "link": "link about info of book",
    "pages": "no  of page in Number format",
    "year": "year in Number format"
  }
  ```
- **Response Format**: JSON object of the added book.
- **Example Response**:
  ```json
  {
    "title": "title name",
    "author": "author name",
    "country": "name of country",
    "imageLink": "book image link",
    "language": "writtened language name",
    "link": "link about info of book",
    "pages": "no  of page in Number format",
    "year": "year in Number format",
    "id": "id of the added new book",
    "__v": 0
  }
  ```

### 3. Update Book Details

- **PUT** `/api/books/{id}`
- Updates the details of a specific book.
- **Request Format**: JSON object with updated book details.
- **Example Request**:
  ```json
  {
    "title": "title name",
    "author": "author name",
    "country": "name of country",
    "imageLink": "book image link",
    "language": "writtened language name",
    "link": "link about info of book",
    "pages": "no  of page in Number format",
    "year": "year in Number format"
  }
  ```
- **Response Format**: JSON object of the updated book.
- **Example Response**:
  ```json
  {
    "id": "id of the book , just edited",
   "title": " edited title name",
    "author": "edited author name",
    "country": "edited name of country",
    "imageLink": "edited book image link",
    "language": "edited writtened language name",
    "link": "edited link about info of book",
    "pages": "edited no  of page in Number format",
    "year": "edited year in Number format"
  }
  ```

## Seeding the Database

To seed the database with mock data:

1. Ensuring that your MongoDB instance is running.
2. Use the following script/command: 
```javascript
        const mongoose = require('mongoose');
        const Book = require('./models/book');
        const db = 'your_mongodb_connection_string';

        mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

        const books = [
         {
            "author": "Tayeb Salih",
            "country": "Sudan",
            "imageLink": "images/season-of-migration-to-the-north.jpg",
            "language": "Arabic",
            "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
            "pages": 139,
            "title": "Season of Migration to the North",
            "year": 1966
        },
            {
            "author": "Jos\u00e9 Saramago",
            "country": "Portugal",
            "imageLink": "images/blindness.jpg",
            "language": "Portuguese",
            "link": "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
            "pages": 352,
            "title": "Blindness",
            "year": 1995
        },
        // Add more book objects
        ];

        async function seedDB() {
        await Book.deleteMany({}); // This line deletes all existing books at initial stage
        await Book.insertMany(books);
        console.log("Database seeded!");
        }

        seedDB().then(() => {
        mongoose.connection.close();
        });

```
3.Then run the script using
```sh
node seed.js
```


