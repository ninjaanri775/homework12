import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogContext } from '../App';

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);

  const blog = blogs.find((b) => b.id === parseInt(id));


  return (
    <div className='card2'>
      <Link className='goback' to="/">&lt; Back</Link>
      <h1 className='title2'>Title: {blog.title}</h1>
      <p className='desc2'>Description: {blog.description}</p>
    </div>
  );
};

export default BlogDetails;
