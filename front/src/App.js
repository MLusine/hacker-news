import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Ycombinator from "./components/Ycombinator/Ycombinator";

import Login from "./pages/Login/Login.js";
import Comments from "./pages/Comments/Comments.js";
import Jobs from "./pages/Jobs/Jobs.js";
import News from "./pages/News/News.js";
import Past from "./pages/Past/Past.js";
import Ask from "./pages/Ask/Ask.js";
import Show from "./pages/Show/Show.js";
import Submit from "./pages/Submit/Submit.js";

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <div
      style={{
        minWidth: "796px",
        width: "85%",
        background: "#f6f6ef",
        display: "flex",
        flexDirection: "column",
        marginTop: "5px",
      }}
    >
      {!hideHeaderFooter && <Header user={user} setUser={setUser} />}
      <Routes>
        <Route path="/" element={<Ycombinator posts={posts} />} />
        <Route path="/news" element={<Ycombinator posts={posts} />} />
        <Route path="/newest" element={<News />} />
        <Route path="/front" element={<Past />} />
        <Route path="/newcomments" element={<Comments />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/show" element={<Show />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
