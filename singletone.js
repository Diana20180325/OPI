class Library {
    constructor() {
        if (Library.instance) {
            return Library.instance;
        }

        this.materials = [];
        Library.instance = this;
    }

    addMaterial(material) {
        this.materials.push(material);
    }

    getMaterials() {
        return this.materials;
    }
}

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

const library1 = new Library();
const library2 = new Library();

const book = new Book('1984', 'George Orwell', 328);
const magazine = new Magazine('National Geographic', 'May 2024');
const newspaper = new Newspaper('The New York Times', '2024-06-19');

library1.addMaterial(book);
library1.addMaterial(magazine);
library2.addMaterial(newspaper); // Додавання через інший екземпляр

console.log(library1.getMaterials());
/* Вивід:
[
    Book { type: 'Book', title: '1984', author: 'George Orwell', pages: 328 },
    Magazine { type: 'Magazine', title: 'National Geographic', issue: 'May 2024' },
    Newspaper { type: 'Newspaper', title: 'The New York Times', date: '2024-06-19' }
]
*/

console.log(library1 === library2); // true
