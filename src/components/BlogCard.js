import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BlogCard = ({book}) => {

  const defaultImage = 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d';

  const isValidImage = (url) => {
    // Basic check for URL validity
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const imageUrl = isValidImage(book.image_link) ? book.image_link : defaultImage;

  return (
    <div className='card-container'>
      <img
        src={imageUrl}
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-blog/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;