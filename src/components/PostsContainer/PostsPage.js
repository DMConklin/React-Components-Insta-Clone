//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import Data from "../../dummy-data.js";

const PostsPage = () => {
  // set up state for your data

  return (
    <div className="posts-container-wrapper">
      {Data.map(post => {
        return (
          <Post post = { post } />
        )
      })}
    </div>
  );
};

export default PostsPage;