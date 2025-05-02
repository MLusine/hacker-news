import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Ycombinator from './components/Ycombinator/Ycombinator';
// import Login from './components/Login/Login';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  return (
    <div style={{ minWidth: "796px", width: "85%", background: "#f6f6ef", display: "flex", flexDirection: "column", marginTop: "5px" }}>
      <Header />
      <Ycombinator posts={posts} /> 
      <Footer />
      {/* <Login /> */}
    </div>
  );
}

export default App;





