class Book {
    constructor(title, author, pages) {
        this.type = 'Book';
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Magazine {
    constructor(title, issue) {
        this.type = 'Magazine';
        this.title = title;
        this.issue = issue;
    }
}

class Newspaper {
    constructor(title, date) {
        this.type = 'Newspaper';
        this.title = title;
        this.date = date;
    }
}

class LibraryMaterialFactory {
    createBook(title, author, pages) {
        throw new Error('This method should be overridden!');
    }

    createMagazine(title, issue) {
        throw new Error('This method should be overridden!');
    }

    createNewspaper(title, date) {
        throw new Error('This method should be overridden!');
    }
}

class ConcreteLibraryMaterialFactory extends LibraryMaterialFactory {
    createBook(title, author, pages) {
        return new Book(title, author, pages);
    }

    createMagazine(title, issue) {
        return new Magazine(title, issue);
    }

    createNewspaper(title, date) {
        return new Newspaper(title, date);
    }
}

const factory = new ConcreteLibraryMaterialFactory();

const book = factory.createBook('1984', 'George Orwell', 328);
const magazine = factory.createMagazine('National Geographic', 'May 2024');
const newspaper = factory.createNewspaper('The New York Times', '2024-06-19');

console.log(book); // Book { type: 'Book', title: '1984', author: 'George Orwell', pages: 328 }
console.log(magazine); // Magazine { type: 'Magazine', title: 'National Geographic', issue: 'May 2024' }
console.log(newspaper); // Newspaper { type: 'Newspaper', title: 'The New York Times', date: '2024-06-19' }
