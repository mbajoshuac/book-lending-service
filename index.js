/*
 * Using the Prototype design pattern to implement a Book lending service
 */

let store = []

let Books = function(title, author, pages) {

    this.title = title
    this.author = author
    this.pages = pages
    this.lend = false
}

Books.prototype = {
    addbooks: function() {
        // console.log('this is the title of the book ' + this.title);
        store.push({ title: this.title, author: this.author, pages: this.pages, lend: this.lend });
    },
    lendbook: function(title) {
        let bookToLend = store.find((book, index) =>
            book.title == title
        )
        bookToLend.lend = true;
    }
}

// create a new book class to be added to the store array
let book1 = new Books('Things Fall Apart', 'Chinue Achebe', '234');
let book2 = new Books('Play not with your Salvation', 'Mrs Nkeiruka Mba', '234');
let book3 = new Books('Dealing with Faulty Foundations', 'Dr kelechi Mba', '144');
let book4 = new Books('The Central Bank of Ideas', 'Ogbonnia Ikedichi', '543');

//Add Book to the store array
book1.addbooks();
book2.addbooks();
book3.addbooks();
book4.addbooks();

//lend out a particular book
function lender() {
    //call the lendbook proto for book you want to lend
    book1.lendbook(book1.title);
    book2.lendbook(book2.title);
    //console.log the store status
    console.log(store);
}



//invoke all actions

//lender();


// check books that have been lended out


// Books availiable for lending