# MyReads
MyReads is a basic web app that helps you organize and improve your reading life, you can add your currently reading books, the books you want to read later, and the books you've already read. You can also find new books to add to your library for later use.  

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## File Structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app. Contains the basic functionallity of the app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. 
    ├── BookShelf.js # A Class-based component to render a whole shelf section
    ├── Book.js #  A CBC to render a single book "used in BookShelf.js"
    ├── ListBooks.js #  A CBC that contains a composition of BookShelf components that has Books in it, used on homepage
    ├── SearchBooks.js # A CBC to render the entire search page
    ├── icons # Helpful images for your app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # Used for DOM rendering only.
```

## App.js

The main component based class that has the functions to maintain the behavior of the app.

* [`componentDidMount`](#componentDidMount)
* [`updateBook`](#updateBook)

### `componentDidMount`

Method Signature:

```js
componentDidMount()
```

* This method is invoked immediately after the component is mounted, specifically used to make network requests, fetching the current user's books data. 

### `updateBook`

Method Signature:

```js
updateBook(book, shelf)
```

* book: `<Object>` is the selected book.
* shelf: `<String>` is the desired shelf to move the book to.
* Used to update the book's status if the user wants to move the book to another shelf, used in Book.handleShelfOnChange()

--------------------------------------------------------------------------------------------------------

## SearchBooks.js

A class based component, its purpose to render the whole search page, contains the basic functionality of a basic search web page.

* [`onChangeHandler`](#onChangeHandler)
* [`searchBooks`](#searchBooks)
* [`getBookById`](#getBookById)
* [`assignShelfsToSearchResults`](#assignShelfsToSearchResults)


### `onChangeHandler`

Method Signature:

```js
onChangeHandler(event)
```

* event: `<Object>` contains the `value` of the search query.
* invokes `setState` to update the search query as the user types.
* invokes `searchBooks` to make fetch requests as the user types.

### `searchBooks`

Method Signature:

```js
searchBooks(keyword)
```

* keyword: `<String>` is the current search query.
* This method fetches books data as the user types, calls `setState` to trigger a rerender to display new results in real-time.

### `getBookById`

Method Signature:

```js
getBookById(id)
```

* id: `<string>` an ID of a book.
* A helper method used to get books by id, note that it is used to get books from the current user's shelves, not from the search results.
* used in `SearchBooks.assignShelfsToSearchResults()`

### `assignShelfsToSearchResults`

Method Signature:

```js
assignShelfsToSearchResults(searchResults)
```

* searchResults: `<Array>` contains the search results passed by `SearchBooks.searchBooks()`
* This method is responsible for assigning current users' books shelves to searchResults books, which means if the user has a current book in the library and at the same time in the search page, it'll display the current book's shelf.


----------------------------------------------------------------------------------------------
## Book.js

A class based component, its purpose is to render a single book at a time. Used in BookShlef.js

* [`handleShelfOnChange`](#handleShelfOnChange)

### `handleShelfOnChange`

Method Signature:

```js
handleShelfOnChange(event)
```

* event: `<Object>` contains the `value` of the new wanted shelf
* This method invokes App.updateBook method which updates the current shelf of the book. 

