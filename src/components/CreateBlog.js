import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const CreateBlog = (props) => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    description: "",
    image_link: ""
  });

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/add", book)
      .then((res) => {
        setBook({
          title: "",
          description: "",
          image_link: ""
        });
        // Push to /
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateBook!" + err.message);
      });
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show BooK List
            </Link>
          </div> */}
          <Navbar/>
          <div className="col-md-10 m-auto">
            <h1 className="display-4 text-center">Add Blog</h1>
            <p className="lead text-center">Create new Blog</p>
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
              <label htmlFor='title'>Title</label>
                <input
                  type="text"
                  placeholder="Title of the Blog"
                  name="title"
                  className="form-control"
                  value={book.title}
                  onChange={onChange}
                />
              </div>
              <br />
              
              <div className="form-group">
              <label htmlFor='description'>Description:</label>
                <textarea
                  type="text"
                  placeholder="Describe this Blog"
                  name="description"
                  className="form-control"
                  value={book.description}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Image Link"
                  name="image_link"
                  className="form-control"
                  value={book.image_link}
                  onChange={onChange}
                />
              </div>
              <br />
              
              <button
                type="submit"
                className="btn btn-outline-warning btn-block mt-4 mb-4 w-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;