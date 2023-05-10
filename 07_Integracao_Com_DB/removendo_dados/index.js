const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

// Setup para transformar dados do POST em JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Setup handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Setup arquivos estáticos
app.use(express.static("public"));

// Home
app.get("/", (req, res) => {
  res.render("home");
});

// Insert - C
app.post("/books/insertbook", (req, res) => {
  const book = {
    title: req.body.title,
    pages: req.body.pages,
  };

  const query = `
    INSERT INTO BOOKS (
      title, 
      pages
    ) 
    VALUES (
      '${book.title}', 
      '${book.pages}'
    )
  `;

  conn.query(query, function (error) {
    if (error) {
      console.log(error);
      res.redirect("/");
    }
  });
});

// Read - R
app.get("/books", function (req, res) {
  const query = `
    SELECT * 
    FROM books
  `;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }

    const books = data;

    console.log(data);

    res.render("books", { books });
  });
});

// Read - R / Filter
app.get("/books/:id", function (req, res) {
  const id = req.params.id;

  const query = `
    SELECT *
    FROM BOOKS
    WHERE ID = '${id}'
  `;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }
    const book = data[0];

    console.log(book);

    res.render("book", { book });
  });
});

// Edit - E
app.get('/books/edit/:id', (req, res) => {
  const id = req.params.id;

  const query = `
    SELECT *
    FROM BOOKS
    WHERE ID = '${id}'
  `;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }
    const book = data[0];

    console.log(book);

    res.render("editbook", { book });
  });
})

// Update
app.post('/books/updatebook', function (req, res) {
  const id = req.body.id;
  const title = req.body.title;
  const pages = req.body.pages;

  const query = `
    UPDATE books SET title = '${title}', pages = '${pages}' WHERE id = '${id}'
  `;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
      return
    }
    res.redirect("/books");
  });
})

// Delete
app.post('/books/remove/', function (req, res) {
  const id = req.body.id;

  const query = `
    DELETE FROM books WHERE id = '${id}'
  `;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
      return
    }
    res.redirect("/books");
  });
})


// Conexão MySQL
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password",
  database: "nodemysql2",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Conexão com o MySQL estabelecida!");
    app.listen(3000);
  }
});
