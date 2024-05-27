import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import './about/about.css';
import axios from 'axios';
import Navbar from './navbar/Navbar';
var nl2br  = require('nl2br');


function ShowBlogDetails(props) {
  const [book, setBook] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blog/${id}`)
      .then((res) => {
        res.data.description = nl2br(res.data.description);
        setBook(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:5000/blog/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowBookDetails_deleteClick');
      });
  };

  const BookItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{book.title}</td>
          </tr>

          <tr>
            <th scope='row'>2</th>
            <td>Description</td>
            <td>{book.description}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Description</td>
            <td dangerouslySetInnerHTML={{ __html: book.description }} />
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          {/* <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Blog List
            </Link>
          </div>
          <br /> */}
          {/* <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Blog's Record</h1>
            <p className='lead text-center'>View Blog's Info</p>
            <hr /> <br />
          </div> */}
          <div>
            <Navbar />
            <div className="about">
              <h1 className='abput-heading'>{book.title}</h1>
              {/* <p className='about-para'>{book.description}</p> */}
              <p className="about-para" dangerouslySetInnerHTML={{__html: (book.description)}}></p>
            </div>
          </div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(book._id);
              }}
            >
              Delete Blog
            </button>
          </div>
          {/* <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-blog/${book._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Blog
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ShowBlogDetails;