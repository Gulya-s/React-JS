import React, { useState, useEffect, useCallback } from "react";
import BookCard from "../components/BookCard";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("books");
    if (saved) setBooks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleDelete = useCallback((id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  }, []);

  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "all" || b.genre === genre)
  );

  return (
    <div>
      <h2>Book List</h2>
      <input
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="all">All</option>
        <option value="fiction">Fiction</option>
        <option value="nonfiction">Nonfiction</option>
        <option value="tech">Tech</option>
      </select>

      {filtered.map((book) => (
        <BookCard key={book.id} book={book} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Books;
