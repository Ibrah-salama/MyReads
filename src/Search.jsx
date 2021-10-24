import React from 'react';
import { Link } from 'react-router-dom'
import {  search } from './BooksAPI'
import Book from './Book'

class Search extends React.Component {
    state = {
        query : '',
        result: []
    }
    onChangeHandler = (e) => this.setState({ query: e.target.value })
    
    searchBooks = async (keyword) => {
        if(keyword !== ''){
            const result = await search(keyword)
            if(!result.error){
                this.setState({
                    result: result.length !== 0 ? this.addShelf(result) : []
                });
            }
        } else {
            this.setState({
                query: '', 
                result : []
            })
        }
    }       

    getBookById = (id) => this.props.currentBooks.filter(book => book.id === id)[0] 

    addShelf = (result) => {
        return result.map(book => {
            const currentBook = this.getBookById(book.id)
            if(currentBook){
                book.shelf = currentBook.shelf;
            }else{
                book.shelf = 'none'
            }
            return book
        })
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                  <Link to='/'>  <button className="close-search" >Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"  value={this.state.query} onChange={(e) => this.onChangeHandler(e)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {this.state.result.map(book => <Book key={book.id} book={book} updateBook={this.props.updateBook} />)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;