class Book {
    constructor() {
        this.type = 'Book';
    }
}

class Magazine {
    constructor() {
        this.type = 'Magazine';
    }
}

class Newspaper {
    constructor() {
        this.type = 'Newspaper';
    }
}

class BookBuilder {
    constructor() {
        this.book = new Book();
    }

    setTitle(title) {
        this.book.title = title;
        return this;
    }

    setAuthor(author) {
        this.book.author = author;
        return this;
    }

    setPages(pages) {
        this.book.pages = pages;
        return this;
    }

    build() {
        return this.book;
    }
}

class MagazineBuilder {
    constructor() {
        this.magazine = new Magazine();
    }

    setTitle(title) {
        this.magazine.title = title;
        return this;
    }

    setIssue(issue) {
        this.magazine.issue = issue;
        return this;
    }

    build() {
        return this.magazine;
    }
}

class NewspaperBuilder {
    constructor() {
        this.newspaper = new Newspaper();
    }

    setTitle(title) {
        this.newspaper.title = title;
        return this;
    }

    setDate(date) {
        this.newspaper.date = date;
        return this;
    }

    build() {
        return this.newspaper;
    }
}

// Створюємо книгу
const bookBuilder = new BookBuilder();
const book = bookBuilder
    .setTitle('1984')
    .setAuthor('George Orwell')
    .setPages(328)
    .build();

console.log(book); // Book { type: 'Book', title: '1984', author: 'George Orwell', pages: 328 }

// Створюємо журнал
const magazineBuilder = new MagazineBuilder();
const magazine = magazineBuilder
    .setTitle('National Geographic')
    .setIssue('May 2024')
    .build();

console.log(magazine); // Magazine { type: 'Magazine', title: 'National Geographic', issue: 'May 2024' }

// Створюємо газету
const newspaperBuilder = new NewspaperBuilder();
const newspaper = newspaperBuilder
    .setTitle('The New York Times')
    .setDate('2024-06-19')
    .build();

console.log(newspaper); // Newspaper { type: 'Newspaper', title: 'The New York Times', date: '2024-06-19' }

