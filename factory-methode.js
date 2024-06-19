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
    static createMaterial(type, title, detail1, detail2) {
        switch (type) {
            case 'Book':
                return new Book(title, detail1, detail2);
            case 'Magazine':
                return new Magazine(title, detail1);
            case 'Newspaper':
                return new Newspaper(title, detail1);
            default:
                throw new Error('Unknown material type');
        }
    }
}

const book = LibraryMaterialFactory.createMaterial('Book', '1984', 'George Orwell', 328);
const magazine = LibraryMaterialFactory.createMaterial('Magazine', 'National Geographic', 'May 2024');
const newspaper = LibraryMaterialFactory.createMaterial('Newspaper', 'The New York Times', '2024-06-19');

console.log(book);        // Book { type: 'Book', title: '1984', author: 'George Orwell', pages: 328 }
console.log(magazine);    // Magazine { type: 'Magazine', title: 'National Geographic', issue: 'May 2024' }
console.log(newspaper);   // Newspaper { type: 'Newspaper', title: 'The New York Times', date: '2024-06-19' }
