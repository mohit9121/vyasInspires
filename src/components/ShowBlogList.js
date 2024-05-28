import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import Navbar from './navbar/Navbar';
function ShowBlogList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get('https://vyasinspires-backend.onrender.com//blogs')
      .then((res) => {
        setBooks(res.data);
        setLoading(false);

      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);

  const bookList =
    books.length === 0
      ? 'there is no blog in the record'
      : books.map((book, k) => <BlogCard book={book} key={k} />);

const imgUrl = ""; 
  return (
    <div className="w-4/5 md:w-9/12 mx-auto md:mt-10">
      <Navbar />
      <div className='ShowBookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Blogs List</h2>
            </div>
          </div>
          <div className='list'>
            {loading ? 'Loading...' : bookList}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBlogList;

