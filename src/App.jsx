import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Blogdetail from './pages/detail';
import Create from './pages/create';

export const BlogContext = createContext();

const App = () => {
  const [blogs, setBlogs] = useState([
   
  ]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blogdetail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </BlogContext.Provider>
  );
};

export default App;
