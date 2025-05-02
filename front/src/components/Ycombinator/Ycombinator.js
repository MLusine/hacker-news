import React from "react";

const Ycombinator = ({ posts }) => {
  return (
    <main className="content">
      <ol>
        {posts.map((post) => (
          <li key={post._id}>
            <a href={post.url}>{post.title}</a>
            <p>
              {post.points} points by {post.author} {post.timeAgo} | {post.comments?.length || 0} comments
            </p>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default Ycombinator;
