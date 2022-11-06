//Book Class
class Book {
  constructor(bookName, authorName, borrowable) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.borrowable = borrowable;
  }
}

//Reader Class
class Reader {
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.books = [];
  }
  borrowBook(book) {
    if (book.borrowable == true) {
      this.books.push(book);
      console.log(
        `Congratulations, ${this.firstName}!! You successfully borrowed "${book.bookName}".`
      );
    } else {
      console.log(
        `Sorry, ${this.firstName}, but The book "${book.bookName}" is not borrowable..`
      );
    }
  }
}

//Instances of Book Class
let aroundTheWorld = new Book(
  "Around the World in 80 days",
  "Jules Verne",
  true
);
let underTheSeas = new Book(
  "20,000 Leagues Under the Seas",
  "Jules Verne",
  true
);
let centerOfTheEarth = new Book(
  "Journey to the Center of the Earth",
  "Jules Verne",
  true
);
let physicsForDummies = new Book(
  "Physics for Dummies",
  "Albert Einstein",
  false
);
let financeForBeginners = new Book(
  "Finance for Beginners",
  "The Money Maker",
  false
);
let historyOfTheWorld = new Book("History Of The World", "The Historian", true);
let biologyBook = new Book("Biology Book", "Adam", false);
let fantasyBook = new Book("Fantasy Book", "The Dreamer", true);
let businessBook = new Book("Business Book", "The Businessman", true);

//Instances of Reader Class
let ben = new Reader("Ben", "Cohen", "Netanya");
ben.borrowBook(aroundTheWorld);
ben.borrowBook(underTheSeas);
ben.borrowBook(centerOfTheEarth);

let harel = new Reader("Harel", "Cohen", "Hadera");
harel.borrowBook(centerOfTheEarth);
harel.borrowBook(financeForBeginners);
harel.borrowBook(historyOfTheWorld);

let bar = new Reader("Bar", "Cohen", "Hadera");
bar.borrowBook(financeForBeginners);
bar.borrowBook(businessBook);
bar.borrowBook(fantasyBook);

let tzah = new Reader("Tzah", "Aviv", "Hadera");
tzah.borrowBook(aroundTheWorld);
tzah.borrowBook(historyOfTheWorld);
tzah.borrowBook(physicsForDummies);

//WeeklyReport Class
class WeeklyReport {
  constructor() {
    this.readers = [];
  }
  addReader(reader) {
    this.readers.push(reader);
  }
  printReport() {
    this.readers.forEach((element) => {
      console.log(
        element.firstName +
          " " +
          element.lastName +
          ", who lives in " +
          element.city +
          ", is borrowing those books:"
      );
      element.books.forEach((book, index) => {
        console.log(
          Number(index + 1) +
            `. "${book.bookName}" of the Author "${book.authorName}".`
        );
      });
      console.log("\n");
    });
  }
}

//Instance of WeeklyReport Class
let myWeeklyReport = new WeeklyReport();
//Adding Readers
myWeeklyReport.addReader(ben);
myWeeklyReport.addReader(harel);
myWeeklyReport.addReader(bar);
myWeeklyReport.addReader(tzah);
//Printing the Report
console.log("");
myWeeklyReport.printReport();
