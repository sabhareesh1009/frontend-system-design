const data = {
  authors: [
    {
      id: "1",
      name: "Author 1",
      bookIds: ["1", "3"],
    },
    {
      id: "2",
      name: "Author 2",
      bookIds: ["2", "4"],
    },
  ],

  books: [
    {
      id: "1",
      title: "Book 1",
      publishedYear: 2020,
      authorId: "1",
    },
    {
      id: "2",
      title: "Book 2",
      publishedYear: 2020,
      authorId: "2",
    },
    {
      id: "3",
      title: "Book 3",
      publishedYear: 2021,
      authorId: "1",
    },
    {
      id: "4",
      title: "Book 4",
      publishedYear: 2022,
      authorId: "2",
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find((author) => author.id === parent.authorId);
    },
  },
  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },
  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },
  Mutation: {
    addAuthor: (parent, args, context, info) => {
      const newAuthor = {
        id: data.authors.length + 1,
        name: args.name,
        bookIds: [],
      };
      data.authors.push(newAuthor);
      return newAuthor;
    },
    addBook: (parent, args, context, info) => {
      const newBook = {
        id: data.books.length + 1,
        title: args.title,
        publishedYear: args.publishedYear,
        authorId: args.authorId,
      };
      data.books.push(newBook);
      return newBook;
    },
  },
};
