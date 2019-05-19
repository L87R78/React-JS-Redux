import React from 'react';


const booksData = [
    {
        bookId: 1,
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
    },
    {
        bookId: 2,
        title: "Harry Potter",
        author: "J.K. Rowling",
    },
    {
        bookId: 3,
        title: "Game of Throne",
        author: "J.R.R. Martyn",
    }
]

function BookList(props){
    console.log(props)
    const { books } = props;

    return(
        <ul>
            {
                books.map(book => (
                    <li>
                        <h5>Title: {book.title}</h5>
                        <h6>Author: {book.author}</h6>
                    </li>
                ))
            }
        </ul>
    )
} 
ReactDOM.render(
    <BookList books={booksData}/>,

    document.getElementById('root'));



