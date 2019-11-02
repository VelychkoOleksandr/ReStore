import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { fetchBooks, bookAddedToCart, calculateTotal } from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { connect } from "react-redux";
import './book-list.css';

import withBookstoreService from "../hoc";

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart, calculateTotal } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList
            books={books}
            onAddedToCart={onAddedToCart}
            calculateTotal={calculateTotal} />
    }
}

const BookList = ({ books, onAddedToCart, calculateTotal }) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                onAddedToCart={() => {
                                    onAddedToCart(book.id);
                                    calculateTotal()
                                }} />
                        </li>
                    );
                })
            }
        </ul>
    );
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return {
        books,
        loading,
        error
    };
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (bookId) => dispatch(bookAddedToCart(bookId)),
        calculateTotal: () => dispatch(calculateTotal())
    }
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
