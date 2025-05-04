import React, { useEffect, useState } from "react";
import "./Comments.css";

const Comments = () => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);

  const author = localStorage.getItem("username");

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then(setComments)
      .catch(console.error);
  }, []);

  const handleAddComment = async () => {
    if (!author) {
      alert("You must be logged in to comment.");
      return;
    }

    if (!input.trim()) return;

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: input,
        author,
        timestamp: new Date().toISOString(),
      }),
    });

    if (res.ok) {
      const newComment = await res.json();
      setComments([newComment, ...comments]);
      setInput("");
    } else {
      alert("Failed to save comment");
    }
  };

  const getMinutesAgo = (timestamp) => {
    const diff = Math.floor((Date.now() - new Date(timestamp)) / 60000);
    return diff === 0 ? "just now" : `${diff} minute${diff > 1 ? "s" : ""} ago`;
  };

  const formatComment = (text) => {
    if (typeof text !== "string") return "";
    return text.replace(/^/gm, "▸ ");
  };

  return (
    <div className="comments-wrapper">
      <textarea
        className="textarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your comment here..."
      />
      <button className="add-comments-btn" onClick={handleAddComment}>
        Add Comment
      </button>
      <div className="comments-list">
        {comments.map((c, i) => (
          <div key={i}>
            <p
              style={{
                whiteSpace: "pre-line",
                color: "gray",
                margin: "10px",
                fontSize: "0.8em",
              }}
            >
              {formatComment(c.author)} {getMinutesAgo(c.createdAt)}
            </p>

            <p key={c._id || i} style={{ marginLeft: "10px" }}>
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
