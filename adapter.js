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

class Library {
    constructor() {
        this.materials = [];
    }

    addMaterial(material) {
        this.materials.push(material);
    }

    getMaterials() {
        return this.materials;
    }
}

class EBook {
    constructor(name, writer, length) {
        this.name = name;
        this.writer = writer;
        this.length = length;
    }

    getDetails() {
        return `EBook: ${this.name} by ${this.writer}, ${this.length} pages`;
    }
}

class DigitalMagazine {
    constructor(title, edition) {
        this.title = title;
        this.edition = edition;
    }

    getInfo() {
        return `Digital Magazine: ${this.title}, edition ${this.edition}`;
    }
}

class OnlineNewspaper {
    constructor(headline, publishedDate) {
        this.headline = headline;
        this.publishedDate = publishedDate;
    }

    getSummary() {
        return `Online Newspaper: ${this.headline}, published on ${this.publishedDate}`;
    }
}

class EBookAdapter {
    constructor(eBook) {
        this.eBook = eBook;
    }

    getTitle() {
        return this.eBook.name;
    }

    getAuthor() {
        return this.eBook.writer;
    }

    getPages() {
        return this.eBook.length;
    }

    toMaterial() {
        return new Book(this.getTitle(), this.getAuthor(), this.getPages());
    }
}

class DigitalMagazineAdapter {
    constructor(digitalMagazine) {
        this.digitalMagazine = digitalMagazine;
    }

    getTitle() {
        return this.digitalMagazine.title;
    }

    getIssue() {
        return this.digitalMagazine.edition;
    }

    toMaterial() {
        return new Magazine(this.getTitle(), this.getIssue());
    }
}

class OnlineNewspaperAdapter {
    constructor(onlineNewspaper) {
        this.onlineNewspaper = onlineNewspaper;
    }

    getTitle() {
        return this.onlineNewspaper.headline;
    }

    getDate() {
        return this.onlineNewspaper.publishedDate;
    }

    toMaterial() {
        return new Newspaper(this.getTitle(), this.getDate());
    }
}

const library = new Library();

const eBook = new EBook('Digital Fortress', 'Dan Brown', 384);
const digitalMagazine = new DigitalMagazine('Tech Monthly', 'June 2024');
const onlineNewspaper = new OnlineNewspaper('Breaking News', '2024-06-19');

const eBookAdapter = new EBookAdapter(eBook);
const digitalMagazineAdapter = new DigitalMagazineAdapter(digitalMagazine);
const onlineNewspaperAdapter = new OnlineNewspaperAdapter(onlineNewspaper);

library.addMaterial(eBookAdapter.toMaterial());
library.addMaterial(digitalMagazineAdapter.toMaterial());
library.addMaterial(onlineNewspaperAdapter.toMaterial());

console.log(library.getMaterials());
/* Вивід:
[
    Book { type: 'Book', title: 'Digital Fortress', author: 'Dan Brown', pages: 384 },
    Magazine { type: 'Magazine', title: 'Tech Monthly', issue: 'June 2024' },
    Newspaper { type: 'Newspaper', title: 'Breaking News', date: '2024-06-19' }
]
*/
