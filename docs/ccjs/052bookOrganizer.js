const books = [
  {
    title: "The Nut Collector's Guide",
    authorName: "Hazel Whiskers",
    releaseYear: 2018,
  },
  {
    title: "Tales from the Oak Tree",
    authorName: "Chestnut Graytail",
    releaseYear: 2021,
  },
  {
    title: "Winter Hoard: A Squirrel's Strategy",
    authorName: "Acorn Fields",
    releaseYear: 2015,
  },
  {
    title: "Branch to Branch: The Art of Agile Living",
    authorName: "Maple Quickpaw",
    releaseYear: 2023,
  },
  {
    title: "Secrets Beneath the Bark",
    authorName: "Willow Bushytail",
    releaseYear: 2012,
  },
];

function sortByYear(bookA, bookB) {
  if (bookA.releaseYear < bookB.releaseYear) {
    return -1;
  } else if (bookA.releaseYear > bookB.releaseYear) {
    return 1;
  }
  return 0;
}

console.log(sortByYear(books[2], books[0]));

let filteredBooks = books.filter((book) => book.releaseYear <= 2016);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
