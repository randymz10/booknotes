import { getBooksFromDb, createBookDb, updateBookDb, deleteBookDb } from "../models/Book.js";

export async function getAllBooks(req, res) {
  const books = await getBooksFromDb();
  let message = "";
  if (req.session.messages) {
    message = req.session.messages[0];
  }

  res.status(200);
  res.render("index.ejs", {
    books: books,
    isAuthenticated: req.isAuthenticated(),
    message: message,
  });
}

export const createBook = async (req, res) => {
  const { title, author, rating, review, isbn } = req.body;
  const ratingInt = rating ? parseInt(rating) : 0;
  const linkImage = `${API_URL}${isbn}-M.jpg`;

  try {
    createBookDb(title, author, rating, review, isbn);
    res.status(201);
  } catch (error) {
    res.status(500).send("Internal Server error");
  }
  res.redirect("/");
};

export const updateBook = async (req, res) => {
  const { id, title, author, rating, review, isbn } = req.body;
  const idInt = parseInt(id);
  const ratingInt = parseInt(rating);
  const linkImage = `${API_URL}${isbn}-M.jpg`;
  try {
    updateBookDb(id, title, author, rating, review, isbn);
    res.status(200);
  } catch (error) {
    throw error;
    res.status(500).send("Internal Server error");
  }
  res.redirect("/");
};

export const deleteBook = async (req, res) => {
  const id = parseInt(req.body.id);
  console.log(id);
  try {
    deleteBookDb(id);
    res.status(204);
  } catch (error) {
    res.status(500).send("Internal Server Error");
    throw error;
  }
  res.redirect("/");
};
