//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from "../../../src/dummy-data.js";

const PostsPage = () => {
  // set up state for your data

  return (
    <div className="posts-container-wrapper">
      {data.map(item => {
        return (
          <Post post = { item } />
        )
      })}
    </div>
  );
};

export default PostsPage;

