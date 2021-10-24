import React from 'react';
class Book extends React.Component {

    updatedShelf = (e)=>{
        const shelf = e.target.value; 
        this.props.updateBook(this.props.book, shelf)
    }
    
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail})`}}></div>
                        <div className="book-shelf-changer">
                            <select value={this.props.book.shelf} onChange={(e) => this.updatedShelf(e)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{Array.isArray(this.props.book.authors) ? this.props.book.authors.join(", ") : this.props.book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book;