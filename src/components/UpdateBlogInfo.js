import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Navbar from './navbar/Navbar';

function UpdateBlogInfo(props) {
  const [book, setBook] = useState({
    title: '',
    description: '',
    image_link: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blog/${id}`)
      .then((res) => {
        setBook({
          title: res.data.title,
          description: res.data.description,
          image_link: res.data.image_link
        });
      })
      .catch((err) => {
        console.log('Error from UpdateBookInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: book.title,
      description: book.description,
      image_link: book.image_link
    };

    axios
      .put(`http://localhost:5000/blog/${id}`, data)
      .then((res) => {
        navigate(`/show-blog/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo!');
      });
  };

  return (
    <div className='UpdateBookInfo'>
      <div className='container'>
        <Navbar/>
        <div className='row'>
          {/* <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link>
          </div> */}
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Blog</h1>
            <p className='lead text-center'>Update Blog's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={book.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Description:</label>
              <textarea
                type='text'
                placeholder='Description of the Book'
                name='description'
                className='form-control'
                value={book.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='image_link'>Image_link</label>
              <input
                type='text'
                placeholder='Image Link'
                name='image_link'
                className='form-control'
                value={book.image_link}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBlogInfo;