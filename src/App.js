import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Search from "./Search";
import ListBox from "./ListBox";

import { getAll, update } from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount = async () => {
    const books = await getAll();
    this.setState({ books });
  };

  updateBook = (book, shelf) => {
    update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState((prevState) => {
        const newBooks = prevState.books.filter(
          (preBook) => preBook.id !== book.id
        );
        return {
          books: [...newBooks, book],
        };
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route path="/search">
          <Search
            currentBooks={this.state.books}
            updateBook={this.updateBook}
          />
        </Route>
        <Route path="/" exact render={()=> <ListBox books={this.state.books} updateBook={this.updateBook} />}/>
      </div>
    );
  }
}

export default BooksApp;
