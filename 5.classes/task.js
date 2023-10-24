// Задача 1. Печатное издание
class PrintEditionItem {
  
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
      if (this.state > 100) {
        this.state = 100;
      }   
    } 
  
    set state (stateOfBook) {
      this._state = stateOfBook;
      if (stateOfBook > 100) {
        this._state = 100;
      } else if (stateOfBook < 0) {
        this._state = 0;
      }
    }
  
    get state () {
      return this._state;
    }
  }
     
  class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);   
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount); 
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount); 
    this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
      constructor (author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount); 
      this.type = "fantastic";
      }
  }
  
  class DetectiveBook extends Book {
        constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount); 
        this.type = "detective";
        }
  }
  
  //Задача 2. Библиотека
  class Library {
    constructor (name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy (type, value) {
      let result = this.books.find((item) => item[type] === value);
      return result ? result : null;
    } 
  
    giveBookByName(bookName) {
      let result = this.books.findIndex((item) => item.name === bookName);
      if (result === -1) {
        return null;
      } else {
        let book = this.books[result];
        this.books.splice(result, 1);
        return book;
      }
      }
    }