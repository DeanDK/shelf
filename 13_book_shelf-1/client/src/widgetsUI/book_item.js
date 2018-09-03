import React from "react";
import { Link } from "react-router-dom";

const BookItem = items => {
  return (
    <Link to={`/books/${items._id}`} className="book_item">
      <div className="book_header">
        <h2>{items.name}</h2>
      </div>
      <div className="book_items">
        <div className="book_author">{items.author}</div>
        <div className="book_bubble">
          <strong>Price</strong> $ {items.price}
        </div>

        <div className="book_bubble">
          <strong>Pages</strong> $ {items.pages}
        </div>

        <div className="book_bubble rating">
          <strong>Rating</strong> $ {items.rating}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
