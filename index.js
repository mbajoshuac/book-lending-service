/*
 * Using the Prototype design pattern to implement a Book lending service
 * Kindly uncomment the function call at the end to exec code
 */
let store = []

let Books = function(title, author, pages) {

    this.title = title
    this.author = author
    this.pages = pages
    this.lend = false
}

Books.prototype = {
    addBook: function() {
        // console.log('this is the title of the book ' + this.title);
        store.push({ title: this.title, author: this.author, pages: this.pages, lend: this.lend });
        console.log();
        console.log(`A new book titled: ${this.title} has been added to the store and avaliable for lending`);
    },
    lendBook: function(title) {
        let bookToLend = store.find((book, index) => book.title == title)
        bookToLend.lend = true;
        console.log();
        console.log(`The Book: ${title} written by ${bookToLend.author} has been lended out and it is not avaliable for lending again`);
    },
    checkBookDetails: function(title) {
        let bookToCheck = store.find((book, index) => book.title == title)
        var lendStatus
        if (bookToCheck.lend) {
            lendStatus = "has been lended out"
        } else {
            lendStatus = "is Avaliable for lending"
        }
        console.log();
        console.log(`${title} was written by ${bookToCheck.author} and it has ${bookToCheck.pages} pages. This Book ${lendStatus}`);
    },

    returnBook: function(title) {
        let bookToReturn = store.find((book, index) => book.title == title)
        bookToReturn.lend = false
        console.log();
        console.log(`This Book titled: ${title} has been returned and is now avaliable for lending`);
    }

}

// create a new book class for a book that is to be added to the store array. Books Parameters are (bookTitle, BookAuthor, Book page Number);
let book1 = new Books('Things Fall Apart', 'Chinue Achebe', '234');
let book2 = new Books('Play not with your Salvation', 'Mrs Nkeiruka Mba', '234');
let book3 = new Books('Dealing with Faulty Foundations', 'Dr kelechi Mba', '144');
let book4 = new Books('The Central Bank of Ideas', 'Ogbonnia Ikedichi', '543');

//Add Book to the store array
function booksToAdd() {
    console.log(`=======================================`);
    console.log(`New Books that is being added to the Store`);
    console.log(`=======================================`);
    /*
     * Invoke other Books that you want to add to the store below this comment 
     */
    book1.addBook();
    book2.addBook();
    book3.addBook();
    book4.addBook();

    console.log();
    console.log();
}

//lend out a particular book
function booksToLend() {
    console.log(`==================================`);
    console.log(`Books that is being lend out`);
    console.log(`==================================`);
    /*
     * Add other Books you want to lend in below this as shown
     */
    book1.lendBook(book1.title);
    book2.lendBook(book2.title);


    console.log();
    console.log();
}

function booksToCheck() {
    console.log(`==================================`);
    console.log(`Books requested to see it's status`);
    console.log(`==================================`);
    /*
     * Add other Books that you will need check on below using the call format
     */
    book1.checkBookDetails(book1.title);


    console.log();
    console.log();
}


function booksToReturn() {
    console.log(`==================================`);
    console.log(`Books That has been returned`);
    console.log(`==================================`);
    /*
     * Add other Books that has been returned under here
     */

    book2.returnBook(book2.title);

    console.log();
    console.log();

}



/*
 * Uncomment the functions below to see execution
 */
booksToAdd();
booksToLend();
booksToCheck();
booksToReturn();


//Check the store obj
//console.log(store);