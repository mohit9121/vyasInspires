import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateBlog from './components/CreateBlog';
import ShowBlogList from './components/ShowBlogList';
import ShowBlogDetails from './components/ShowBlogDetails';
import UpdateBlogInfo from './components/UpdateBlogInfo';
import About from './components/about/about';
import Contact from './components/contact/contact';

const router = createBrowserRouter([
  {path: "/", element: <ShowBlogList/>}, 
  {path: "/create1809", element: <CreateBlog/>}, 
  {path: "/show-blog/:id", element: <ShowBlogDetails/>}, 
  {path: "/edit1809/:id", element: <UpdateBlogInfo/>},
  {path: "/about", element: <About/>}, 
  {path: "/contact", element: <Contact/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
