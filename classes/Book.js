// import the Media class:
const Media = require('./Media');

// create your Book class:
class Book extends Media {
    constructor(title,year,genre,author,numPages,rating) {
        super(title,year,genre);
        this.author=author;
        this.numPages = numPages;
        this.rating = rating;   
    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating(book){
        let maxRating = book[0].rating;
        let highestRatedBook = book[0]
        for (let i=0 ;i<book.length;i++){
            if (book[i].rating > maxRating ){
                maxRating = book[i].rating;
                highestRatedBook = book[i];
            }
        }
        return highestRatedBook;;

    }
}

// don't change below
module.exports = Book;
