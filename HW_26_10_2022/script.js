class Library {
  constructor(libraryName) {
    this.libraryName = libraryName;
    this.readers = [];
    this.books = [];
  }
  #calcBorrowCost(theDays, theCost) {
    return theDays * theCost;
  }
  displayLibrary() {
    console.log("");
    console.log(this.libraryName + " Inventory");
    console.log("-----------------");
    this.books.forEach((element) => {
      if (element.canBeBorrowed == true) {
        if (element.borrower != "Not Borrowed") {
          console.log(
            "The Book '" +
              element.bookName +
              "' has been borrowed by " +
              element.borrower.readerName +
              " for " +
              element.borrowedForXdays +
              " days, for a total cost of: " +
              this.#calcBorrowCost(
                element.borrowedForXdays,
                element.costPerDay
              ) +
              "$"
          );
        } else {
          console.log(
            "The Book '" + element.bookName + "' has not been borrowed."
          );
        }
      } else {
        console.log("The Book '" + element.bookName + "' can't be borrowed.");
      }
    });
  }
}

class Reader {
  constructor(readerName) {
    this.readerName = readerName;
    this.readerBooks = [];
  }
  borrowBook(libraryName, bookName, daysToBorrow) {
    let bookFound = false;
    libraryName.books.forEach((element, index) => {
      if (element.bookName == bookName) {
        if (element.canBeBorrowed) {
          if (!libraryName.readers.includes(this)) {
            libraryName.readers.push(this);
          }
          this.readerBooks.push([libraryName, element, daysToBorrow]);

          console.log(
            this.readerName +
              " has borrowed the book '" +
              element.bookName +
              "' for " +
              daysToBorrow +
              " days."
          );
          element.borrower = this;
          element.borrowedForXdays = daysToBorrow;
          bookFound = true;
        } else {
          console.log(
            "Sorry, " +
              this.readerName +
              ". The Book '" +
              element.bookName +
              "' Can't be borrowed."
          );
          bookFound = true;
        }
      } else if (index == libraryName.books.length - 1 && bookFound == false) {
        console.log(
          "Sorry, " +
            this.readerName +
            ". The book '" +
            bookName +
            "' DOES NOT EXIST in the Library."
        );
      }
    });
  }
}

class BookIsToBorrow {
  constructor(libraryName, bookName, costPerDay) {
    this.libraryName = libraryName;
    this.bookName = bookName;
    this.canBeBorrowed = true;
    this.borrower = "Not Borrowed";
    this.costPerDay = costPerDay;
    this.borrowedForXdays = 0;
    this.libraryName.books.push(this);
  }
}
class BookIsNotToBorrow extends BookIsToBorrow {
  constructor(libraryName, bookName) {
    super(libraryName, bookName);
    this.canBeBorrowed = false;
  }
}

//Adding Library
let myLibrary = new Library("myLibrary");

//Adding Books to "myLibrary"
let book1 = new BookIsToBorrow(myLibrary, "Adventure Book", 5);
let book2 = new BookIsToBorrow(myLibrary, "SciFi Book", 10);
let book3 = new BookIsToBorrow(myLibrary, "Biology Book", 15);
let book4 = new BookIsNotToBorrow(myLibrary, "Math Book");
let book5 = new BookIsNotToBorrow(myLibrary, "Physics Book");

//Adding General Readers
let reader1 = new Reader("Ben");
let reader2 = new Reader("Harel");
let reader3 = new Reader("Bar");
let reader4 = new Reader("Tzah");

//Borrowing Books
//Failure due to "Book does not exist in the library"
reader1.borrowBook(myLibrary, "any book", 5);
//Failure due to "Book can not be borrowed"
reader1.borrowBook(myLibrary, "Math Book", 5);
//Success
reader1.borrowBook(myLibrary, "Adventure Book", 5);
reader2.borrowBook(myLibrary, "SciFi Book", 10);
reader3.borrowBook(myLibrary, "Biology Book", 8);

//Displaying Library
myLibrary.displayLibrary();
