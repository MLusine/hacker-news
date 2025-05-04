import React from "react";
import { Link } from "react-router-dom";

const Ycombinator = ({ posts }) => {
  return (
    <main className="content">
      <ol>
        {posts.map((post) => (
          <li key={post._id}>
            <a href={post.url}>{post.title}</a>
            <p>
              {post.points} points by {post.author} {post.timeAgo} |{" "}
              <span>
                {" "}
                <Link to="/newcomments">
                  {post.comments?.length || 0} comments{" "}
                </Link>
              </span>
            </p>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default Ycombinator;
