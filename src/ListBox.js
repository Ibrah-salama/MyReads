import React from 'react';
import { Link } from "react-router-dom";

import BookShelf from './BookShelf';

class ListBox extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf heading="Currently Reading" shelf="currentlyReading" books={this.props.books.filter(book => book.shelf === 'currentlyReading') } updateBook={this.props.updateBook}/>
                    <BookShelf heading="Want To Read" shelf="wantToRead" books={this.props.books.filter(book => book.shelf === 'wantToRead')} updateBook={this.props.updateBook}/>
                    <BookShelf heading="Read" shelf="read" books={this.props.books.filter(book => book.shelf === 'read')} updateBook={this.props.updateBook}/>
                </div>
                <Link className="open-search" to='/search'>
                    <button>Add a book</button>
                </Link>
            </div>
        )
    }
}

export default ListBox;