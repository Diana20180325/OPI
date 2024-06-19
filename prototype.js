class LibraryMaterial {
    clone() {
        throw new Error('clone method should be implemented');
    }
}

class Book extends LibraryMaterial {
    constructor(title, author, pages) {
        super();
        this.type = 'Book';
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    clone() {
        return new Book(this.title, this.author, this.pages);
    }
}

class Magazine extends LibraryMaterial {
    constructor(title, issue) {
        super();
        this.type = 'Magazine';
        this.title = title;
        this.issue = issue;
    }

    clone() {
        return new Magazine(this.title, this.issue);
    }
}

class Newspaper extends LibraryMaterial {
    constructor(title, date) {
        super();
        this.type = 'Newspaper';
        this.title = title;
        this.date = date;
    }

    clone() {
        return new Newspaper(this.title, this.date);
    }
}

const originalBook = new Book('1984', 'George Orwell', 328);
const clonedBook = originalBook.clone();

const originalMagazine = new Magazine('National Geographic', 'May 2024');
const clonedMagazine = originalMagazine.clone();

const originalNewspaper = new Newspaper('The New York Times', '2024-06-19');
const clonedNewspaper = originalNewspaper.clone();

console.log(originalBook); // Book { type: 'Book', title: '1984', author: 'George Orwell', pages: 328 }
console.log(clonedBook);   // Book { type: 'Book', title: '1984', author: 'George Orwell', pages: 328 }

console.log(originalMagazine); // Magazine { type: 'Magazine', title: 'National Geographic', issue: 'May 2024' }
console.log(clonedMagazine);   // Magazine { type: 'Magazine', title: 'National Geographic', issue: 'May 2024' }

console.log(originalNewspaper); // Newspaper { type: 'Newspaper', title: 'The New York Times', date: '2024-06-19' }
console.log(clonedNewspaper);   // Newspaper { type: 'Newspaper', title: 'The New York Times', date: '2024-06-19' }
