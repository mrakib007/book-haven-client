import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Home.css'
const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://dry-stream-47875.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="product-container mt-5">
            {
                books.map(book =><Book book={book}></Book>)
            }
        </div>
    );
};

export default Home;