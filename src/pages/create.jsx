import React, { useState, useContext } from 'react';
import { BlogContext } from '../App';
import { useNavigate, Link } from 'react-router-dom';

const CreateBlog = () => {
  const { addBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, description });
    navigate('/');
  };

  return (
    <div className='container2'>
      <Link className='goback' to="/">&lt; Back</Link>
      <form className='forming' onSubmit={handleSubmit}>
      <h1 className='logo2'>Create New Blog</h1>
        <input
          className='createnew'
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
        className='createnewdesc'
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='submit' type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
