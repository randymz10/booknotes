import db from "../config/dbConfig.js";

export const getBooksFromDb = async () => {
  const result = await db.query("SELECT * FROM books ORDER BY id ASC ");
  return result.rows;
};

export const createBookDb = async (title, author, rating, review, isbn) => {
  await db.query(
    "INSERT INTO books(title, author, rating, review, isbn, link_image) VALUES ($1, $2, $3, $4, $5, $6)",
    [title, author, ratingInt, review, isbn, linkImage]
  );
};

export const updateBookDb = async (id, title, author, rating, review, isbn) => {
  await db.query(
    "UPDATE books SET title = $2, author = ($3), rating = ($4), review = ($5), isbn = ($6), link_image = ($7) WHERE id = $1",
    [idInt, title, author, ratingInt, review, isbn, linkImage]
  );
};

export const deleteBookDb = async (id) =>
  await db.query("DELETE FROM books WHERE id = $1", [id]);
