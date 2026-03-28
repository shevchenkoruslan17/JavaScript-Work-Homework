// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
// – знайти найбільшу книжку.
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//
// – знайти книжку/ки з найдовшою назвою
//
// – знайти книжку/ки, які писали 2 автори
//
// – знайти книжку/ки, які писав 1 автор


let books = [
    {
        title: "Lionel Messi",
        pages: 500,
        authors: ['J.K. Row'],
        genres: ["sport"],
    },
    {
        title: "Harry Potter",
        pages: 1000,
        authors: ['J.K. Rowling'],
        genres: ["fantasy", "adventure"],
    },
    {
        title: "Payton",
        pages: 450,
        authors: ['Robert S.T', "author4"],
        genres: ["programming"],
    },
    {
        title: "JavaScript",
        pages: 300,
        authors: ["author1", "author2"],
        genres: ["programming", "education"],
    }

]
// – знайти найбільшу книжку.
let biggestBook = books[0];

for( let book of books ){
    if( book.pages > biggestBook.pages ){
        biggestBook = book;
    }
}
console.log(biggestBook);

// – знайти книжку/ки з найбільшою кількістю жанрів

let maxGenresBook = books[0];

for( let book of books ){
    if( book.genres.length > maxGenresBook.genres.length ){
        maxGenresBook = book;
    }
}
console.log(maxGenresBook);

// – знайти книжку/ки з найдовшою назвою

let titleBook = books[0];

for( let book of books ){
    if( book.title.length > titleBook.title.length ){
        titleBook = book;
    }
}
console.log(titleBook);

// – знайти книжку/ки, які писали 2 автори

for ( let book of books ){
    if ( book.authors.length === 2){
        console.log(book);
    }
}

// – знайти книжку/ки, які писав 1 автор

for ( let book of books ){
    if ( book.authors.length === 1 ){
        console.log(book);
    }
}
