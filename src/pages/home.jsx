import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../App';

const BlogList = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className='realcontainer'>
              <h1 className='logo'>BLOGS</h1>
      <div className='container'>
        {blogs.map((blog) => (
          <div className='cards' key={blog.id}>
            <h2 className='title'>{blog.title}</h2>
            <p className='desc'>{blog.description.substring(0, 10)}...</p>
            <Link className='show' to={`/blog/${blog.id}`}>Show More</Link>
          </div>
        ))}
      </div>
    </div>

  );
};

export default BlogList;
