import React from "react";

function BookCard({ book, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "8px",
        padding: "8px",
        borderRadius: "6px",
      }}
    >
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
}

export default React.memo(BookCard);