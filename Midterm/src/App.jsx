import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook.jsx";

function App() {
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/books">Books</Link> |{" "}
        <Link to="/add-book">Add Book</Link>
      </nav>

      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
