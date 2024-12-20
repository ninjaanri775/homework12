import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div className='header'>
      <Link className='link blogs' to="/">Blogs</Link> <Link className='link creates' to="/create">Create Blog</Link>
    </div>
  );
};

export default header;
