import React from "react";
import { Link } from "react-router-dom";

import './book-list-item.css';


const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImageUrl } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImageUrl}  alt={title} />
            </div>
            <div className="book-details">
                <Link to="#" className="book-title">{title}</Link>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button onClick={onAddedToCart} 
                        className="btn btn-info add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
}

export default BookListItem;