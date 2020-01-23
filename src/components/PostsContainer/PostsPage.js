//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => { 
  console.log(props.data, props);
  return (
    <div className="posts-container-wrapper">
      {/* {props.state.map((data)=>{
        return(
          <Post post={data}/>
        )
      })}  */}
    </div>
  );
};
export default PostsPage;

