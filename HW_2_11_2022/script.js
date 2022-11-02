//Reader Class
class Reader {
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.books = [];
  }
  borrowBook(book) {
    this.books.push(book);
  }
}

//Instances of Reader Class
let ben = new Reader("Ben", "Cohen", "Netanya");
ben.borrowBook("Adventure Book");
ben.borrowBook("Science Book");
ben.borrowBook("Fantasy Book");

let harel = new Reader("Harel", "Cohen", "Hadera");
harel.borrowBook("Adventure Book");
harel.borrowBook("Finance Book");
harel.borrowBook("History Book");

let bar = new Reader("Bar", "Cohen", "Hadera");
bar.borrowBook("Fintec Book");
bar.borrowBook("Business Book");
bar.borrowBook("Scify Book");

let tzah = new Reader("Tzah", "Aviv", "Hadera");
tzah.borrowBook("Adventure Book");
tzah.borrowBook("Soccer Book");
tzah.borrowBook("Education Book");

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
        console.log(Number(index + 1) + ". " + book);
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
myWeeklyReport.printReport();
